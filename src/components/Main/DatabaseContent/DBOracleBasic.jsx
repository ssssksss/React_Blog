import React from 'react';

const DBOracleBasic = (props) => {

    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    <span className="mtitle"> <a name="OracleDB Study">  OracleDB Study  </a> </span>
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> OracleDB 설명
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 기본 용어 </div>
                                <div className='mblock'>
                                    <li> 스키마 : 사용자가 생성한 객체(테이블,인덱스,프로시저,뷰 등), DBMS마다 차이가 있음 </li>
                                    <li> 테이블 : DB데이터(레코드)를 정렬하여 보관하고 있는 단위 , 테이블을 컬럼(필드)과 레코드로 구성되어있다. </li>
                                    <li> 레코드 : 한 객체에 대한 정보, 테이블에 가로줄 , ex) 한명의 유저의 아이디,비밀번호,이메일 등을 가지고 있는 단위 </li>
                                    <li> 컬럼,필드 : 객체에 있는 속성들을 정의하는 단위, ex) 컬럼 종류 : 아이디, 비밀번호, 이메일, 부서, 나이 등등 </li>
                                </div>
                                <div className='sstitle'> 실행 순서 </div>
                                <div className='mblock'>
                                    <li> FROM - ON - JOIN - WHERE - GROUP BY , HAVING, SELECT, ORDER BY </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> OracleDB 시작, 설정
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> oracledb 열기 </div>
                                <div className='mblock'>
                                    <li> cmd창 - sql plus 사용자명/비밀번호  </li>
                                    <li>   </li>
                                    <li>   </li>
                                </div>

                                <div className='sstitle'> oracledb 사용자 비번 까먹었을 때 </div>
                                <div className='mblock'>
                                    <li> cmd창 - sqlplus - sys as sysdba - 비번없이 엔터  </li>
                                    <li> show user;  </li>
                                    <li> alter user sys identified by 1234;  </li>
                                    <li> conn sys/1234 as sysdba;  </li>
                                    <li>   </li>
                                </div>

                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>

                                <div className='sstitle'> 주석 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> USE, SHOW, DESC, CONN
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>

                                <div className='sstitle'> USE </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> SHOW </div>
                                <div className='mblock'>
                                    <li> SHOW USER; # 사용자 조회 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> DESC </div>
                                <div className='mblock'>
                                    <li> DESC 테이블명; # 테이블 컬럼 조회 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> CONN </div>
                                <div className='mblock'>
                                    <li> CONN c##유저명/비밀번호; # 접속 유저 변경 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 필드 타입
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 오라클에는 boolean타입이 없다. PL/SQL문 사용해야함 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 숫자 </div>
                                <div className='mblock'>
                                    <li> NUMBER(P,S) : 가변 숫자 (P: 1-38 , S:-84 - 127) , 최대 22byte </li>
                                    <li> FLOAT(P) : 실수 (P: 1-128) , 최대 22byte </li>
                                    <li> BINARY_FLOAT : 32비트 부동소수점 , 최대 4byte </li>
                                    <li> BINARY_DOUBLE : 32비트 부동소수점 , 최대 8byte </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 문자 </div>
                                <div className='mblock'>
                                    <li> CHAR() : 고정길이, 최대 2000Byte </li>
                                    <li> VARCHAR2() : 가변길이, 최대 4000Byte </li>
                                    <li> NCHAR() : 고정길이 유니코드, 최대 2000Byte </li>
                                    <li> NVARCHAR() : 가변길이 유니코드, 최대 2000Byte </li>
                                    <li> LONG : 가변길이 , 최대 2GB </li>
                                    <li> CLOB : 텍스트 , 최대 4GB </li>
                                    <li> NCLOB : 유니코드 , 최대 4GB </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 날짜,시간 </div>
                                <div className='mblock'>
                                    <li> DATE :  </li>
                                    <li> TIMESTAMP :  </li>
                                    <li>  </li>
                                </div>

                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 제약 조건
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 종류 </div>
                                <div className='mblock'>
                                    <li> PRIMARY KEY # 중복허용x + NULL허용x </li>
                                    <li> FOREGIN KEY # 왜래키 </li>
                                    <li> NOT NULL # NULL허용x </li>
                                    <li> DEFATUL 초기값 # 초기값을 설정 </li>
                                    <li> UNIQUE # 중복허용x </li>
                                    <li> CHECK # 특정 조건에 맞는 데이터만 허용 </li>
                                    <li> INDEX # 인덱스를 지정할 때 사용 </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 연산자
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 산술 연산자 </div>
                                <div className='mblock'>
                                    <li> </li>
                                </div>

                                <div className='sstitle'> 대입 연산자 </div>
                                <div className='mblock'>
                                    <li> </li>
                                </div>

                                <div className='sstitle'> 비교 연산자 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 논리 연산자 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 비트 연산자 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 조건 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 패턴 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> DML : SELECT, INSERT, UPDATE, DELETE
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> SELECT </div>
                                <div className='mblock'>
                                    <li> SELECT * FROM ALL_users; # 모든 유저 조회 </li>
                                    <li> SELECT 유저명 FROM ALL_users; # 특정 유저 조회 </li>
                                    <li> SELECT * FROM DBA_users; # 모든 DB(스키마) 조회 </li>
                                    <li> SELECT * FROM 테이블명; # 모든 테이블 조회 </li>
                                    <li> SELECT [컬럼명1,컬럼명2] FROM 테이블명; # 특정 테이블 조회 </li>
                                    <li> SELECT tname FROM tab; # 사용자들의 테이블 목록 조회 </li>
                                    <li> SELECT username FROM DBA_USERS; # </li>
                                    <li> SELECT username FROM ALL_USERS; # 모든 사용자의 이름 조회 </li>
                                    <li> SELECT * FROM DBA_SYS_PRIVX WHERE GRANTEE='사용자명'; # 시스템 권한 조회 </li>
                                    <li> SELECT * FROM DBA_SYS_PRIVS WHERE GRANTEE='사용자명'; # 롤에 부여된 시스템 권한 조회</li>
                                    <li> SELECT * FROM DBA_ROLE_PRIVX WHERE GRANTEE='사용자명'; </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> INSERT </div>
                                <div className='mblock'>
                                    <li> INSERT INTO 테이블명 VALUES(필드값1, 필드값2, ...); # 필드명 순서에 맞게 입력값 필요 </li>
                                    <li> INSERT INTO 테이블명(필드명2, 필드명1, ...) VALUES(필드값2, 필드값1, ...); </li>
                                    <li> INSERT INTO 테이블명 (SELECT * FROM 다른테이블) # 스키마가 동일해야 가능 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> UPDATE </div>
                                <div className='mblock'>
                                    <li> UPDATE 테이블명 SET 필드명=필드값 WHERE 조건; </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> DELETE </div>
                                <div className='mblock'>
                                    <li> DELETE FROM 테이블명 WHERE 조건; </li>
                                    <li>  </li>
                                </div>

                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> DDL : CREATE, DROP, ALTER
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> CREATE </div>
                                <div className='mblock'>
                                    <li> CREATE TABLE 테이블명(필드명 타입 조건) # 테이블 생성 </li>
                                    <li> CREATE TABLE 테이블명 AS 서브쿼리; </li>
                                    <li> CREATE OR REPLACE TABLE 테이블명(필드); # DB사용자 권한은 유지하면서 테이블 재생성 </li>
                                    <li> CREATE USER 사용자명 IDENTIFIED BY 비밀번호; # 사용자 생성 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> DROP </div>
                                <div className='mblock'>
                                    <li> DROP USER c##사용자명; # 사용자 삭제 </li>
                                    <li> DROP TABLE 테이블명; # 테이블에 레코드가 존재하면 지워지지 않음 </li>
                                    <li> DROP TABLE 테이블명 CASCADE CONSTRAINTS PURGE; # 테이블 강제 삭제, 레코드 유무 상관없음 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> ALTER </div>
                                <div className='mblock'>
                                    <li> ALTER USER c##사용자명 IDENTIFIED BY 변경할비밀번호; # 사용자 비번 변경 </li>
                                    <li> ALTER TABLE 테이블명 MODIFY(필드명 타입, 바꿀필드명 타입); # 테이블 타입 변경 </li>
                                    <li> ALTER TABLE 테이블명 ADD(필드명 타입); # 테이블 필드 추가 </li>
                                    <li> ALTER TABLE 테이블명 DROP(필드명1, 필드명2) # 테이블 필드 삭제 </li>
                                    <li> ALTER TABLE 테이블명 RENAME TO 변경할테이블명 # 테이블의 이름 변경 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> RENAME </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>

                                <div className='sstitle'> TRUNCATE </div>
                                <div className='mblock'>
                                    <li> TRUNCATE TABLE 테이블명; # 테이블의 모든 레코드 삭제 </li>
                                    <li>  </li>
                                </div>

                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> DCL : GRANT, REVOKE
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> GRANT </div>
                                <div className='mblock'>
                                    <li> GRANT CONNECT,RESOURCE,DBA,CREATE TABLE TO c##사용자명 WITH ADMIN OPTION;
                                        # 권한을 받는 계정이 다른 계정에게도 부여할 수 있는 권한 옵션 </li>
                                    <li> GRANT CONNECT TO c##사용자명; # 연결 권한 </li>
                                    <li> GRANT RESOURCE TO c##사용자명; # </li>
                                    <li> GRANT CREATE VIEW TO c##사용자명; # 뷰 생성 권한 </li>
                                    <li> GRANT CREATE PROCEDURE TO c##사용자명; # 프로시저 생성 권한 </li>
                                    <li> GRANT CREATE SEQUENCE TO c##사용자명; # 시퀸스 생성 권한 </li>
                                    <li> GRANT CREATE ANY TABLE TO c##사용자명; # 모든 유저 테이블 생성 권한</li>
                                    <li> GRANT CREATE session TO c##사용자명; # 데이터 베이스 접속 권한 </li>
                                    <li> GRANT CREATE table TO c##사용자명; # 테이블 생성 권한 </li>
                                    <li> GRANT CREATE USER TO c##사용자명; # 유저 생성 권한 </li>
                                    <li> GRANT SELECT ANY TABLE TO c##사용자명; # 모든 유저 테이블 조회 권한 </li>
                                    <li> GRANT ALTER USER TO c##사용자명; </li>
                                    <li> GRANT DROP USER TO c##사용자명; </li>
                                    <li> GRANT CREATE SESSION TO c##사용자명; # DB 접속 권한 </li>
                                    <li> GRANT ALTER SESSION TO c##사용자명; </li>
                                    <li> GRANT  </li>
                                    <li> GRANT DBA TO c##사용자명; </li>
                                    <li> GRANT SYSDBA TO c##사용자명; # 데이터 베이스 최고 권한 </li>
                                    <li> GRANT SYSOPER TO c##사용자명; # 데이터 베이스 관리 최고 권한 </li>
                                    <li> GRANT 권한명 TO 롤명; </li>
                                    <li> GRANT 롤명 TO 사용자명; </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> REVOKE </div>
                                <div className='mblock'>
                                    <li> REVOKE CONNECT FROM c##사용자명; # 사용자 연결 끊기 </li>
                                    <li> REVOKE 권한 on 테이블명 FROM c##사용자명; </li>
                                    <li> REVOKE 권한 FROM c##사용자명; # 사용자에게서 권한을 뺏음 </li>
                                    <li> REVOKE sys명령 on 테이블명 FROM c##사용자명; </li>
                                    <li> REVOKE SQL on 테이블명 FROM c##사용자명; </li>
                                    <li>  </li>
                                </div>

                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> TCL : COMMIT, ROLLBACK, SAVEPOINT
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> COMMIT </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> ROLLBACK </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> SAVEPOINT </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> JOIN
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> INNER JOIN - 교집합 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> LEFT JOIN , RIGHT JOIN </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> UNION </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> Subquerry </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>

                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> 인덱스
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> OracleDB 함수
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className="mblock">
                                    <div className="sstitle"> 그룹 함수 </div>
                                    <li> SUM() , AVG() , COUNT() , MAX() , MIN() </li>
                                    <li> STDDEV()(=표준편차) , VARIANCE()(=분산)  </li>
                                    <li> GROUP BY 필드 HAVING 조건 </li>
                                    <div className="sstitle"> 단일 함수 </div>
                                    <li>  </li>
                                    <div className="sstitle"> 일반 함수 </div>
                                    <li> NVL(NOT NULL일떄,NULL일때) </li>
                                    <li> NVL2(@,@ = NOT NULL일떄, @ = NULL일때) , 삼항연산느낌</li>
                                    <li> DECODE(필드,데이터값,'@',데이터값,'@',.기본결과) , 스위치문이라고 생각</li>
                                    <li> CASE WHEN 조건1 then 데이터값1 WHEN 조건2 then 데이터값2 end 별명? from 테이블; </li>
                                    <div className="sstitle"> 변환 함수 </div>
                                    <li> TO_CHAR(숫자-&gt;문자), TO_DATE(문자-&gt;숫자) , TO_NUMBER(문자-&gt;숫자) </li>
                                    <li> YYYY,YY,MM,MON,DD,DAY,DY,AM,PM,HH,HH12,HH24,MI,SS,A.M,P.M </li>
                                    <li> TO_CHAR(필드,'$999,999,999') , 제일 앞에 $붙이고 3자리마다 쉼표를 붙임 </li>
                                    <div className="sstitle"> 날짜 함수 </div>
                                    <li> SYSDATE(현재날짜), MONTHS_BETWEEN(@1,@2) , ADD_MONTHS(필드,개월수), NEXT_DAY </li>
                                    <li> ROUND, TRUNC, LAST_DAY(달의마지막날짜반환), EXTRACT([YEAR,MONTH,DAY,HOUR,MINUTE,SECOND] FROM 날짜) </li>
                                    <div className="sstitle"> 숫자 함수 </div>
                                    <li> ABS, COS, EXP, FLOOR, LOG, POWER(m,n), SIN, TAN, ROUND </li>
                                    <li> TRUNC(자릿수 버림), MOD(나머지), SIGN(n) -1,0,1 </li>
                                    <div className="sstitle"> 문자 함수 </div>
                                    <li> LOWER, UPPER, INITCAP(첫대문자) ,CONCAT(열연결), SUBSTR,SUBSTRB(@,시작위치,추출갯수) </li>
                                    <li> LENGTH, LENGTHB, INSTR, INSTRB(@,찾는글자,시작위치,몇번쨰), LPAD,RPAD(@,자릿수,채워넣을기호) </li>
                                    <li> CONVERT, CHR(@-&gt;아스키코드) , ASCII(아스키코드-&gt;문자) , REPLACE ,TRIM(@,FROM 필드)</li>
                                    <li> TRIM([LEADING|TRAILING|BOTH],['@',from 필드]) </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Where,On,Like,Between,As,Distinct
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> Where </div>
                                <div className='mblock'>
                                    <li> 와일드카드 : %(어떠한 문자든 검색) , _(자릿수 검색) </li>
                                    <li> WHERE 필드명 LIKE 'MI%' , 대문자 MI로 시작하는 필드값 비교 </li>
                                    <li> WHERE 필드명 LIKE '%KE' , 대문자 KE로 끝나는 필드값 검색 </li>
                                    <li> WHERE 필드명 LIKE '%IK%', 대문자 IK를 포함하는 필드값 검색 </li>
                                    <li> WHERE 필드명 (UPPER)LIKE (UPPER)'%IK%', IK를 포함하는 필드값 검색 </li>
                                    <li> WHERE 필드명 (LOWER)LIKE (LOWER)'%IK%', IK를 포함하는 필드값 검색 </li>
                                    <li> WHERE 필드명 LIKE '%IK%' OR 필드명 LIKE '%OH%', IK혹은 OH를 포함하는 필드값 검색 </li>
                                    <li> WHERE REGEXP _LIKE(필드명, 'MIKE|JOHN') , IK혹은 OH를 포함하는 필드값 검색 </li>
                                    <li> WHERE 필드명 NOT LIKE '%IK%', IK를 포함하지않는 필드값 검색 </li>
                                    <li> WHERE 필드명 LIKE 'MIK_' , MIK + 1글자 를 가진 필드값을 검색 </li>
                                    <li> WHERE 필드명 LIKE '%K_' , %K + 1글자 K라는글자뒤에 1글자가 포함된 필드값 검색 </li>
                                    <li> WHERE 필드명 LIKE '%\_%' ESCAPE '\' , 언더바문자(_)를 포함하는 필드값 검색 , \문자말고도 아무런 문자 사용이 가능하다. 동일하게만 설정해주면 가능하다 </li> <br />
                                    <li> ON 테이블1.필드 = 테이블2.필드 WHERE 테이블1.필드 {'>'} 1000; # where보다 on이 먼저 실행된다. </li>
                                    <li> ON 테이블1.필드 = 테이블2.필드 AND 테이블1.필드 {'>'} 1000; </li> <br />
                                    <li> BETWEEN 시작범위 AND 종료범위 </li> <br />
                                    <li> SELECT 필드명 AS 필드별칭명 FROM 테이블명 # 출력이 될 떄 필드자리에 sal로 표현이 된다. </li>
                                    <li> SELECT 필드명 FROM 테이블 DISTINCT; </li>
                                    <li>  </li>
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
            </div>

            <div className="common_style">
                <span className="lblock">

                    <ul>
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
                                <li> 쿼리문 제일 뒤에 Order By 필드명,럼럼명 DESC; , 역순 </li>
                                <li> 쿼리문 제일 뒤에 Order By 필드명,럼럼명 ASC;  , 오름차순? </li>
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
                                <li> LEVEL :  어떤 단계에 있는지 보여주는 필드 , SELECT LEVEL ~ </li>
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
                            <li><small> 자동으로 증가하는 필드 생성가능 </small>   </li>
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
                                <li> 시퀸스명.NEXTVAL , 시퀸스에 필드값을 넣을 떄 자동으로 값이 증가한다. </li>
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
                            <small> JOIN을 사용할 떄는 필드을 적을 때 테이블1.필드 , 테이블2.필드 이런식으로 테이블을 명시해 주어야 한다. </small>
                            <span className="sblock">

                                <span className="stitle"> inner join,equal join </span>
                                <span className="sstitle"> 2개의 테이블에서 공통 필드이 있을 때(Inner JOIN) </span>
                                <li> SELECT 필드... FROM 테이블1,테이블2 WHERE 테이블1.필드=테이블2.필드; </li>
                                <li> SELECT 필드... FROM 테이블1 INNER JOIN 테이블2 ON 테이블1.필드 = 테이블2.필드; </li>
                                <li> SELECT 필드... FROM 테이블1,테이블2 WHERE 테이블1.필드=테이블2.필드 AND 테이블1.필드='ABC'; </li>
                                <li> SELECT 필드... FROM 테이블1 A,테이블2 B WHERE A.필드=B.필드; , 별칭사용</li>
                                <span className="sstitle"> ANSI 표준 (Inner)JOIN </span>
                                <li> SELECT 필드... FROM 테이블1 JOIN 테이블2 ON 테이블1.필드=테이블2.필드 </li>
                                <li> SELECT 필드... FROM 테이블1 JOIN 테이블2 ON 테이블1.필드=테이블2.필드 AND 테이블1.필드='ABC' </li>
                                <li> SELECT 필드... FROM 테이블1 JOIN 테이블2 ON 테이블1.필드=테이블2.필드 WHERE 테이블1.필드='ABC' </li>
                                <li> SELECT 필드... FROM 테이블1 JOIN 테이블2 USING 공통필드 , ANSI </li>
                                <li> SELECT 필드... FROM 테이블1 NATURAL 테이블2 WHERE = 'ABC'; , 2개의 테이블의 공통필드을 알아서 뽑음 , ANSI </li>
                                <span className="sstitle"> 2개의 테이블에서 범위 관련 컴럼으로 JOIN </span>
                                <li> SELECT 필드.. FROM 테이블1,테이블2 WHERE 테이블1.필드 BETWEEN 테이블2.필드명 AND 테이블2.필드명 </li>
                                <span className="sstitle"> 1개의 테이블 JOIN </span>
                                <li> SELECT 필드 FROM 테이블1 별칭1,테이블1 별칭2 WHERE 조건 </li>
                                <span className="sstitle"> 3개의 테이블 JOIN</span>
                                <li> SELECT * FROM 테이블1 A , 테이블2 B , 테이블3 C WHERE A.필드=B.필드 AND A.필드=C.필드 </li>
                                <li> SELECT * FROM 테이블1 A JOIN 테이블2 B ON A.필드=B.필드 JOIN 테이블3 C ON A.필드=C.필드 </li>
                                <span className="stitle"> outer join </span>
                                <span className="sstitle"> 2개의 테이블 필드 균형맞춰서 (OUTER)JOIN </span>
                                <li> <small> INNER과 OUTER JOIN을 동시에 사용하면 에러 발생 </small> </li>
                                <li> <small> 조건에서 모든 필드(테이블x) 조건에 +를 붙여주어야 결과값이 제대로 나온다. </small> </li>
                                <li> <small> OR 연산자와는 같이 사용 불가 , 서브쿼리와 같이 사용불가 </small> </li>
                                <li> <small> 1개의 테이블을 기준으로 잡고 다른 여러개의 테이블에(+) JOIN을 사용해야한다. , 포괄적인 JOIN(x) </small> </li>
                                <li> SELECT 필드 FROM 테이블1,테이블2 WHERE 테이블1.필드(+) = 테이블2.필드 AND 테이블1.필드(+)&gt;100, 데이터가 없을 것 같은 쪽에 +기호 사용</li>
                                <li> SELECT * FROM 테이블1 [LEFT|RIGHT,FULL] OUTER JOIN 테이블2 , ANSI 방식 , 우측테이블이 없다면 LEFT사용 </li>
                                <li> SELECT * FROM 테이블 A, 테이블 B, 테이블 C WHERE A.필드 = B.필드(+) AND A.필드 = C.필드(+) </li>
                                <span className="stitle"> cross join </span>
                                <span className="sstitle"> Cross JOIN 사용방법 </span>
                                <li> <small> 메모리를 많이 잡아 먹어 거의 사용하지 않음, 행*행 만큼의 갯수가 나옴 </small> </li>
                                <li> SELECT A.필드1 A.필드2 B.필드1 FROM 테이블 A, 테이블 B </li>
                                <span className="stitle"> self join </span>
                                <span className="sstitle"> SELF JOIN 사용방법 </span>
                                <li> <small> 같은 테이블을 별칭을 2개를 두어서 사용하는 방법 </small>  </li>
                                <li> <small> 상사와의 관게, 매니저와 직원의 관계, 조직도와 부서 등을 볼때 사용하면 될것 같다 </small>  </li>
                                <li> SELECT A.필드 B.필드 FROM 테이블1 A, 테이블1 B WHERE A.필드=B.필드 </li>
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

                                <span className="sstitle"> REGEXP_LIKE (필드,'패턴[조건]') </span>
                                <li> WHERE REGEXP_LIKE (DEPT, '경영[^2]팀') , 경영 2팀을 제외한 </li>
                                <li> WHERE REGEXP_LIKE (DEPT, '경영[1팀2팀]') , 경영1팀 혹은 경영2팀을 포함하는 </li>
                                <li>  </li>
                                <span className="sstitle"> REGEXP_SUBSTR (필드,'패턴[조건]') </span>
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
                                <li> CREATE TABLE 테이블 AS (SELECT * FROM 테이블 WHERE 1=0;) , 테이블의 필드만 복사  </li>
                                <span className="sstitle"> 서브쿼리를 이용하여 다른 테이블에 레코드 넣기 </span>
                                <li> INSERT INTO 테이블 (SELECT * FROM 테이블) </li>
                                <span className="sstitle"> 서브쿼리로 테이블 레코드 수정하기 </span>
                                <li> UPDATE 테이블 SET 필드=(서브쿼리) WHERE 조건 </li>
                                <li> UPDATE 테이블 SET (필드1,필드2) = (필드2개인 서브쿼리) WHERE 조건 </li>
                                <span className="sstitle"> 서브쿼리 조건에 맞는 데이터 삭제 </span>
                                <li> DELETE FROM 테이블 WHERE 필드-(서브쿼리) </li>
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
                                <li> NOTNULL 필드이 있는 경우 </li>
                                <li> 가상필드이 존재하면 INSERT , UPDATE 사용 불가 </li>
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
                                <li> COL 필드명 FOR a출력자리공간(숫자로 a뒤에 입력); </li>
                                <span className="sstitle"> SELECT로 출력할 때 문자열 적어서 출력하는 방법 </span>
                                <li> SELECT 필드 ||'문자열'|| 필드 ~~~; </li>
                                <span className="sstitle"> 비어있는 테이블 </span>
                                <li> SELECT 필드,계산값 등 FROM dual; </li>
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
export default DBOracleBasic;
