import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from '../database/Tmdb';
import MovieRow from '../components/MovieRow/MovieRow';
import FeaturedMovie from '../components/FaturedMovie/FeaturedMovie';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import animeNetflix from '../Img/animeNetflix.gif'
import loadNetflix from '../Img/loadNetflix.gif'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [startNetflix, setStartNetflix] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);

      if (list.length > 0) {
        Header(false);
        setStartNetflix(true);
        
        setTimeout(function () {
          setStartNetflix(false);
          Header(false);
        }, 3880);
      }
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => ( //mostrando os títulos
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />

      {startNetflix &&
        <div className="loading">
          <img src={animeNetflix} alt="Carregando" />
        </div>
      }

      {movieList.length <= 0 &&
        <div className="loading">
          <img src={loadNetflix} alt="Carregando" />
        </div>
      }
    </div>
  );
}