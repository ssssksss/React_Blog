import React from 'react';

const DBMySQLBasic = (props) => {
    return (
        <>
            <div className="common_style">
                <span className="lblock">

                    <span className="mtitle"> <a name="MySQL Study">  MySQL Study  </a> </span>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> MySQL 설명
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
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
                            <summary className='stitle'> MySQL 시작, 설정
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> mysql 열기 </div>
                                <div className='mblock'>
                                    <li> cmd창 열기  </li>
                                    <li> mysql -u root -p비밀번호 # mysql 로그인 </li>
                                    <li> select version(); # mysql 버전 확인
                                        <li> mysql workbench에서 버전 확인 하는 방법 </li>
                                        <li> Edit - Preferences - Modeling - MySQL - 버전확인   </li>
                                    </li>
                                    <li> exit # mysql 버전 확인 </li>
                                </div>

                                <div className='sstitle'> 문자집합(Character Set)과 콜레이션(Collation) </div>
                                <div className='mblock'>
                                    <li> 문자집합은 문자가 인코딩 되는 방식이고 콜레이션은 몇몇 데이터 타입에 대하여 어떻게 문자를
                                        비교할 것인지를 설정하는 방법(대소문자구분)이다. </li>
                                    <li> MySQL 서버와 클라이언트가 서로 데이터를 주고 받는 데이터의 값을 설정 가능하다.
                                        그래서 글자가 깨지는 현상이 발생한다면 한번 생각을 고려해볼 필요가 있다. </li>
                                    <li> 서버 - DB - 테이블 - 필드(컬럼) 이렇게 4가지의 단계를 고려해 볼 수 있다. </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>

                                <div className='sstitle'> 주석 </div>
                                <div className='mblock'>
                                    <li> # : 한줄 주석 </li>
                                    <li> -- : 한줄 주석 </li>
                                    <li> /* */ : 여러줄 주석 </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> USE, SHOW, DESC
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>

                                <div className='sstitle'> USE </div>
                                <div className='mblock'>
                                    <li> USE DB명 # 데이터베이스를 사용 </li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> SHOW </div>
                                <div className='mblock'>
                                    <li> show variables; # 환경변수 보기 </li>
                                    <li> show variables like 'char%'; # 서버에 사용되는 문자셋 조회 </li>
                                    <li> show table status from DB명 like '테이블명%'; #테이블에 사용되는 문자셋 조회  </li>
                                    <li> show create database DB명; # DB생성정보 조회, 문자셋도 조회 가능</li>
                                    <li> show create table 테이블명; # 테이블 생성정보 조회, 문자셋도 조회 가능</li>
                                    <li> show databases; # DB목록 조회 </li>
                                    <li> show grants for 유저명@ </li>
                                    <li> show tables; # use mysql; - mysql의 테이블 조회 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> DESC </div>
                                <div className='mblock'>
                                    <li> desc user; # user 테이블 조회 </li>
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
                                <div className='sstitle'> 숫자 </div>
                                <div className='mblock'>
                                    <li> TINYINT (1바이트) </li>
                                    <li> SMALLINT (2바이트) </li>
                                    <li> MEDIUMINT (3바이트) </li>
                                    <li> INT (4바이트) </li>
                                    <li> BIGINT (8바이트) </li>
                                    <li> DECIMAL(정수+소수점자릿수,소수점자릿수) # 정수+소수점자릿수는 최대 65 </li>
                                    <li> FLOAT(0~24) # float 실수 </li>
                                    <li> FLOAT(25~53) # double 실수 </li>
                                    <li> FLOAT(정수+소수점자릿수,소수점자릿수) # 자릿수가 넘으면 자동 반올림</li>
                                    <li> BIT(1~64) # 자릿수보다 적게 입력하면 앞쪽에 0을 추가해줌
                                        <li> 정확하지는 않지만 값을 넣을 때 b'숫자' 와 같이 넣는것 같다.(나중에 확인 필요) </li>
                                    </li>
                                </div>

                                <div className='sstitle'> 문자 </div>
                                <div className='mblock'>
                                    <li> CHAR(0~255) # 자릿수 값보다 작으면 뒤쪽을 공백으로 메움 </li>
                                    <li> VARCHAR(0~65535) #  </li>
                                    <li> BINARY() #바이너리 형태 </li>
                                    <li> VARBINARY() #바이너리 형태 </li>
                                    <li> TINYBLOB,BLOB,MEDIUMBLOB,LONGBLOB # 대소문자 구분x  </li>
                                    <li> TINYTEXT,TEXT,MEDIUMTEXT,LONGTEXT # 문자열 , 기본값을 가질수 없음 , 대소문자를 구분 </li>
                                    <li> ENUM('데이터값1','데이터값2',...) # 65536개의 데이터 집합</li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 날짜,시간 </div>
                                <div className='mblock'>
                                    <li> DATE # 'YYYY-MM-DD' </li>
                                    <li> DATETIME # 'YYYY-MM-DD HH:MM:SS' </li>
                                    <li> TIMESTAMP #  </li>
                                    <li> TIME # 'HH:MM:SS' , 'HHH:MM:SS' </li>
                                    <li> YEAR # 4자리숫자나문자 : 1901~2155  </li>
                                    <li>  </li>
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
                                <div className='sstitle'>  종류 </div>
                                <div className='mblock'>
                                    <li> NOT NULL # 데이터의 값이 비어있는 것을 허용하지 않음 </li>
                                    <li> UNIQUE # 중복을 허용하지 않음 </li>
                                    <li> PRIMARY KEY # NOT NULL + UNIQUE </li>
                                    <li> FOREIGN KEY # 외래키, 다른 테이블 참조값으로 사용
                                        <li> FOREIGN KEY 필드명 REFERENCES 테이블명 필드명 </li>
                                    </li>
                                    <li> DEFAULT # 필드의 기본 값을 설정 </li>
                                    <li>  </li>
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
                                    <li> + - * / # 사칙연산 </li>
                                    <li> DIV # 몫 , 나머지는 버림 </li>
                                    <li> % , MOD # 나머지 </li>
                                </div>

                                <div className='sstitle'> 대입 연산자 </div>
                                <div className='mblock'>
                                    <li> = # 대입 연산 , UPDATE나 SET에서는 대입 연산 </li>
                                    <li> = # 비교 연산 , 이외에는 비교 연산 </li>
                                    <li> := # 대입 연산  </li>
                                </div>

                                <div className='sstitle'> 비교 연산자 </div>
                                <div className='mblock'>
                                    <li> = , != , {'<>'} #비교연산 </li>
                                    <li> {' < <= > >=  '} </li>
                                    <li> {' <=> '} # 양쪽 모두 NULL이면 참을 반환, 하나만 NULL이면 거짓 </li>
                                    <li> A IS B # A가 B와 같으면 참 </li>
                                    <li> A IS NOT B # A가 B와 같지 않으면 참 </li>
                                    <li> A IS NULL # A가 NULL이면 참 </li>
                                    <li> A IS NOT NULL # A가 NULL이 아니면 참 </li>
                                    <li> BETWEEN A AND B # A 와 B 사이일 때 </li>
                                    <li> NOT BETWEEN A AND B # A 와 B 사이가 아닐 때 </li>
                                    <li> A IN(데이터값 리스트) # A가 데이터값 리스트에 존재하면 참 </li>
                                    <li> A NOT IN(데이터값 리스트) # 데이터값 리스트에 존재하지 않으면 참 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 논리 연산자 </div>
                                <div className='mblock'>
                                    <li> AND , {'&&'} </li>
                                    <li> OR , {'||'} </li>
                                    <li> XOR </li>
                                    <li> NOT , ! </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 비트 연산자 </div>
                                <div className='mblock'>
                                    <li> {'&'} # and
                                        <li> b'1111' {'&'} b'1010' </li>
                                    </li>
                                    <li> {'|'} # or </li>
                                    <li> {'^'} # xor </li>
                                    <li> {'~'} # not </li>
                                    <li> {'<<'} # left shift </li>
                                    <li> {'>>'} # right shift </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> 조건 </div>
                                <div className='mblock'>
                                    <li> SELECT CASE A
                                        <li> WHEN B THEN '리턴값1' # A가 B와 일치하면 리턴값1 리턴</li>
                                        <li> WHEN C THEN '리턴값2' # A가 C와 일치하면 리턴값2 리턴</li>
                                        <li> ELSE '리턴값3' # A가 아무것도 일치하지 않으면 리턴값3 리턴 , ELSE값이 없으면 NULL반환 </li>
                                    </li>
                                    <li> END; </li> <br />

                                    <li> IF(조건,참값,거짓값) # </li>
                                    <li> IFNULL(인수1,인수2) #1번째 인수가 NULL이 아니면 1번째 인수 반환, NULL이면 2번째 인수 반환  </li>
                                    <li> NULLIF(인수1,인수2) #인수1,인수2가 같으면 NULL반환, 인수1,인수2가 같지 않으면 인수1 반환 </li>
                                </div>

                                <div className='sstitle'> 패턴 </div>
                                <div className='mblock'>
                                    <li> WHERE 필드명 LIKE '%A' </li>
                                    <li> WHERE 필드명 LIKE '%A%' </li>
                                    <li> WHERE 필드명 LIKE 'A%' </li>
                                    <li> WHERE 필드명 LIKE '_A' </li>
                                    <li> WHERE 필드명 LIKE '_A_' </li>
                                    <li> WHERE 필드명 LIKE 'A_' </li>
                                    <div className='sstitle'> 패턴 와일드카드 </div>
                                    <div className='sblock'>
                                        <li> % : 0개 이상의 문자 </li>
                                        <li> _ : 1개 문자를 대체 (어떤 문자든 가능)  </li>
                                    </div>
                                    <li> WHERE 필드명 REGEXP '정규표현식문자열'; </li>
                                    <li> WHERE 필드명 NOT REGEXP '정규표현식문자열'; </li>
                                    <li> . : 1개의 문자 대체, \n문자는 제외 </li>
                                    <li> * : 0번 이상의 문자 패턴 반복 </li>
                                    <li> + : 1번 이상의 문자 패턴 반목 </li>
                                    <li> ^ : 문자열 첫 시작을 뜻함 </li>
                                    <li> $ : 문자열 끝을 의미 </li>
                                    <li> | : 선택을 의미 </li>
                                    <li> [문자] : 어떠한 문자를 의미 </li>
                                    <li> [^문자] : 어떠한 문자를 제외한 것을 의미 </li>
                                    <li> {'{n}'} : 반복 횟수를 지정 </li>
                                    <li> {'{a,b}'} : 반복 최소,최대 횟수를 지정 </li>
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
                                    <li> Data Manipulation Language </li>
                                    <li> DB 테이블의 데이터를 조회, 삽입, 수정, 삭제하는 명령어 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> SELECT </div>
                                <div className='mblock'>
                                    <li> SELECT * FROM 테이블명 </li>
                                    <li> SELECT 필드명 FROM 테이블명 </li>
                                    <li> SELECT 필드명1,필드명2 FROM 테이블명 </li>
                                    <li> SELECT 필드명1,필드명2 FROM 테이블명 </li>
                                    <li> SELECT 별칭1.필드명1,별칭2.필드명1 FROM 테이블1 AS 별칭1, 테이블2 AS 별칭2 </li>
                                    <li> SELECT * FROM 테이블명 WHERE 필드명="abc" # 필드 데이터값이 "abc"인 데이터만 조회 </li>
                                    <li> SELECT * FROM 테이블명 WHERE 필드명1 {'>'} 10 AND 필드명1 {'<'} 30 </li>
                                    <li> SELECT * FROM 테이블명 WHERE 필드명1 {'>'} 10 OR 필드명2 {'>'} 10 </li>
                                    <li> SELECT * FROM 테이블명 ORDER BY 필드명 DESC; # 내림차순 정렬 </li>
                                    <li> SELECT * FROM 테이블명 ORDER BY 필드명 ASC;  # 오름차순 정렬 </li>
                                    <li> SELECT * FROM 테이블명 ORDER BY 필드명1 DESC, 필드명2 ASC;  # 필드명1을 내림차순으로 정렬하다가
                                        필드명1의 값이 같으면 필드명2를 오름차순 기준으로 정렬한다. </li>
                                    <li> USE MYSQL;
                                        <li> SELECT HOST,USER FROM USER; </li>
                                    </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> INSERT </div>
                                <div className='mblock'>
                                    <li> INSERT INTO 테이블명 (필드명2,필드명1.필드명3) VALUES('문자열값1','문자열값2',정수값3) # 테이블에 필드 순서 상관없이
                                        데이터 값을 넣어 레코드 추가 </li>
                                    <li> INSERT INTO 테이블명 VALUES('문자열값1','문자열값2',정수값3) # 테이블에 필드순서대로 데이터 값을 넣어 레코드 추가
                                        <div className='sblock'>
                                            <li> DEFAULT, AUTO_INCREMENT 제약조건은 필드값 생략가능 </li>
                                        </div>
                                    </li>
                                    <li> USE DB명; # 사용자 추가하기
                                        <li> INSERT INTO USER (HOST,USER,PASSWORD) VALUES ('접근권한('localhost','%'),'사용자명',password('비밀번호')); </li>
                                        <li> FLSUH PRIVILEGES; </li>
                                    </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> UPDATE </div>
                                <div className='mblock'>
                                    <li> UPDATE 테이블명 SET 필드명1=데이터값1, 필드명2=데이터값2 WHERE 필드명=데이터값; # 테이블의
                                        조건에 맞는 데이터값을 수정 </li>
                                    <li> UPDATE 테이블명 SET 필드명=데이터값; #필드의 모든 데이터값을 변경 </li>
                                </div>

                                <div className='sstitle'> DELETE </div>
                                <div className='mblock'>
                                    <li> DELETE FROM 테이블명 WHERE 필드명=데이터값; # 조건에 맞는 레코드 삭제 </li>
                                    <li> DELETE FROM 테이블명; # 테이블 내부의 레코드 값만을 삭제 , 테이블 구조는 남아있음 </li>
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
                                    <li> Data Definition Language </li>
                                    <li> DB 테이블을 생성, 변경, 삭제, 이름 변경을 DB 테이블 구조와 관련된 명령어 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> CREATE </div>
                                <div className='mblock'>
                                    <li> CREATE USER 사용자명; </li>
                                    <li> CREATE USER 유저명@localhost IDENTIFIED BY '비밀번호'; </li>
                                    <li> CREATE USER '기존유저명'@'%' IDENTIFIED BY '비밀번호'; # 기존유저 권한추가?</li>
                                    <li> CREATE DATABASE DB명 </li>
                                    <li> CREATE TABLE 테이블명 (
                                        <li> 필드명1 필드타입, </li>
                                        <li> 필드명2 필드타입 NOT NULL, </li>
                                        <li> 필드명3 필드타입 UNIQUE, </li>
                                        <li> 필드명4 필드타입 PRIMARY KEY, </li>
                                        <li> 필드명5 필드타입 FOREIGN KEY, </li>
                                        <li> 필드명6 필드타입 DEFAULT=기본값, </li>
                                        <li> ... </li>
                                    </li>
                                    <li> ) </li> <br />
                                    <li> CREATE TABLE 테이블명 (
                                        <li> 필드명1 필드타입, </li>
                                        <li> [CONSTRAINT 제약조건명] 제약조건 필드명1  </li>
                                    </li>
                                    <li> ) </li> <br />
                                    <li> CREATE TABLE 테이블명 (
                                        <li> 필드명 필드타입, </li>
                                        <li> [CONSTRAINT 제약조건명] FOREIGN KEY (필드명)  </li>
                                        <li> REFERENCES 테이블명 필드명  </li>
                                    </li>
                                    <li> ) </li> <br />
                                    <li> CREATE TABLE 테이블명 (
                                        <li> 필드명 필드타입, </li>
                                        <li> [CONSTRAINT 제약조건명] FOREIGN KEY (필드명)  </li>
                                        <li> REFERENCES 테이블명(필드명) ON UPDATE 옵션 ON DELETE 옵션
                                            <li> ON UPDATE 옵션 :  참조되는 테이블이 데이터가 수정될 때 , 참조하는 테이블을 어떻게 할것인지   </li>
                                            <li> ON DELETE 옵션 :  참조되는 테이블이 데이터가 삭제될 때 , 참조하는 테이블을 어떻게 할것인지   </li>
                                            <li> 옵션
                                                <li> CASCADE : 참조되는 테이블에서 데이터를 삭제,수정하면 참조하는 테이블 데이터 같이 삭제,수정</li>
                                                <li> SET NULL : 참조되는 테이블에서 데이터를 삭제,수정하면 참조하는 테이블 데이터 NULL</li>
                                                <li> NO ACTION : 참조되는 테이블에서 데이터를 삭제,수정하면 참조하는 테이블 데이터 변경 x</li>
                                                <li> SET DEFAULT : 참조되는 테이블에서 데이터를 삭제,수정하면 참조하는 테이블 데이터 필드 기본값으로 설정 </li>
                                                <li> RESTRICT :  참조하는 테이블에서 데이터가 남아있으면, 참조되는 테이블의 데이터 삭제,수정 불가능 </li>
                                            </li>
                                        </li>
                                    </li>
                                    <li> ) </li> <br />
                                </div>

                                <div className='sstitle'> DROP </div>
                                <div className='mblock'>
                                    <li> DROP DATABASE DB명 # 데이터베이스 삭제 </li>
                                    <li> DROP TABLE 테이블명 # 테이블 삭제, 테이블 내부 전부 삭제 </li>
                                    <li> DROP DATABASE IF EXISTS DB명; #  데이터베이스가 있으면 삭제, 오류 발생하지 않음</li>
                                    <li> DROP TABLE IF EXISTS 테이블명; # 테이블이 있으면 삭제, 오류 발생하지 않음 </li>
                                    <li> DROP USER '사용자명'@'localhost'; </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> ALTER </div>
                                <div className='mblock'>
                                    <li> ALTER DATABASE DB명 CHARACTER SET=문자집합명 COLLATE=콜레이션명
                                        <div className='sblock'>
                                            <li> 문자집합명 : utf8(1~3바이트) , euckr(1~2바이트) # 문자 인코딩 방식 </li>
                                            <li> 콜레이션명 : utf8_bin , utf8_general_ci(디폴트값) , euckr_bin , euckr_korean_ci # 문자 비교 방식
                                            </li>
                                        </div>
                                    </li>
                                    <li> ALTER TABLE 테이블명 ADD 필드명 필드타입 [제약조건] # 테이블에 필드를 추가 </li>
                                    <li> ALTER TABLE 테이블명 ADD [CONSTRAINT 제약조건명] 제약조건 필드명# 테이블 기존필드에 제약조건을 추가 </li>
                                    <li> ALTER TABLE 테이블명 MODIFY COLUMN 필드명 필드타입 [제약조건] # 테이블에 있는 기존 필드타입을 변경 </li>
                                    <li> ALTER TABLE 테이블명 DROP 필드명 # 테이블에 필드를 삭제 </li>
                                    <li> ALTER TABLE 테이블명 DROP INDEX 제약조건명 # 제약조건명을 찾아서 삭제 </li>
                                    <li> ALTER TABLE 테이블명 ADD [CONSTRAINT 제약조건명] FOREIGN KEY 필드명 REFERENCES 테이블명 필드명 </li>
                                    <li> ALTER TABLE 테이블명 DROP FOREIGN KEY 제약조건명 # 제약조건명으로 외래키를 삭제 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> RENAME </div>
                                <div className='mblock'>
                                    <li> </li>
                                    <li> </li>
                                </div>

                                <div className='sstitle'> TRUNCATE </div>
                                <div className='mblock'>
                                    <li> TRUNCATE TABLE 테이블명 # 테이블의 구조는 남기고 테이블 내부의 데이터만을 삭제 </li>
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
                                    <li> Data Control Language </li>
                                    <li> DB에 접근 권한을 주거나 회수하는 명령어 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> GRANT </div>
                                <div className='mblock'>
                                    <li> <span className="col_r"> flush privileges; # GRANT 권한 후 적용 </span>  </li>
                                    <li> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
                                        <div className='sblock'>
                                            <li> 에러 : ERROR 1410 (42000): You are not allowed to create a user with GRANT </li>
                                            <li> create user 'root'@'%' identified by 'abcd'; </li>
                                            <li> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; </li>
                                            <li> 이렇게 하고나서 권한 주고 다시 삭제를 해야한다. </li>
                                            <li> revoke all on *.* from root@'%'; </li>
                                            <li> drop user 'root'@'%'; </li>
                                            <li> flush privileges; </li>
                                        </div>
                                    </li>
                                    <li> GRANT ALL PRIVILEGS ON DB명.테이블명 to '사용자명'@'localhost'; </li>
                                    <li> GRANT ALL PRIVILEGS ON *.* to '사용자명'@'%'; </li>
                                    <li> GRANT ALL PRIVILEGS ON *.* to '사용자명'@'특정IP주소'; </li>
                                    <li> GRANT SELECT ON DB명.테이블명 to '사용자명'@'localhost';  </li>
                                    <li> GRANT UPDATE(컬럼명1,컬럼명2) ON DB명.테이블명 to '사용자명'@'localhost'; </li>
                                    <li> GRANT ALL PRIVILEGS ON *.* TO '사용자명'@'localhost' IDENTIFIED BY '비밀번호'; # 사용자 생성과 권한 주기</li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> REVOKE </div>
                                <div className='mblock'>
                                    <li> REVOKE ALL ON DB명.* FROM '사용자명'@'localhost'; </li>
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
                                    <li> Transaction Control Language </li>
                                    <li> DML 명령어에 사용된 결과를 트랜잭션 단위로 제어하는 명령어 </li>
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
                                    <li> 2개의 테이블에서 일치하는 레코드를 출력 </li>
                                    <div className="sstitle"> 표준 SQL 방식 </div>
                                    <li> SELECT * FROM 테이블명1 INNER JOIN 테이블명2 ON 테이블명1.필드명 = 테이블명2.필드명; </li>
                                    <li> SELECT * FROM 테이블명1 JOIN 테이블명2 ON 테이블명1.필드명 = 테이블명2.필드명; </li>
                                    <div className="sstitle"> MySQL 허용 방식 </div>
                                    <li> SELECT * FROM 테이블명1,테이블명2 WHERE 테이블명1.필드명 = 테이블명2.필드명; </li>
                                    <li> SELECT * FROM 테이블명1 AS a, 테이블명2 AS b WHERE a.필드명 = b.필드명; </li>
                                </div>

                                <div className='sstitle'> LEFT JOIN , RIGHT JOIN </div>
                                <div className='mblock'>
                                    <li> 2개의 테이블에서 일치하는 레코드를 출력 + 일치하지 않는 테이블1의 레코드도 출력  </li>
                                    <li> SELECT * FROM 테이블명1 LEFT JOIN 테이블명2 ON 조건 </li>
                                    <li> SELECT * FROM 테이블명1 LEFT JOIN 테이블명2 ON 조건 WHERE 테이블1조건 </li>
                                    <li> 2개의 테이블에서 일치하는 레코드를 출력 + 일치하지 않는 테이블2의 레코드도 출력  </li>
                                    <li> SELECT * FROM 테이블명1 RIGHT JOIN 테이블명2 ON 조건 </li>
                                    <li> SELECT * FROM 테이블명1 RIGHT JOIN 테이블명2 ON 조건 WHERE 테이블1조건 </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> UNION </div>
                                <div className='mblock'>
                                    <li> SELECT FROM 테이블명1 UNION SELECT FROM 테이블명2 # 2개의 테이블의 필드 갯수,타입,순서까지 일치해야함 , 중복 레코드 제거 </li>
                                    <li> SELECT FROM 테이블명1 UNION ALL SELECT FROM 테이블명2 # 2개의 테이블의 필드 갯수,타입,순서까지 일치해야함, 중복 레코드 허용</li>
                                    <li>  </li>
                                    <li>  </li>
                                </div>

                                <div className='sstitle'> Subquerry </div>
                                <div className='mblock'>
                                    <li> 외부 쿼리(메인쿼리) 조건에 서크쿼리(SELECT문)를 넣음 </li>
                                    <li> SELECT * FROM 테이블명 WHERE 필드명 IN ( SELECT문(서브쿼리) ) </li>
                                    <li>  </li>
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
                                    <li> 검색이 자주 사용되는 테이블에서 사용하면 좋다. </li>
                                    <li> 필드 값 설명
                                        <div className='sblock'>
                                            <li> 1. Table : 테이블 이름 </li>
                                            <li> 2. Non_unique : 중복된 값 저장 가능 1, 아니면 0 </li>
                                            <li> 3. Key_name : 인덱스의 이름을 표시 , PRIMARY KEY값이면 RPIMARY 표시 </li>
                                            <li> 4. Seq_in_index : 인덱스에서의 해당 필드의 순서를 표시함. </li>
                                            <li> 5. Column_name : 필드명 </li>
                                            <li> 6. Collation : 정렬되는 방법 </li>
                                            <li> 7. Cardinality : 인덱스에 저장된 유일한 값들의 수를 표시함?? </li>
                                            <li> 8. Sub_part : 접두어 표시 ?? </li>
                                            <li> 9. Packed : 키가 압축되는 방법 표시 ?? </li>
                                            <li> 10. Null : NULL 저장가능 YES , 불가능하면 '' 공백표시 </li>
                                            <li> 11. Index_type : 인덱스에 사용되는 메소드 ??? </li>
                                            <li> 12. Comment : 그냥 인덱스 관련 주석 ?? </li>
                                            <li> 13. Index_comment : 기타 정보 표시 ?? </li>
                                            <li>  </li>
                                        </div>
                                    </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> CREATE INDEX 인덱스명 ON 테이블명 (필드명1,필드명2) </li>
                                    <li> CREATE INDEX 인덱스명 ON 테이블명 (필드명1 DESC) </li>
                                    <li> CREATE INDEX 인덱스명 ON 테이블명 (필드명1 ASCC) </li>
                                    <li> SHOW INDEX FROM 테이블명 </li>
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

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> MySQL 함수
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
        </>
    );
}
export default DBMySQLBasic;
