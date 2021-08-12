import React, { useEffect, useRef, useState } from 'react';

const OracleDBStudy = (props) => {
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);

        //위치 계산
        let elementHeight = document.getElementsByClassName('navMenu')[0].scrollHeight +
            document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
        let testLeft = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left;
        let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
            - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
        // console.log(window.outerHeight);


        // 좌측 메뉴 이동 + 작은 버튼
        if (document.documentElement.scrollTop > elementHeight && window.innerWidth < 1024) {
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = (elementHeight + 30) + "px";
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            blockRef.current[0].style.maxWidth = '420px';
            blockRef.current[1].style.left = '25%';
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.display === 'inline-block' ?
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
                document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
        }
        // 좌측 메뉴 이동
        else if (document.documentElement.scrollTop < elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = elementHeight + "px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
        }
        else if (document.documentElement.scrollTop > elementHeight && window.innerWidth > 1023) {
            // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
            blockRef.current[0].style.position = 'fixed';
            blockRef.current[0].style.top = "10px";
            blockRef.current[0].style.display = 'inline-block';
            blockRef.current[0].style.maxWidth = testdis + "px";
            blockRef.current[0].style.height = window.outerHeight;
            blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
            // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
            blockRef.current[1].style.left = '25%';
            document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
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
                            <a href="#기본용어,추가내용">  기본용어,추가내용 </a>
                            <a href="#데이터베이스 관련"> 데이터베이스 관련  </a>
                            <a href="#테이블 관련"> 테이블 관련  </a>
                            <a href="#유저 관련 설정"> 유저 관련 설정  </a>
                            <a href="#Grant">  Grant </a>
                            <a href="#함수">  함수 </a>
                            <a href="#Revoke">  Revoke </a>
                            <a href="#Create">  Create </a>
                            <a href="#Alter"> Alter  </a>
                            <a href="#Drop">  Drop </a>
                            <a href="#Truncate">  Truncate </a>
                            <a href="#Insert"> Insert </a>
                            <a href="#Update"> Update  </a>
                            <a href="#Delete"> Delete  </a>
                            <a href="#Select"> Select </a>
                            <a href="#Where,On,Like,Between,As,Distinct"> Where,On,Like,Between,As,Distinct  </a>
                            <a href="#In,Order By,Group By, Having">  In,Order By,Group By, Having </a>
                            <a href="#계층형 쿼리">  계층형 쿼리 </a>
                            <a href="#트랜잭션"> 트랜잭션  </a>
                            <a href="#Sequence"> Sequence  </a>
                            <a href="#날짜,시간">  날짜,시간 </a>
                            <a href="#Join">  Join </a>
                            <a href="#Regular Expression"> Regular Expression  </a>
                            <a href="#Subquerry"> Subquerry </a>
                            <a href="#View">  View </a>
                            <a href="#Procedure">  Procedure </a>
                            <a href="#PL/SQL">  PL/SQL </a>
                            <a href="#기타"> 기타  </a>
                            <a href="#">   </a>
                        </details>
                    </div>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">

                    <span className="mtitle"> <a name="MySQL Study">  OracleDB 공부  </a> </span>
                    <ul>
                        <p> cmd창으로 접속 방법 : sqlplus 유저명/비번 </p>

                        <span className="mblock">
                            <span className="stitle"> <a name="기본용어,추가내용"> 기본용어,추가내용 </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> 기본용어</span>

                                <li> 스키마 : 사용자가 생성한 객체(테이블,인덱스,프로시저,뷰 등), DBMS마다 차이가 있음 </li>
                                <li> 테이블 : DB데이터(레코드)를 정렬하여 보관하고 있는 단위 , 테이블을 컬럼(필드)과 레코드로 구성되어있다. </li>
                                <li> 레코드 : 한 객체에 대한 정보, 테이블에 가로줄 , ex{")"} 한명의 유저의 아이디,비밀번호,이메일 등을 가지고 있는 단위 </li>
                                <li> 컬럼,필드 : 객체에 있는 속성들을 정의하는 단위, ex{")"} 컬럼 종류 : 아이디, 비밀번호, 이메일, 부서, 나이 등등 </li>
                                <li>  </li>

                            </span>
                            <span className="sblock">
                                <span className="sstitle"> 추가내용 </span>

                                <li> 실행순서 : FROM - ON - JOIN - WHERE - GROUP BY , HAVING, SELECT, ORDER BY </li>
                                <li>  </li>
                                <li>  </li>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="데이터베이스 관련"> 데이터베이스 관련 </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 모든 유저 조회 </span>
                                <li> SELECT * FROM ALL_users; </li>
                                <span className="sstitle"> 특정 유저 조회 </span>
                                <li> SELECT 유저명 FROM ALL_users; </li>
                                <span className="sstitle"> 모든 DB(스키마) 확인 </span>
                                <li>  SELECT * FROM DBA_users; </li>
                                <span className="sstitle"> </span>
                                <li>   </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="테이블 관련"> 테이블 관련 </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 테이블의 컬럼 조회 </span>
                                <li> DESC 테이블명; , 역순 </li>
                                <span className="sstitle">  </span>
                                <li>   </li>
                                <span className="sstitle"> </span>
                                <li>   </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="유저 관련 설정">  유저 관련 설정 </a> </span>
                            <span className="sblock">

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

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Grant">  Grant </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> GRANT </span>
                                <li> GRANT @ TO C##유저명; </li>
                                <span className="mblock">

                                    <span className="sstitle"> @에 들어가는 코드 </span>
                                    <li> CONNECT </li>
                                    <li> RESOURCE </li>
                                    <li> CREATE VIEW : 뷰 생성</li>
                                    <li> CREATE PROCEDURE : 프로시저 생성 </li>
                                    <li> CREATE SEQUENCE : 시퀸스 생성 </li>
                                    <li> DBA </li>
                                    <li> CREATE USER : 유저생성 </li>
                                    <li> SELECT ANY TABLE : 모든 유저 테이블 조회 </li>
                                    <li> CREATE ANY TABLE : 모든 유저 테이블 생성 </li>
                                    <li> CREATE session : 데이터 베이스 접속 </li>
                                    <li> CREATE table : 테이블 생성 </li>
                                    <li> SYSDBA : 데이터베이스관리 최고권한(사용 비추) </li>
                                    <li> SYSOPER : 데이터베이스 관리 권한 </li>
                                    <li> GRANT 권한명 TO 롤명 </li>
                                    <li> GRANT 롤명 TO 사용자명 </li>
                                    <li>  </li>

                                </span>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="함수">  함수 </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 그룹 함수 </span>
                                <li> SUM() , AVG() , COUNT() , MAX() , MIN() </li>
                                <li> STDDEV()(=표준편차) , VARIANCE()(=분산)  </li>
                                <li> GROUP BY 컬럼 HAVING 조건 </li>
                                <span className="sstitle"> 단일 함수 </span>
                                <li>  </li>
                                <span className="sstitle"> 일반 함수 </span>
                                <li> NVL(NOT NULL일떄,NULL일때) </li>
                                <li> NVL2(@,@ = NOT NULL일떄, @ = NULL일때) , 삼항연산느낌</li>
                                <li> DECODE(컬럼,데이터값,'@',데이터값,'@',.기본결과) , 스위치문이라고 생각</li>
                                <li> CASE WHEN 조건1 then 데이터값1 WHEN 조건2 then 데이터값2 end 별명? from 테이블; </li>
                                <span className="sstitle"> 변환 함수 </span>
                                <li> TO_CHAR(숫자-&gt;문자), TO_DATE(문자-&gt;숫자) , TO_NUMBER(문자-&gt;숫자) </li>
                                <li> YYYY,YY,MM,MON,DD,DAY,DY,AM,PM,HH,HH12,HH24,MI,SS,A.M,P.M </li>
                                <li> TO_CHAR(컬럼,'$999,999,999') , 제일 앞에 $붙이고 3자리마다 쉼표를 붙임 </li>
                                <span className="sstitle"> 날짜 함수 </span>
                                <li> SYSDATE(현재날짜), MONTHS_BETWEEN(@1,@2) , ADD_MONTHS(컬럼,개월수), NEXT_DAY </li>
                                <li> ROUND, TRUNC, LAST_DAY(달의마지막날짜반환), EXTRACT([YEAR,MONTH,DAY,HOUR,MINUTE,SECOND] FROM 날짜) </li>
                                <span className="sstitle"> 숫자 함수 </span>
                                <li> ABS, COS, EXP, FLOOR, LOG, POWER(m,n), SIN, TAN, ROUND </li>
                                <li> TRUNC(자릿수 버림), MOD(나머지), SIGN(n) -1,0,1 </li>
                                <span className="sstitle"> 문자 함수 </span>
                                <li> LOWER, UPPER, INITCAP(첫대문자) ,CONCAT(열연결), SUBSTR,SUBSTRB(@,시작위치,추출갯수) </li>
                                <li> LENGTH, LENGTHB, INSTR, INSTRB(@,찾는글자,시작위치,몇번쨰), LPAD,RPAD(@,자릿수,채워넣을기호) </li>
                                <li> CONVERT, CHR(@-&gt;아스키코드) , ASCII(아스키코드-&gt;문자) , REPLACE ,TRIM(@,FROM 컬럼)</li>
                                <li> TRIM([LEADING|TRAILING|BOTH],['@',from 컬럼]) </li>
                            </span>
                        </span>
                        <span className="mblock">
                            <span className="stitle"> <a name="Revoke">  Revoke </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 유저 연결 끊기 </span>
                                <li> REVOKE CONNECT FROM c##유저명; </li>
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

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Create"> Create </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 테이블 생성 </span>
                                <li> CREATE TABLE 테이블명(컬럼명 타입 속성) </li>
                                <span className="mblock">
                                    <span className="sstitle"> 데이터타입 </span>

                                    <li> NUMBER : 숫자 ,소수점저장가능, mysql이나 mariadb에서는 INT 사용</li>
                                    <li> VARCHAR2(데이터크기) : 가변길이 텍스트 </li>
                                    <li> CLOB : 대용량 텍스트 </li>
                                    <li> DATE : 고정길이 날짜 </li>
                                    <li> BLOB : 대용량 이진데이터 </li>
                                    <li> CHAR(데이터크기) : 고정길이 데이터, 문자열 갯수 </li>
                                    <li> NCHAR(데이터크기) : 전세계문자 </li>
                                    <li>  </li>
                                    <li>  </li>

                                    <span className="sstitle"> 조건 </span>

                                    <li> PRIMARY KEY , 중복x + NULL x </li>
                                    <li> FOREGIN KEY , 왜래키  </li>
                                    <li> NOT NULL </li>
                                    <li> DEFAULT 값  </li>
                                    <li> UNIQUE, 중복x </li>
                                    <li> CHECK , 특정 조건에 맞는 데이터만 받음, 선택조건 </li>
                                    <li> INDEX , 인덱스를 지정할 때 사용 </li>

                                </span>
                                <span className="sstitle"> 테이블 만들기 </span>
                                <li> CREATE TABLE 테이블명 (컬럼 데이터타입 조건...);  </li>
                                <span className="sstitle"> 서브쿼리를 이용하여 테이블 만들기 </span>
                                <li> CREATE TABLE 테이블명 AS 서브쿼리 </li>
                                <span className="sstitle"> DB유저들과 권한은 유지하면서 테이블을 다시 만드는 방법  </span>
                                <li>  CREATE OR REPLACE TABLE  테이블명(컬럼</li>
                                <span className="sstitle">  </span>
                                <li>   </li>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Alter"> Alter </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 테이블 컬럼의 타입과 속성을 변경한다 </span>
                                <li> ALTER TABLE 테이블명 MODIFY(컬럼명 타입, 바꿀컬럼명 타입); </li>
                                <span className="sstitle"> 테이블 컬럼 추가 </span>
                                <li> ALTER TABLE 테이블명 ADD(컬럼명 타입); </li>
                                <span className="sstitle"> 테이블 컬럼 삭제 </span>
                                <li> ALTER TABLE 테이블명 DROP(컬럼명1, 컬럼명2) </li>
                                <span className="sstitle"> 테이블 이름 변경 </span>
                                <li> ALTER TABLE 테이블명 RENAME TO 변경할테이블명 </li>
                                <span className="sstitle"> </span>
                                <li>  </li>

                            </span>
                        </span>


                        <span className="mblock">
                            <span className="stitle"> <a name="Drop"> Drop </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 테이블 삭제 </span>
                                <li> DROP TABLE 테이블명; , 테이블에 레코드가 존재하면 지워지지 않는것으로 알고 있음 </li>
                                <span className="sstitle"> 테이블에 레코드가 있을 떄 강제 삭제 </span>
                                <li> DROP TABLE 테이블명 CASCADE CONSTRAINTS PURGE; </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Truncate"> Truncate </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 테이블의 모든 레코드 삭제 </span>
                                <li>  TRUNCATE TABLE 테이블명; </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Insert"> Insert </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 레코드 생성 </span>
                                <li> INSERT INTO 테이블명 VALUES(컬럼값1, 컬럼값2, ...); , 단 컬럼은 순서에 맞게 입력해야 한다. </li>
                                <li> INSERT INTO 테이블명(컬럼명1, 컬럼명2, ...) VALUES(컬럼값1, 컬럼값2, ...);  </li>
                                <li> INSERT INTO 테이블명 (SELECT * FROM 다른테이블) , 스키마가 동일해야 가능  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Update"> Update </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 조건에 맞는 테이블 레코드의 컬럼값들을 한꺼번에 변경  </span>
                                <li> UPDATE 테이블명 SET salary=4000 WHERE job='clerk'; </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Delete">  Delete </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 조건에 맞는 테이블 레코드를 삭제 </span>
                                <li> DELETE FROM 테이블명 WHERE 조건문 </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Select">  Select </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> 테이블 특정 컬럼값만 조회 </span>
                                <li> SELECT 컬럼명1,컬럼명2 FROM 테이블명;  </li>
                                <span className="sstitle"> 테이블 모든 컬럼값 조회 </span>
                                <li> SELECT * FROM 테이블명; </li>
                                <span className="sstitle"> 시퀸스 조회 </span>
                                <li> SELECT * FROM 시퀸스명; </li>
                                <span className="sstitle"> 다른 테이블의 (컬럼 혹은 일부 컬럼)만 가져와 (비어있는)테이블 생성 </span>
                                <li> SELECT * INTO 테이블명 FROM 다른테이블 </li>
                                <li> SELECT * INTO 테이블명 FROM (SELECT 컬럼1,컬럼2... FROM 다른테이블) </li>
                                <span className="sstitle"> </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Where,On,Like,Between,As,Distinct"> Where,On,Like,Between,As,Distinct </a> </span>

                            <span className="sblock">
                                <span className="sstitle"> WHERE, ON </span>
                                <li>  </li>
                                <li>  </li>
                                <li> <small> 둘다 조건을 처리하는 것이 같다. 하지만 ON이 먼저 실행된다. 그래서 OUTER JOIN을 할 때 차이가 발생한다. </small> </li>
                                <li> 아래 2개의 쿼리는 같아보이지만 실행하였을 떄 1번은 OUTER JOIN의 특성을 살리지 못하고 1000보다 작으면 다 지워버린다. </li>
                                <li> ON 테이블1.컬럼 = 테이블2.컬럼 WHERE 테이블1.컬럼 &gt; 1000;</li>
                                <li> ON 테이블1.컬럼 = 테이블2.컬럼 AND 테이블1.컬럼 &gt; 1000; </li>
                            </span>

                            <span className="sblock">
                                <span className="sstitle"> LIKE </span>
                                <small> LIKE는 대소문자를 구분하여 컬럼값 검색 그러므로 문자열을 대문자나,소문자로 바꾸어서 검색</small>
                                <li> 와일드카드 : %(어떠한 문자든 검색) , _(자릿수 검색) </li>
                                <li> WHERE 컬럼명 LIKE 'MI%' , 대문자 MI로 시작하는 컬럼값 비교 </li>
                                <li> WHERE 컬럼명 LIKE '%KE' , 대문자 KE로 끝나는 컬럼값 검색 </li>
                                <li> WHERE 컬럼명 LIKE '%IK%', 대문자 IK를 포함하는 컬럼값 검색  </li>
                                <li> WHERE 컬럼명 (UPPER)LIKE (UPPER)'%IK%', IK를 포함하는 컬럼값 검색  </li>
                                <li> WHERE 컬럼명 (LOWER)LIKE (LOWER)'%IK%', IK를 포함하는 컬럼값 검색  </li>
                                <li> WHERE 컬럼명 LIKE '%IK%' OR 컬럼명 LIKE '%OH%', IK혹은 OH를 포함하는 컬럼값 검색  </li>
                                <li> WHERE REGEXP _LIKE(컬럼명, 'MIKE|JOHN')  , IK혹은 OH를 포함하는 컬럼값 검색  </li>
                                <li> WHERE 컬럼명 NOT LIKE '%IK%', IK를 포함하지않는 컬럼값 검색  </li>
                                <li> WHERE 컬럼명 LIKE 'MIK_' , MIK + 1글자 를 가진 컬럼값을 검색   </li>
                                <li> WHERE 컬럼명 LIKE '%K_' , %K + 1글자 K라는글자뒤에 1글자가 포함된 컬럼값 검색 </li>
                                <li> WHERE 컬럼명 LIKE '%\_%' ESCAPE '\' , 언더바문자(_)를 포함하는 컬럼값 검색 ,
                                    \문자말고도 아무런 문자 사용이 가능하다. 동일하게만 설정해주면 가능하다 </li>
                            </span>

                            <span className="sblock">
                                <span className="sstitle"> BETWEEN </span>
                                <li> BETWEEN 시작범위 AND 종료범위 </li>
                                <li> SELECT * FROM emp where employage BETWEEN '10' AND '20' </li>
                                <li>  </li>
                            </span>

                            <span className="sblock">
                                <span className="sstitle"> AS </span>
                                <small> 테이블의 이름이 길 경우 짧게 이름 지어 사용 </small>
                                <small> AS 별칭(공백x,특수문자x,대소문자x) , 띄어쓰기 별칭(공백,특수문자,대소문자) </small>
                                <li> SELECT * FROM 테이블 A WHERE A.salary &lt; 1000  </li>
                                <li> SELECT salary AS sal FROM 테이블 , 출력이 될 떄 컬럼자리에 sal로 표현이 된다. </li>
                                <li>  </li>
                            </span>

                            <span className="sblock">
                                <span className="sstitle"> DISTINCT </span>
                                <li> 중복값을 제거해서 조회 </li>
                                <li> SELECT DISTINCT 컬럼명 FROM 테이블; </li>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="In,Order By,Group By, Having"> In,Order By,Group By, Having </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> IN(다중 OR) </span>
                                <li> WHERE job IN (clerk,manager); </li>
                                <li> WHERE job NOT IN (clerk,manager); </li>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </span>

                            <span className="sblock">
                                <span className="sstitle"> ORDER BY </span>
                                <li> <small> 출력할 때 순서대로 정렬을 해준다. </small>  </li>
                                <li> 쿼리문 제일 뒤에 Order By 컬럼명,럼럼명 DESC; , 역순 </li>
                                <li> 쿼리문 제일 뒤에 Order By 컬럼명,럼럼명 ASC;  , 오름차순? </li>
                            </span>

                            <span className="sblock">
                                <span className="sstitle"> GROUP BY </span>
                                <li> <small> 그룹으로 묶어서 결과를 보고싶을때 </small> </li>
                                <li> SELECT class, SUM(score) FROM student GROUP BY class; , 학급별로 시험의 합계를 볼 수 있음 </li>
                                <li>  </li>
                            </span>

                            <span className="sblock">
                                <span className="sstitle"> HAVING </span>
                                <li> SELECT class, SUM(score) FROM student GROUP BY class HAVING SUM(class) &gt; 100 </li>
                                <li> SELECT count(*), sum(salary) FROM employees GROUP BY dept_no HAVING count(*) &gt; 2 , 부서에 2명이상일 경우 </li>
                                <li>  </li>
                                <li>  </li>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="계층형 쿼리"> 계층형 쿼리  </a> </span>
                            <span className="sblock">
                                <span className="sstitle"> hierarchical(하이커리) </span>
                                <li> <small> 계층형 구조, 오라클 8버전 이상 지원 </small> </li>
                                <li> NODE : 항목 한개 , ROOT : 최상단 노드 , PARENT : 상위 노드 </li>
                                <li> CHILD : 하위 노드 , LEAF : 최하단 노드   </li>
                                <li> LEVEL :  어떤 단계에 있는지 보여주는 컬럼 , SELECT LEVEL ~ </li>
                                <li> START WITH 최상위노드조건: 최상위 루트노드를 지정 </li>
                                <li> CONNECT BY PRIOR 자식노드 = 부모노드 : 부모와 자식노드를 연결 </li>
                                <span className="sstitle"> 일반적인 예시 </span>
                                <li> SELECT LEVEL, ename, empno, mgr FROM emp START WITH mgr IS null CONNECT BY
                                    PRIOR empno = mge  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="트랜잭션"> 트랜잭션 </a> </span>
                            <span className="sblock">
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

                            </span>
                        </span>


                        <span className="mblock">
                            <span className="stitle"> <a name="Sequence">  Sequence </a> </span>

                            <li><small> Unique값을 생성해주는 Oracle객체 </small>    </li>
                            <li><small> 자동으로 증가하는 컬럼 생성가능 </small>   </li>
                            <li><small> 시퀸스는 테이블과 독립적으로 작용하며 여러 테이블에 사용이 가능한다. </small>    </li>

                            <span className="sblock">
                                <small> 한번에 속성값을 포함하여 한줄로 코딩</small>

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

                            </span>
                            <span className="sblock">

                                <span className="sstitle"> 시퀸스 수정 </span>
                                <li> ALTER SEQUENCE 시퀸스명 수정할내용과값( ex) INCREMENT BY 1) </li>
                                <span className="sstitle"> 시퀸스 삭제 </span>
                                <li> DROP SEQUENCE 시퀸스명 </li>
                                <span className="sstitle"> 시퀸스 관련 변수 </span>
                                <li> 시퀸스명.CURRVAL , 현재값 반환 </li>
                                <li> 시퀸스명.NEXTVAL , 시퀸스 다음값 반환 </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>

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
                                <span className="sstitle"> 날짜 사용 방법 </span>
                                <li> TO_DATE('2021-07-18','YYYY-MM-DD') </li>
                                <li> TO_DATE('11:11:11','HH24:MI:SS') </li>
                                <li> TO_DATE('2021-07-18 11:11:11','YYYY-MM-DD HH24:MI:SS') </li>
                                <span className="sstitle"> 조건절에서 날짜 사용 방법 </span>
                                <li> WHERE hiredate &gt; '2021/01/01'; </li>
                                <li> WHERE hiredate &gt; TO_DATE(210101); </li>
                                <li> WHERE hiredate &gt; TO_DATE('20210101','YYYYMMDD'); </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </span>
                            <span className="sblock">
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
                            </span>
                        </span>



                        <span className="mblock">
                            <span className="stitle"> <a name="Join">  Join </a> </span>
                            <small> JOIN을 하기위해서는 레코드의 수를 고려하여야 한다. </small>
                            <small> JOIN의 종류 : Inner, Outer, Cross, Self, Anti, Semi, ANSI(표준) </small>
                            <small> JOIN을 사용할 떄는 컬럼을 적을 때 테이블1.컬럼 , 테이블2.컬럼 이런식으로 테이블을 명시해 주어야 한다. </small>
                            <span className="sblock">

                                <span className="stitle"> inner join,equal join </span>
                                <span className="sstitle"> 2개의 테이블에서 공통 컬럼이 있을 때(Inner JOIN) </span>
                                <li> SELECT 컬럼... FROM 테이블1,테이블2 WHERE 테이블1.컬럼=테이블2.컬럼; </li>
                                <li> SELECT 컬럼... FROM 테이블1 INNER JOIN 테이블2 ON 테이블1.컬럼 = 테이블2.컬럼; </li>
                                <li> SELECT 컬럼... FROM 테이블1,테이블2 WHERE 테이블1.컬럼=테이블2.컬럼 AND 테이블1.컬럼='ABC'; </li>
                                <li> SELECT 컬럼... FROM 테이블1 A,테이블2 B WHERE A.컬럼=B.컬럼; , 별칭사용</li>
                                <span className="sstitle"> ANSI 표준 (Inner)JOIN </span>
                                <li> SELECT 컬럼... FROM 테이블1 JOIN 테이블2 ON 테이블1.컬럼=테이블2.컬럼 </li>
                                <li> SELECT 컬럼... FROM 테이블1 JOIN 테이블2 ON 테이블1.컬럼=테이블2.컬럼 AND 테이블1.컬럼='ABC' </li>
                                <li> SELECT 컬럼... FROM 테이블1 JOIN 테이블2 ON 테이블1.컬럼=테이블2.컬럼 WHERE 테이블1.컬럼='ABC' </li>
                                <li> SELECT 컬럼... FROM 테이블1 JOIN 테이블2 USING 공통컬럼 , ANSI </li>
                                <li> SELECT 컬럼... FROM 테이블1 NATURAL 테이블2 WHERE = 'ABC'; , 2개의 테이블의 공통컬럼을 알아서 뽑음 , ANSI </li>
                                <span className="sstitle"> 2개의 테이블에서 범위 관련 컴럼으로 JOIN </span>
                                <li> SELECT 컬럼.. FROM 테이블1,테이블2 WHERE 테이블1.컬럼 BETWEEN 테이블2.컬럼명 AND 테이블2.컬럼명 </li>
                                <span className="sstitle"> 1개의 테이블 JOIN </span>
                                <li> SELECT 컬럼 FROM 테이블1 별칭1,테이블1 별칭2 WHERE 조건 </li>
                                <span className="sstitle"> 3개의 테이블 JOIN</span>
                                <li> SELECT * FROM 테이블1 A , 테이블2 B , 테이블3 C WHERE A.컬럼=B.컬럼 AND A.컬럼=C.컬럼 </li>
                                <li> SELECT * FROM 테이블1 A JOIN 테이블2 B ON A.컬럼=B.컬럼 JOIN 테이블3 C ON A.컬럼=C.컬럼 </li>
                                <span className="stitle"> outer join </span>
                                <span className="sstitle"> 2개의 테이블 컬럼 균형맞춰서 (OUTER)JOIN </span>
                                <li> <small> INNER과 OUTER JOIN을 동시에 사용하면 에러 발생 </small> </li>
                                <li> <small> 조건에서 모든 컬럼(테이블x) 조건에 +를 붙여주어야 결과값이 제대로 나온다. </small> </li>
                                <li> <small> OR 연산자와는 같이 사용 불가 , 서브쿼리와 같이 사용불가 </small> </li>
                                <li> <small> 1개의 테이블을 기준으로 잡고 다른 여러개의 테이블에(+) JOIN을 사용해야한다. , 포괄적인 JOIN(x) </small> </li>
                                <li> SELECT 컬럼 FROM 테이블1,테이블2 WHERE 테이블1.컬럼(+) = 테이블2.컬럼 AND 테이블1.컬럼(+)&gt;100, 데이터가 없을 것 같은 쪽에 +기호 사용</li>
                                <li> SELECT * FROM 테이블1 [LEFT|RIGHT,FULL] OUTER JOIN 테이블2 , ANSI 방식 , 우측테이블이 없다면 LEFT사용 </li>
                                <li> SELECT * FROM 테이블 A, 테이블 B, 테이블 C WHERE A.컬럼 = B.컬럼(+) AND A.컬럼 = C.컬럼(+) </li>
                                <span className="stitle"> cross join </span>
                                <span className="sstitle"> Cross JOIN 사용방법 </span>
                                <li> <small> 메모리를 많이 잡아 먹어 거의 사용하지 않음, 행*행 만큼의 갯수가 나옴 </small> </li>
                                <li> SELECT A.컬럼1 A.컬럼2 B.컬럼1 FROM 테이블 A, 테이블 B </li>
                                <span className="stitle"> self join </span>
                                <span className="sstitle"> SELF JOIN 사용방법 </span>
                                <li> <small> 같은 테이블을 별칭을 2개를 두어서 사용하는 방법 </small>  </li>
                                <li> <small> 상사와의 관게, 매니저와 직원의 관계, 조직도와 부서 등을 볼때 사용하면 될것 같다 </small>  </li>
                                <li> SELECT A.컬럼 B.컬럼 FROM 테이블1 A, 테이블1 B WHERE A.컬럼=B.컬럼 </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                {/* <li> 테이블에서 왼쪽 조인 관리자(매니저) 출력 매니저 아이디 없으면 배제 하향식, 급여는 역순 </li> */}
                                {/* SELECT * FROM employee A join employee B WHERE manager_id IS NOT NULL ORDER BY salary DESC  */}
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Regular Expression"> Regular Expression </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> REGEXP_LIKE (컬럼,'패턴[조건]') </span>
                                <li> WHERE REGEXP_LIKE (DEPT, '경영[^2]팀') , 경영 2팀을 제외한 </li>
                                <li> WHERE REGEXP_LIKE (DEPT, '경영[1팀2팀]') , 경영1팀 혹은 경영2팀을 포함하는 </li>
                                <li>  </li>
                                <span className="sstitle"> REGEXP_SUBSTR (컬럼,'패턴[조건]') </span>
                                <li> SELECT REGEXP_SUBSTR(EMAIL,'[^@]+') FROM 테이블 , 이메일에서 아이디만 추출 </li>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Subquerry">  Subquerry </a> </span>
                            <small> 메인쿼리의 일부분을 추출함 </small>
                            <span className="sblock">
                                <span className="sstitle"> 단일행 서브쿼리 </span>
                                <li> =, &lt;= , &gt;=, &lt; , &gt; </li>
                                <span className="sstitle"> 다중행 서브쿼리 </span>
                                <li> IN , ANY , SOME , ALL , EXIST </li>
                                <span className="sstitle"> 서브쿼리 사용방법 </span>
                                <li> SELECT * FROM emp WHERE salary &lt; (SELECT ROUND(AVG(salary)) FROM emp); </li>
                                <li> SELECT * FROM emp WHERE IN(서브쿼리); </li>
                                <li> SELECT * FROM emp WHERE salary &lt; ALL(서브쿼리); </li>
                                <li> <small> 모든 조건을 만족해야함 </small> </li>
                                <li> SELECT * FROM emp WHERE salary &lt; ANY(서브쿼리); </li>
                                <li> <small> 단 1개의 조건만 만족을 해도 된다. </small> </li>
                                <span className="sstitle"> 서브쿼리로 테이블 생성 </span>
                                <li> CREATE TABLE 테이블 AS (SELECT * from 테이블 WHERE salary &lt; 1000)  </li>
                                <li> CREATE TABLE 테이블 AS (SELECT * FROM 테이블 WHERE 1=0;) , 테이블의 컬럼만 복사  </li>
                                <span className="sstitle"> 서브쿼리를 이용하여 다른 테이블에 레코드 넣기 </span>
                                <li> INSERT INTO 테이블 (SELECT * FROM 테이블) </li>
                                <span className="sstitle"> 서브쿼리로 테이블 레코드 수정하기 </span>
                                <li> UPDATE 테이블 SET 컬럼=(서브쿼리) WHERE 조건 </li>
                                <li> UPDATE 테이블 SET (컬럼1,컬럼2) = (컬럼2개인 서브쿼리) WHERE 조건 </li>
                                <span className="sstitle"> 서브쿼리 조건에 맞는 데이터 삭제 </span>
                                <li> DELETE FROM 테이블 WHERE 컬럼-(서브쿼리) </li>
                                {/* <span className="sstitle">  </span>
                                <li>  </li> */}

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="View"> View  </a> </span>
                            <small> 테이블의 일부를 뽑아서 사용 , 테이블계의 함수라고 생각하면 편함 , 삽입,삭제,갱신에는 제약이 있음 </small>
                            <small> 뷰 처리과정 : 뷰조회 - 뷰권한확인 - 테이블조회쿼리반환 - 테이블조회 - 결과출력 </small>
                            <span className="sblock">
                                <span className="sstitle"> 뷰 생성하기 </span>
                                <li> CREATE [OR REPLACE] [FORCE|NOFORCE] VIEW [스키마.]뷰명 AS 서브쿼리 [WITH CHECK OPTION] [WITH READ ONLY]; </li>
                                <li> [FORCE] : 테이블존재하지않아도 생성 </li>
                                <li>[NOFORCE] : 뷰가 이미 존재하면  생성X </li>
                                <li> [WITH CHECK OPTION] : 뷰 내에서만 UPDATE,INSERT </li>
                                <li>[WITH READ ONLY] : SELECT만 가능 </li>
                                <span className="sstitle"> 뷰 삭제 </span>
                                <li> DROP VIEW 뷰명 [ CASCADE CONSTRAINTS PURGE ]; </li>
                                <span className="sstitle"> 뷰 사용 불가능한 경우 </span>
                                <li> NOTNULL 컬럼이 있는 경우 </li>
                                <li> 가상컬럼이 존재하면 INSERT , UPDATE 사용 불가 </li>
                                <li> DISTINCT인 경우 DML명령 사용불가 </li>
                                <li> 그룹함수나 GROUP BY 포함한 경우에도 DML명령 사용불가  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Role"> Role  </a> </span>
                            <small> 권한들을 보관할 수 있는 리스트 , DB사용자에게 줄 권한들을 미리 정해놓을 수 있음  </small>
                            <span className="sblock">
                                <span className="sstitle"> 롤 생성 </span>
                                <li> CREATE ROLE 롤명  </li>
                                <span className="sstitle"> 롤 제거 </span>
                                <li> DROP ROLE 롤명 </li>
                                <span className="sstitle"> 롤 권한 추가 </span>
                                <li> GRANT UPDATE ON 권한 TO 롤명; </li>
                                <span className="sstitle"> 롤 권한 삭제 </span>
                                <li> GRANT DELETE ON 권한 TO 롤명; </li>
                                <span className="sstitle"> 롤 권한 조회 </span>
                                <li> GRANT SELECT ON 권한 TO 롤명; </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="Procedure"> Procedure </a> </span>
                            <li> <small> 동작을 일괄적으로 처리하는 데 사용, SQL을 프로시저로 만들어서 일괄적으로 처리 가능 </small></li>
                            <li> <small> 특정한 로직만 처리하고 반환은 하지 않음 </small></li>
                            <span className="sblock">

                                <span className="sstitle"> 프로시저 생성  </span>
                                <li> <small> CREATE OR REPLACE [PROCEDURE,VIEW,FUNCTION 등] 프로시저명( 변수명 IN 데이터타입, ... )
                                    [RETURN 데이터타입 , FUNCTION일떄 사용] IS [추가적인변수선언]
                                    BEGIN 동작쿼리 END [파라미터명];</small>  </li>
                                <li> CREATE OR REPLACE PROCEDURE procedure_company( c_name IN VARCHAR2, c_age IN NUMBER)
                                    IS c_dept := '회계'; BEGIN INSERT INTO (name,age,dept) VALUES (c_name,c_age,c_dept);
                                    COMMIT; END procedure_company; </li>
                                <span className="sstitle"> 프로시저 실행 </span>
                                <li> <small> EXEC 프로시저명(변수값,변수값); </small> </li>
                                <li> EXEC procedure_company('홍길동',100); </li>
                                <span className="sstitle"> </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="PL/SQL"> PL/SQL </a> </span>
                            <li> <a href="https://m.blog.daum.net/wetet/1746" target='_blank'> 참고 </a> </li>
                            <li> <small> SQL을 확장한 형태 , 오라클에 내장된 프로시저 언어 , 제어문,반목문 지원 </small> </li>
                            <li className="col_r"> 내용이 너무 많아서 나중에 공부</li>
                            <span className="sblock">

                                <span className="sstitle"> PL/SQL 구조 </span>
                                <li> DECLARE(선언) : BEGIN에서 참조할 변수,상수,커서 등을 포함 </li>
                                <li> BEGIN(실행) : SQL문과 block내에서 데이터 처리르 위한 PL/SQL을 포함 </li>
                                <span className="mblock">
                                    <li> <small> IF 조건문 사용 </small> </li>
                                    <li> IF 조건 THEN 코드;</li>
                                    <li> ELSIF 조건 THEN 코드;</li>
                                    <li> ELSE 코드; </li>
                                    <li> END IF; </li>
                                    <li> RETURN 변수; , 조건문에서 변경된 값을 변수에 반환 </li>
                                    <li> <small> CASE 조건문 사용 </small> </li>
                                    <li> SELECT </li>
                                    <li> CASE WHEN 조건 THEN '값' </li>
                                    <li> ELSE '값' </li>
                                    <li> END  </li>
                                    <li>  </li>
                                </span>
                                <li> EXCEPTION(예외처리) : 에러가 발샐할 경우 수행하는 곳 </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> 명령어 </span>
                                <li> ACCEPT : 유저에게 입력받아 지정한 변수에 저장 </li>
                                <li> VARIABLE : </li>
                                <li> PRINT : </li>
                                <li> EXECUTE : PL/SQL문을 실행 </li>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="">   </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>

                            </span>
                        </span>

                        <span className="mblock">
                            <span className="stitle"> <a name="기타">  기타 </a> </span>
                            <span className="sblock">

                                <span className="sstitle"> cmd창에서 간격 조절 </span>
                                <li> SET LINESIZE 문자수; </li>
                                <li> SET PAGESIZE 라인수; </li>
                                <li> COL 컬럼명 FOR a출력자리공간(숫자로 a뒤에 입력); </li>
                                <span className="sstitle"> SELECT로 출력할 때 문자열 적어서 출력하는 방법 </span>
                                <li> SELECT 컬럼 ||'문자열'|| 컬럼 ~~~; </li>
                                <span className="sstitle"> 비어있는 테이블 </span>
                                <li> SELECT 컬럼,계산값 등 FROM dual; </li>
                                <span className="sstitle"> </span>
                                <li>  </li>

                            </span>
                        </span>
                    </ul>
                </span>
            </div>
        </>
    );
}
export default OracleDBStudy;
