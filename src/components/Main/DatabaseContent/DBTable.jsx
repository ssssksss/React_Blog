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
                                            <li>     bbd_no number generated always as identity primary key, -- 게시판 번호 </li>
                                            <li>     bbd_title varchar(180) not null, -- 게시판 제목</li>
                                            <li>     bbd_content varchar(4000) not null, --게시판 제목 </li>
                                            <li>     bbd_writer varchar(30) not null, --게시판 작성자 </li>
                                            <li>     bbd_regdate date default sysdate, --게시판 생성일 </li>
                                            <li>     bbd_revdate date default sysdate, --게시판 수정일 </li>
                                            <li>     bbd_viewcnt number default 0, --게시판 조회수 </li>
                                            <li>     bbd_goodcnt number default 0, --게시판 좋아요 횟수 </li>
                                            <li>     bbd_badcnt number default 0, --게시판 싫어요 횟수 </li>
                                            <li>     bbd_reportcount number default 0, --게시판 신고횟수 </li>
                                            <li>     bdd_viewaccess char default 'T' --게시판 보이기 허용 여부  </li>
                                        </li>
                                        <li> ); </li>
                                    </div>
                                </div>
                            </details>
                        </div>
                        {/*  */}
                        <div className='mblock'>
                            <details>
                                <summary className='stitle'>
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