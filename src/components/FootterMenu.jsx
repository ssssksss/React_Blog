import React from 'react';
import './FootterMenu.css';

const FootterMenu = () => {
    return (
        <div className="FootMenu">
            <div>

            </div>
            <div className="submenu">
                <button> <a href="https://github.com/ssssksss" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/img/NavMenu/Github_icon.svg'} alt="" /> </a> </button>
                <button> <a href="https://www.acmicpc.net/user/ssssksss" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/img/NavMenu/Baekjoon_icon.svg'} alt="" /> </a> </button>
                <button> <a href="https://www.figma.com/file/jJaxrJ4zp0FmQyzJgViibu/Coding?node-id=2%3A9" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/img/NavMenu/Figma_icon.svg'} alt="" /> </a> </button>
            </div>
        </div>
    );
}

export default FootterMenu;