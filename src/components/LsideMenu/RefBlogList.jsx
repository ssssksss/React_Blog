import React from 'react';
import './LsideMenuStyle.css';
import { Link } from 'react-router-dom';

const RefBlogList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (

        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/ref_blog"> 참고 블로그 </Link>
            </div>
            <div className="menu menu2">

            </div>
        </div>
    );
}

export default RefBlogList;

