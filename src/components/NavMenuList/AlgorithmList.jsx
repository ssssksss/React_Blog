import React from 'react';
import { Link } from 'react-router-dom';

const AlgorithmList = () => {


    return (
        <div className="menucontainer">
            <div className="menu menu1">
                <Link to="/algorithm_backtracking"> 백트래킹 </Link>
                <Link to="/algorithm_divide_conquer"> 분할 알고리즘 </Link>
                <Link to="/algorithm_dynamic"> 동적 계획법 </Link>
                <Link to="/algorithm_graph"> 그래프 알고리즘 </Link>
                <Link to="/algorithm_greedy"> 탐욕 알고리즘 </Link>
            </div>
            <div className="menu menu2">
                <Link to="/algorithm_hash"> 해시 알고리즘 </Link>
                <Link to="/algorithm_recursive"> 재귀 알고리즘 </Link>
                <Link to="/algorithm_search"> 검색 알고리즘 </Link>
                <Link to="/algorithm_sort"> 정렬 알고리즘 </Link>
            </div>
        </div>
    );
}

export default AlgorithmList;