import React from 'react';
import { Link } from 'react-router-dom';

const BlockChain = () => {


    return (
        <div className="nav-menu2__inner-box">
            <div className="menu menu1">
                <Link to="/blockchain_pow"> BlockChainPow  </Link>
            </div>
            <div className="menu menu2">
            </div>
        </div>
    );
}

export default BlockChain;