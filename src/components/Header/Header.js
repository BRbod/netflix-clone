import React from "react";
import './Header.css';
import netflix from '../../Img/netflixLogo.png'
import search from '../../Img/searchIcon.png'
import present from '../../Img/presentIcon.png'
import news from '../../Img/newsIcon.png'
import avatar from '../../Img/userIcon.png'

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={netflix} alt="Netflix" />
                </a>
            </div>
            <ul className="headerMenu">
                <li>Início</li>
                <li>Séries</li>
                <li>Filmes</li>
                <li>Bombando</li>
                <li>Minha Lista</li>
            </ul>
            <div className="header--search">
                <a href="/">
                    <img src={search} alt="search_icon" />
                </a>
            </div>
            <div className="header--present">
                <a href="/">
                    <img src={present} alt="present_icon" />
                </a>
            </div>
            <div className="header--news">
                <a href="/">
                    <img src={news} alt="news_icon" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={avatar} alt="user_icon" />
                </a>
            </div>
        </header>
    );
}