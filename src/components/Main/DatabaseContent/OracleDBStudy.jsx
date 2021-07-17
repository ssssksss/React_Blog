import React, { useEffect, useRef, useState } from 'react';

const OracleDBStudy = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);

        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        // 좌측 메뉴가 이동이 안되는 높이 일때 + 
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            blockRef.current[0].style.position = 'relative';
            blockRef.current[0].style.left = '0px';
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[1].style.left = null;
        }
    }

    const blockRef = useRef([]);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    return (
        <>
            <button className="lblocknav_btn" onClick={() => {
                blockRef.current[0].style.display === 'inline-block' ?
                    blockRef.current[0].style.display = 'none' :
                    blockRef.current[0].style.display = 'inline-block';
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
            }}> 🦉 </button>
            <div className="lblocknav_container" ref={(elem) => (blockRef.current[0] = elem)}>
                <div className="lblocknav">
                    <span className="mtitle">
                        <a href="#main" className="col_b"> <b>  </b> </a>
                        <button className="lblocknav_btn2" onClick={() => {
                            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
                            document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
                        }}> ❌ </button>
                    </span>
                    <div className="hyperlink">
                        <details open>
                            <summary>  </summary>
                            <a href="#기본용어">  기본용어 </a>
                            <a href="#데이터베이스 관련"> 데이터베이스 관련  </a>
                            <a href="#테이블 관련"> 테이블 관련  </a>
                            <a href="#유저 관련 설정"> 유저 관련 설정  </a>
                            <a href="#권한 관련">  권한 관련 </a>
                            <a href="#REVOKE">  REVOKE </a>
                            <a href="#ALTER"> ALTER  </a>
                            <a href="#DROP">  DROP </a>
                            <a href="#TRUNCATE">  TRUNCATE </a>
                            <a href="#INSERT"> INSERT </a>
                            <a href="#UPDATE"> UPDATE  </a>
                            <a href="#DELETE"> DELETE  </a>
                            <a href="#SELECT"> SELECT </a>
                            <a href="#조건문"> 조건문  </a>
                            <a href="#트랜잭션"> 트랜잭션  </a>
                            <a href="#시퀸스"> 시퀸스  </a>
                            <a href="#날짜,시간">  날짜,시간 </a>
                            <a href="#">   </a>
                            <a href="#">   </a>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">

                    <span className="mtitle"> <a name="MySQL Study">  OracleDB 공부  </a> </span>
                    <p> cmd창으로 접속 방법 : sqlplus 유저명/비번 </p>

                    <span className="mblock">
                        <span className="stitle"> <a name="기본용어"> 기본용어 </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 기본용어 </span>
                            <ul>
                                <li> 스키마 : 사용자가 생성한 객체(테이블,인덱스,프로시저,뷰 등), DBMS마다 차이가 있음 </li>
                                <li> 테이블 : DB데이터(레코드)를 정렬하여 보관하고 있는 단위 , 테이블을 컬럼(필드)과 레코드로 구성되어있다. </li>
                                <li> 레코드 : 한 객체에 대한 정보, 테이블에 가로줄 , ex{")"} 한명의 유저의 아이디,비밀번호,이메일 등을 가지고 있는 단위 </li>
                                <li> 컬럼,필드 : 객체에 있는 속성들을 정의하는 단위, ex{")"} 컬럼 종류 : 아이디, 비밀번호, 이메일, 부서, 나이 등등 </li>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="데이터베이스 관련"> 데이터베이스 관련 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 모든 유저 조회 </span>
                                <li> SELECT * FROM ALL_users; </li>
                                <span className="sstitle"> 특정 유저 조회 </span>
                                <li> SELECT 유저명 FROM ALL_users; </li>
                                <span className="sstitle"> 모든 DB(스키마) 확인 </span>
                                <li>  SELECT * FROM DBA_users; </li>
                                <span className="sstitle"> </span>
                                <li>   </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="테이블 관련"> 테이블 관련 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 테이블의 컬럼 조회 </span>
                                <li> DESC 테이블명; </li>
                                <span className="sstitle"> 모든 스키마 확인 </span>
                                <li>   </li>
                                <span className="sstitle"> </span>
                                <li>   </li>
                                <span className="sstitle"> </span>
                                <li>   </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="유저 관련 설정">  유저 관련 설정 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 유저 생성 </span>
                                <li> create user c##유저명 identified by 비번; </li>
                                <span className="sstitle"> 접속 유저 변경 </span>
                                <li> conn c##유저명/비번; (connect 권한이 필요) </li>
                                <span className="sstitle"> 접속사용자 확인 </span>
                                <li> show user; </li>
                                <span className="sstitle"> 유저 비번 변경 </span>
                                <li>  ALTER USER c##유저명 IDENTIFIED BY 변경할 비번; </li>
                                <span className="sstitle"> 사용자가 가진 테이블 목록을 보여준다. </span>
                                <li> SELECT tname FROM tab; </li>
                                <span className="sstitle"> 유저 삭제 </span>
                                <li> DROP USER c##유저명; </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="권한 관련">  권한 관련 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> GRANT </span>
                                <li> GRANT @ TO C##유저명; </li>
                                <span className="mblock">
                                    <ul>
                                        <span className="sstitle"> @에 들어가는 코드 </span>
                                        <li> connect </li>
                                        <li> resource </li>
                                        <li> create view : 뷰 생성</li>
                                        <li> create procedure : 프로시저 생성 </li>
                                        <li> create sequence : 시퀸스 생성 </li>
                                        <li> dba </li>
                                        <li> create user : 유저생성 </li>
                                        <li> select any table : 모든 유저 테이블 조회 </li>
                                        <li> create any table : 모든 유저 테이블 생성 </li>
                                        <li> create session : 데이터 베이스 접속 </li>
                                        <li> create table : 테이블 생성 </li>
                                        <li> sysdba : 데이터베이스관리 최고권한(사용 비추) </li>
                                        <li> sysoper : 데이터베이스 관리 권한 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </ul>
                                </span>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="REVOKE">  REVOKE </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 유저 연결 끊기 </span>
                                <li> REVOKE connect FROM c##유저명; </li>
                                <span className="sstitle"> 유저 권한,sys명령,SQL 끊기 </span>
                                <li> REVOKE 권한,sys명령,SQL on 테이블명 FROM c##유저명; </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name=""> CREATE </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 테이블 생성 </span>
                                <li> create table 테이블명(컬럼명 타입 속성) </li>
                                <span className="mblock">
                                    <span className="sstitle"> 타입 </span>
                                    <ul>
                                        <li> NUMBER : 숫자 </li>
                                        <li> VARCHAR(데이터크기) : 가변길이 텍스트 </li>
                                        <li> CLOB : 대용량 텍스트 </li>
                                        <li> DATE : 고정길이 날짜 </li>
                                        <li> BLOB : 대용량 이진데이터 </li>
                                        <li> CHAR(데이터크기) : 고정길이 데이터 </li>
                                        <li> NCHAR(데이터크기) : 전세계문자 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </ul>
                                    <span className="sstitle"> 속성 </span>
                                    <ul>
                                        <li> PRIMARY KEY </li>
                                        <li> NOT NULL </li>
                                        <li> DEFAULT 값  </li>
                                        <li>  </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </ul>
                                </span>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="ALTER"> ALTER </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 테이블 컬럼의 타입과 속성을 변경한다 </span>
                                <li> ALTER TABLE 테이블명 MODIFY(컬럼명 타입, 바꿀컬럼명 타입); </li>
                                <span className="sstitle"> 테이블 컬럼 추가 </span>
                                <li> ALTER TABLE 테이블명 ADD(컬럼명 타입); </li>
                                <span className="sstitle"> 테이블 컬럼 삭제 </span>
                                <li> ALTER TABLE 테이블명 DROP(컬럼명1, 컬럼명2) </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}
                            </ul>
                        </span>
                    </span>


                    <span className="mblock">
                        <span className="stitle"> <a name="DROP"> DROP </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 테이블 삭제 </span>
                                <li> DROP TABLE 테이블명; , 테이블에 레코드가 존재하면 지워지지 않는것으로 알고 있음 </li>
                                <span className="sstitle"> 테이블에 레코드가 있을 떄 강제 삭제 </span>
                                <li> DROP TABLE 테이블명 CASCADE CONSTRAINTS PURGE; </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="TRUNCATE"> TRUNCATE </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 테이블의 모든 레코드 삭제 </span>
                                <li>  TRUNCATE TABLE 테이블명; </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="INSERT"> INSERT </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 레코드 생성 </span>
                                <li> INSERT INTO 테이블명 VALUES(컬럼값1, 컬럼값2, ...); , 단 컬럼은 순서에 맞게 입력해야 한다. </li>
                                <li> INSERT INTO 테이블명(컬럼명1, 컬럼명2, ...) VALUES(컬럼값1, 컬럼값2, ...);  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="UPDATE"> UPDATE </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 조건에 맞게 테이블 레코드의 컬럼값들을 변경  </span>
                                <li> UPDATE 테이블명 SET 컬럼명=바꿀값 WHERE 조건문 </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="DELETE">  DELETE </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 조건에 맞는 테이블 레코드를 삭제 </span>
                                <li> DELETE FROM 테이블명 WHERE 조건문 </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="SELECT">  SELECT </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 테이블 특정 컬럼값만 조회 </span>
                                <li> SELECT 컬럼명1,컬럼명2 FROM 테이블명;  </li>
                                <span className="sstitle"> 테이블 모든 컬럼값 조회 </span>
                                <li> SELECT * FROM 테이블명; </li>
                                <span className="sstitle"> 시퀸스 조회 </span>
                                <li> SELECT * FROM 시퀸스명; </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="조건문"> 조건문 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="mblock">
                                    <span className="sstitle"> WHERE </span>
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                <span className="mblock">
                                    <span className="sstitle"> LIKE </span>
                                    <small> LIKE는 대소문자를 구분하여 컬럼값 검색 그러므로 문자열을 대문자나,소문자로 바꾸어서 검색</small>
                                    <li> 와일드카드 : %(어떠한 문자든 검색) , _(자릿수 검색) </li>
                                    <li> ex) WHERE 컬럼명 LIKE 'MI%' , 대문자 MI로 시작하는 컬럼값 비교 </li>
                                    <li> ex) WHERE 컬럼명 LIKE '%KE' , 대문자 KE로 끝나는 컬럼값 검색 </li>
                                    <li> ex) WHERE 컬럼명 LIKE '%IK%', 대문자 IK를 포함하는 컬럼값 검색  </li>
                                    <li> ex) WHERE 컬럼명 (UPPER)LIKE (UPPER)'%IK%', IK를 포함하는 컬럼값 검색  </li>
                                    <li> ex) WHERE 컬럼명 (LOWER)LIKE (LOWER)'%IK%', IK를 포함하는 컬럼값 검색  </li>
                                    <li> ex) WHERE 컬럼명 LIKE '%IK%' OR 컬럼명 LIKE '%OH%', IK혹은 OH를 포함하는 컬럼값 검색  </li>
                                    <li> ex) WHERE REGEXP _LIKE(컬럼명, 'MIKE|JOHN')  , IK혹은 OH를 포함하는 컬럼값 검색  </li>
                                    <li> ex) WHERE 컬럼명 NOT LIKE '%IK%', IK를 포함하지않는 컬럼값 검색  </li>
                                    <li> ex) WHERE 컬럼명 LIKE 'MIK_' , MIK + 1글자 를 가진 컬럼값을 검색   </li>
                                    <li> ex) WHERE 컬럼명 LIKE '%K_' , %K + 1글자 K라는글자뒤에 1글자가 포함된 컬럼값 검색 </li>
                                    <li> ex) WHERE 컬럼명 LIKE '%\_%' ESCAPE '\' , 언더바문자(_)를 포함하는 컬럼값 검색 ,
                                        \문자말고도 아무런 문자 사용이 가능하다. 동일하게만 설정해주면 가능하다 </li>
                                </span>
                                <span className="mblock">
                                    <span className="sstitle"> BETWEEN </span>
                                    <li> BETWEEN 시작범위 AND 종료범위 </li>
                                    <li> SELECT * FROM emp where employage BETWEEN '10' AND '20' </li>
                                    <li>  </li>
                                </span>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="트랜잭션"> 트랜잭션 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 커밋 </span>
                                <li> COMMIT; </li>
                                <li> SET AUTOCOMMIT=1(auto),0(!auto) </li>
                                <li> 자동 COMMIT : 정상 졸료되거나, DDL,DCL명령이 수행된 경우 </li>
                                <span className="sstitle"> 롤백 </span>
                                <li> ROLLBACK; : 이전 커밋까지 복구 </li>
                                <li> ROLLBACK TO SAVAPOINT 롤백세이브명 : 세이브 포인트 지점으로 롤백한다. </li>
                                <li> SAVAPOINT 롤백세이브명 : 세이브 포인트 지점을 저장한다. </li>
                                <li> 자동 ROLLBACK : 비정상종료 된 경우 </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>


                    <span className="mblock">
                        <span className="stitle"> <a name="시퀸스">  시퀸스 </a> </span>
                        <ul>
                            <li><small> Unique값을 생성해주는 Oracle객체 </small>    </li>
                            <li><small> 자동으로 증가하는 컬럼 생성가능 </small>   </li>
                            <li><small>시퀸스는 테이블과 독립적으로 작용하며 여러 테이블에 사용이 가능한다. </small>    </li>
                        </ul>
                        <span className="sblock">
                            <small> 한번에 속성값을 포함하여 한줄로 코딩</small>
                            <ul>
                                <span className="sstitle"> 시퀸스 생성 </span>
                                <li>  CREATE SEAUENCE 시퀸스명 </li>
                                <span className="sstitle"> 시퀸스 시작값 지정 </span>
                                <li>  START WITH 시작값(숫자) </li>
                                <span className="sstitle"> 시퀸스 증가값 지정  </span>
                                <li>  INCREMENT BY 증가값(숫자) </li>
                                <span className="sstitle"> 시퀸스 최댓값 지정 </span>
                                <li>  MAXVALUE 최대값(숫자) </li>
                                <span className="sstitle"> 시퀸스 최솟값 지정 </span>
                                <li>  MINVALUE 최솟값(default=20,숫자) </li>
                                <span className="sstitle"> CACHE 사용여부 </span>
                                <li> NOCACHE / CACHE 캐시수(숫자) </li>
                                <span className="sstitle"> 최댓값 도달시 시작값부터 다시 반복 설정 </span>
                                <li> NOCYCLE / CYCLE , 캐시를 사용하여 미리 값을 할당해 놓으면 속도가 빠르며, 동시 사용자가 많으면 유리하다고 한다.
                                    그렇다면 반대는?</li>
                                <span className="sstitle"> 요청 순서대로 값을 생성할지 여부 </span>
                                <li> NOORDER / ORDER , 요청순서로 값을 생성하여 순서를 보장하지만 시스템의 부하가 약간 있음</li>
                            </ul>
                        </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 시퀸스 수정 </span>
                                <li> ALTER SEQUENCE 시퀸스명 수정할내용과값(ex) INCREMENT BY 1) </li>
                                <span className="sstitle"> 시퀸스 삭제 </span>
                                <li> DROP SEQUENCE 시퀸스명 </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                            </ul>
                        </span>
                        <span className="stitle"> 시퀸스 사용 </span>
                        <span className="sblock">
                            <span className="sstitle"> NEXTVAL </span>
                            <li> 시퀸스명.NEXTVAL , 시퀸스에 컬럼값을 넣을 떄 자동으로 값이 증가한다. </li>
                            <span className="sstitle"> CURRVAL </span>
                            <li> SELECT 시퀸스명.CURRVAL FROM dual , 현재 시퀸스 순번을 가져온다. NEXTVAL을 한번 실행한
                                쿼리에서 사용이 가능하다고 한다. </li>
                            <span className="sstitle">  </span>
                            <li>  </li>
                            <span className="sstitle">  </span>
                            <li>  </li>
                            <span className="sstitle">  </span>
                            <li>  </li>
                        </span>
                    </span>


                    <span className="mblock">
                        <span className="stitle"> <a name="날짜,시간"> 날짜,시간 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> TO_DATE('날짜', '형식') </span>

                                <li> TO_DATE('2021-07-18','YYYY-MM-DD') </li>
                                <li> TO_DATE('11:11:11','HH24:MI:SS') </li>
                                <li> TO_DATE('2021-07-18 11:11:11','YYYY-MM-DD HH24:MI:SS') </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 날짜 차이 계산 </span>
                                <small> ROUND나 TRUNC 함수를 이용하여 초단위를 처리 </small>
                                <span className="sstitle"> 시간 차이 계산 </span>
                                <li> TO_DATE(YYYY-MM-DD HH:MI:SS) - TO_DATE(YYYY-MM-DD HH:MI:SS) * 24 </li>
                                <li> TO_DATE(HH24:MI) - TO_DATE(HH24:MI) * 24 </li>
                                <li> ROUND(TO_DATE(HH24:MI) - TO_DATE(HH24:MI) * 24,2) </li>
                                <span className="sstitle"> 분 차이 계산 </span>
                                <li> TO_DATE(YYYY-MM-DD HH:MI:SS) - TO_DATE(YYYY-MM-DD HH:MI:SS) * 24 * 60 </li>
                                <span className="sstitle"> 초 차이 계산 </span>
                                <li> TO_DATE(YYYY-MM-DD HH:MI:SS) - TO_DATE(YYYY-MM-DD HH:MI:SS) * 24 * 60 * 60</li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>


                    <span className="mblock">
                        <span className="stitle"> <a name="기타">  기타 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> cmd창에서 간격 조절 </span>
                                <li> SET LINESIZE 문자수; </li>
                                <li> SET PAGESIZE 라인수; </li>
                                <li> COL 컬럼명 FOR a출력자리공간(숫자로 a뒤에 입력); </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="">   </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                </span>
            </div>
        </>
    );
}
export default OracleDBStudy;
