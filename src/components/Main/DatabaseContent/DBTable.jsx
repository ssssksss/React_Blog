import React, { useEffect, useRef } from 'react';

const DBTable = (props) => {

    return (
        <>
            <div className="common_style">
                <ul>
                    <span className="lblock">
                        {/*  */}
                        <div className='mblock'>
                            <details>
                                <summary className='stitle'> 게시판 테이블
                                    <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                                <div className='sblock'>
                                    <div className='sstitle'> 게시판 테이블(오라클) </div>
                                    <div className='mblock'>
                                        <li> CREATE TABLE board (
                                            <li> board_no number generated always as identity primary key, </li>
                                            <li> board_title varchar(180) not null, </li>
                                            <li> board_content varchar(4000) not null, </li>
                                            <li> board_writer varchar(30) not null,  </li>
                                            <li> board_credate date default sysdate,  </li>
                                            <li> board_upddate date default sysdate,  </li>
                                            <li> board_viewcnt number default 0,  </li>
                                            <li> board_goodcnt number default 0,  </li>
                                            <li> board_badcnt number default 0,  </li>
                                            <li> board_reportcount number default 0,  </li>
                                            <li> board_state number default 1  </li>
                                        </li>
                                        <li> ); </li>
                                    </div>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className='mblock'>
                            <details>
                                <summary className='stitle'> 고객 테이블
                                    <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                                <div className='sblock'>
                                    <div className='sstitle'>  </div>
                                    <div className='mblock'>
                                        <li> CREATE TABLE user (
                                            <li> user_no number generated always as identity primary key, </li>
                                            <li> user_name varchar(30) not null, </li>
                                            <li> user_birth date not null, </li>
                                            <li> user_gender varchar(3) not null, </li>
                                            <li> user_id varchar(60) not null, </li>
                                            <li> user_password varchar(120) not null, </li>
                                            <li> user_email varchar(120) not null, </li>
                                            <li> user_address varchar(120) not null, </li>
                                            <li> user_phone varchar(11) not null, </li>
                                            <li> user_rank number default 1, </li>
                                            <li> user_state number default 1, </li>
                                            <li> user_logincnt number default 0 </li>
                                        </li>
                                        <li> ); </li>
                                    </div>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className='mblock'>
                            <details>
                                <summary className='stitle'> 고객 테이블
                                    <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                                <div className='sblock'>
                                    <div className='sstitle'>  </div>
                                    <div className='mblock'>
                                        <li>  </li>
                                        <li>  </li>
                                    </div>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                    </span>
                </ul>
            </div>
        </>
    );
}

export default DBTable;