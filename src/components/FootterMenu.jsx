import React from 'react';
import './FootterMenu.css';

const FootterMenu = () => {
    return (
        <div className="FootMenu">
            <button> <a href="https://github.com/ssssksss" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + '/img/NavMenu/Github_icon.svg'} alt="" /> </a> </button>
            <button> <a href="https://www.acmicpc.net/user/ssssksss" target="_blank" rel="noopener noreferrer">
                <img src="{process.env.PUBLIC_URL + '/img/NavMenu/Baekjoon_icon.svg'}" alt="" /> </a> </button>
            <li>  </li>
        </div>
    );
}

export default FootterMenu;