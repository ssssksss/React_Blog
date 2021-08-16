import React from 'react';
import './LsideMenuStyle.css';

const GithubList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="githubList">
            <button onClick={() => { send('githubbasic') }}> 깃허브 </button>
        </div>
    );
}

export default GithubList;