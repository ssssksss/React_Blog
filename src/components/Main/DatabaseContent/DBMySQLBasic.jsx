import React from 'react';

const DBMySQLBasic = (props) => {
  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> 기초 지식 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 DELETE, TRUNCATE, DROP의 차이 </h2>
            <li> DELETE : 데이터 지워짐, 공간 그대로, 되돌릴수 있음, flush privileges 필요 </li>
            <li> TRUNCATE : 데이터 지워짐, 공간 지워짐, 인덱스 지워짐, 되돌릴수 없음, 테이블은 생존 </li>
            <li> DROP : 테이블 전체를 지워버림, 되돌릴 수 없음 , 실무에서는 위험할듯 싶다. </li>
            <li> 완전 삭제순 DROP {">"} TRUNCATE {">"} DELETE </li>

            <h2 className='h2'> 📌  </h2>
            <li> * : 전체 </li>
            <li> % : 외부에서 접속 </li>
            <li>  </li>

            <h2 className='h2'> 📌 데이터베이스와 스키마 차이 </h2>
            <li> mysql에서는 데이터베이스와 스키마가 같은 의미이다. </li>

            <h2 className='h2'> 📌  </h2>
            <li>  </li>
            <li>  </li>
            <li>  </li>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 데이터 타입(정리중) </summary>

          <h2 className='h2'> 📌 숫자 </h2>
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

          <h2 className='h2'> 📌 문자 </h2>
          <li> CHAR(0~255) # 자릿수 값보다 작으면 뒤쪽을 공백으로 메움 </li>
          <li> VARCHAR(0~65535) #  </li>
          <li> BINARY() #바이너리 형태 </li>
          <li> VARBINARY() #바이너리 형태 </li>
          <li> TINYBLOB,BLOB,MEDIUMBLOB,LONGBLOB # 대소문자 구분x  </li>
          <li> TINYTEXT,TEXT,MEDIUMTEXT,LONGTEXT # 문자열 , 기본값을 가질수 없음 , 대소문자를 구분 </li>
          <li> ENUM('데이터값1','데이터값2',...) # 65536개의 데이터 집합</li>
          <li>  </li>

          <h2 className='h2'> 📌 날짜, 시간 </h2>
          <li> DATE # 'YYYY-MM-DD' </li>
          <li> DATETIME # 'YYYY-MM-DD HH:MM:SS' </li>
          <li> TIMESTAMP #  </li>
          <li> TIME # 'HH:MM:SS' , 'HHH:MM:SS' </li>
          <li> YEAR # 4자리숫자나문자 : 1901~2155  </li>
          <li>  </li>
          <li>  </li>

        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> 권한(정리중) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 유저들 접근 권한 조회 </h2>
            <li> select user,select_priv from mysql.user; <small> # select 수행 권한 </small> </li>
            <li> select user,insert_priv from mysql.user; <small> # insert 수행 권한 </small> </li>
            <li> select user,update_priv from mysql.user; <small> # update 수행 권한 </small> </li>
            <li> select user,delete_priv from mysql.user; <small> # delete 수행 권한 </small> </li>
            <li> select user,create_priv from mysql.user; <small> # create 수행 권한 </small> </li>
            <li> select user,drop_priv from mysql.user; <small> #  drop 수행 권한 </small> </li>
            <li> select user,reload_priv from mysql.user; <small> # reload 수행 권한 </small> </li>
            <li> select user,shutdown_priv from mysql.user; <small> # shutdown 수행 권한 </small> </li>
            <li> select user,process_priv from mysql.user; <small> # process 관리 권한 </small> </li>
            <li> select user,grant_priv from mysql.user; <small> # 자신의 권한 위임 권한 </small> </li>
            {/*<li> select user,references_priv from mysql.user; <small> #  수행 권한 </small> </li>*/}
            <li> select user,index_priv from mysql.user; <small> #  index 수행 권한 </small> </li>
            <li> select user,alter_priv from mysql.user; <small> #  alter 수행 권한 </small> </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 데이터베이스 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 접속 </h2>
            <li> cmd창 열기  </li>
            <li> mysql -u root -p비밀번호 <small> mysql 로그인</small> </li>
            <li> show variables like "%version%" <small> mysql 관련정보 </small> </li>
            <li> select version(); <small> mysql 버전 확인 </small>
              <li> mysql workbench에서 버전 확인 하는 방법 </li>
              <li> Edit - Preferences - Modeling - MySQL - 버전확인   </li>
            </li>
            <li> exit # mysql 버전 확인 </li>

            <h2 className='h2'> 📌 Create </h2>
            <li> create database DB명;  </li>
            <li> </li>

            <h2 className='h2'> 📌 Read </h2>
            <li> SHOW DATABASES; <small> // 데이터베이스 전체 조회, 대문자 중요 </small> </li>
            <li> SELECT DATABASE(); <small> // 현재 사용중인 데이터베이스 조회, 대문자 중요 </small> </li>
            <li> select host,user from user; <small> use mysql, 사용자 조회 </small> </li>
            <li> </li>

            <h2 className='h2'> 📌 Update </h2>
            <li> 🎈 데이터베이스 이름 변경하는 방법 , mysql에서 exit로 나간후 사용
              <div className="block4">
                <li> mysqldump -u root -p 기존DB명 {">"} 기존DB명.sql </li>
                <li> mysqldump -u root -p --routines 기존DB명 {">"} 기존DB명.sql </li>
                <li> mysql -u root -p -e "CREATE DATABASE 새DB명" </li>
                <li> mysql -u root -p 새DB명 {"<"} 기존DB명.sql </li>
                <li> mysql -u root -p -e "DROP DATABASE 기존DB명" </li>
              </div>
            </li>
            <li>  </li>

            <h2 className='h2'> 📌 Delete </h2>
            <li> DROP DATABASE 삭제할DB명; <small> 데이터베이스 삭제 </small> </li>
            <li> DROP DATABASE IF EXISTS DB명; <small> 데이터베이스가 있으면 삭제, 오류 발생하지 않음 </small> </li>
            <li>  </li>

            <h2 className='h2'> 📌 etc </h2>
            <li> USE 데이터베이스명 <small> 현재 데이터베이스 변경 </small> </li>
            <li> ALTER DATABASE DB명 CHARACTER SET=문자집합명 COLLATE=콜레이션명
              <div className='block4'>
                <li> 문자집합명 : utf8(1~3바이트) , euckr(1~2바이트) # 문자 인코딩 방식 </li>
                <li> 콜레이션명 : utf8_bin , utf8_general_ci(디폴트값) , euckr_bin , euckr_korean_ci # 문자 비교 방식 </li>
              </div>
            </li>
            <li> </li>


            <h2 className='h2'> 📌 authority Create </h2>
            <li>  </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Read </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Update </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Delete </h2>
            <li> </li>
            <li> </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 사용자 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 Create </h2>
            <li> create user 사용자명; <small> 유저 생성 </small> </li>
            <li> create user '유저명'@'[localhost IP주소 %]' identified by '유저비밀번호'; <small> 유저 생성 </small> </li>
            <li>  </li>

            <h2 className='h2'> 📌 Read </h2>
            <li> select user, host from mysql.user; <small> mysql 데이터베이스에 있는 사용자와 호스트 조회 </small></li>
            <li> show grants for '사용자명'; <small> 사용자 권한 조회 </small> </li>
            <li>  </li>

            <h2 className='h2'> 📌 Update </h2>
            <li> 🎈 사용자 비밀번호 변경
              <li> use mysql; </li>
              <li> update user set password=PASSWORD('변경할새로운비밀번호') where user='사용자명' </li>
              <li> flush privileges; </li>
            </li>
            <li> </li>

            <h2 className='h2'> 📌 Delete </h2>
            <li> 🎈 사용자 삭제1
              <li> drop user 유저명; </li>
              <li> DROP USER '사용자명'@'localhost'; </li>
            </li>
            <li> 🎈 사용자 삭제2
              <li> delete from user where user='삭제할유저명' </li>
              <li> flush privileges; </li>
            </li>
            <li> </li>
            <li> </li>


            <h2 className='h2'> 📌 authority Create </h2>
            <li> grant [all 권한명] privileges on 데이터베이스명.[* 테이블명] to '유저명'@'[localhost IP주소 %]'; <small> 사용자에게 권한주기 </small></li>
            <li> grant all privileges on 데이터베이스명.[* 테이블명] to '유저명'@'[localhost IP주소 %]'
              identified by '유저비밀번호'; <small> 사용자 생성+권한 주기 </small></li>
            <li>  </li>

            <h2 className='h2'> 📌 authority Read </h2>
            <li> select host,user from user; <small> use mysql, 사용자 조회 </small> </li>
            <li> show grants for 유저명@[localhost IP주소 %] <small> 유저 권한 조회 </small> </li>
            <li> SELECT user(); <small> # 현재 사용자 확인 </small> </li>
            <li>  </li>

            <h2 className='h2'> 📌 authority Update </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Delete </h2>
            <li> revoke [all 권한명] privileges on DB명.[* 테이블명] from 유저명.[localhost IP주소 %]; </li>
            <li>  </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 테이블 </summary>
          <div className='block2'>


            <h2 className='h2'> 📌 Create </h2>
            <li> 🎈 테이블 생성
              <li> CREATE TABLE 테이블명 (
                <li> 컬럼명1 컬럼타입, </li>
                <li> 컬럼명2 컬럼타입 NOT NULL, </li>
                <li> 컬럼명3 컬럼타입 UNIQUE, </li>
                <li> 컬럼명4 컬럼타입 PRIMARY KEY, </li>
                <li> 컬럼명5 컬럼타입 FOREIGN KEY, </li>
                <li> 컬럼명6 컬럼타입 DEFAULT=기본값, </li>
                <li> [CONSTRAINT 제약조건명] 제약조건 컬럼명1, </li>
                <li> [CONSTRAINT 제약조건명] FOREIGN KEY 컬럼명2 REFERENCES 참조테이블명(참조컬럼명)
                  ON UPDATE 옵션 ON DELETE 옵션
                  <div className="block4">
                    <li> ON UPDATE 옵션 :  참조되는 테이블이 데이터가 수정될 때 , 참조하는 테이블을 어떻게 할것인지   </li>
                    <li> ON DELETE 옵션 :  참조되는 테이블이 데이터가 삭제될 때 , 참조하는 테이블을 어떻게 할것인지   </li>
                    <div className="block4">
                      <li> 옵션
                        <li> CASCADE : 참조되는 테이블에서 데이터를 삭제,수정하면 참조하는 테이블 데이터 같이 삭제,수정</li>
                        <li> SET NULL : 참조되는 테이블에서 데이터를 삭제,수정하면 참조하는 테이블 데이터 NULL</li>
                        <li> NO ACTION : 참조되는 테이블에서 데이터를 삭제,수정하면 참조하는 테이블 데이터 변경 x</li>
                        <li> SET DEFAULT : 참조되는 테이블에서 데이터를 삭제,수정하면 참조하는 테이블 데이터 필드 기본값으로 설정 </li>
                        <li> RESTRICT :  참조하는 테이블에서 데이터가 남아있으면, 참조되는 테이블의 데이터 삭제,수정 불가능 </li>
                      </li>
                    </div>
                  </div>
                </li>
              </li>
              <li> ) </li>
            </li>
            <li>  </li>

            <h2 className='h2'> 📌 Read </h2>
            <li> SHOW TABLES; <small> 사용중인 데이터베이스에 있는 모든 테이블 조회 </small> </li>
            <li> SHOW CREATE TABLE 테이블명 <small> 테이블 생성 쿼리 조회 </small> </li>
            <li> DESC 테이블명; <small> 테이블 조회 </small> </li>
            <li> select [* 컬럼명 컬럼명1,컬럼명2,...] from 테이블명;  </li>
            <li> SELECT 별칭1.컬럼명1, 별칭2.컬럼명1 FROM 테이블1 AS 별칭1, 테이블2 AS 별칭2 </li>
            <li> select [* 컬럼명] from 테이블명 ORDER BY 컬럼 ASC; <small> 오름차순 </small> </li>
            <li> select [* 컬럼명] from 테이블명 ORDER BY [컬럼 컬럼1,컬럼2,...]; <small> 오름차순 </small> </li>
            <li> select [* 컬럼명] from 테이블명 ORDER BY 컬럼 DESC; <small> 내림차순 </small> </li>
            <li> select 컬럼명1,컬럼명2 from 테이블명 ORDER BY 컬럼명1 DESC, 컬럼명2 ASC; <small> 컬럼명1 내림차순, 컬럼명2 오름차순 </small> </li>
            <li> select [* 컬럼명] from 테이블명 WHERE [조건식, 컬럼명="값"]; </li>
            <li> SELECT * FROM 테이블명 WHERE 컬럼명1 {'>'} 10 AND 컬럼명1 {'<'} 30 </li>
            <li> SELECT * FROM 테이블명 WHERE 컬럼명1 {'>'} 10 OR 컬럼명2 {'>'} 10 </li>
            <li>  </li>

            <h2 className='h2'> 📌 Update </h2>
            <li>  </li>
            <li>  </li>

            <h2 className='h2'> 📌 Delete </h2>
            <li> DROP TABLE 테이블명 <small> 테이블 삭제, 테이블 내부 전부 삭제 </small> </li>
            <li> DROP TABLE IF EXISTS 테이블명 <small> 테이블이 있으면 삭제, 오류 발생하지 않음 </small> </li>
            <li>  </li>


            <h2 className='h2'> 📌 authority Create </h2>
            <li> grant select on 데이터베이스명.* to 유저명@[localhost IP주소 %]; <small> 테이블 조회 권한 부여 </small> </li>
            <li> grant insert on 데이터베이스명.* to 유저명@[localhost IP주소 %]; <small> 테이블 삽입 권한 부여 </small> </li>
            <li>  </li>

            <h2 className='h2'> 📌 authority Read </h2>
            <li>  </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Update </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Delete </h2>
            <li> TRUNCATE TABLE 테이블명 <small> 테이블의 구조는 남기고 테이블 내부의 데이터만을 삭제 </small>  </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 프로시저 </summary>
          <div className='block2'>


            <h2 className='h2'> 📌 Create </h2>
            <li>  </li>
            <li> </li>

            <h2 className='h2'> 📌 Read </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 Update </h2>
            <li> UPDATE mysql.proc SET db=기존DB명 WHERE db=새로운DB명 <small> 프로시저 새로운 DB로 이동 </small> </li>
            <li> </li>

            <h2 className='h2'> 📌 Delete </h2>
            <li> </li>
            <li> </li>


            <h2 className='h2'> 📌 authority Create </h2>
            <li>  </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Read </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Update </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Delete </h2>
            <li> </li>
            <li> </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 뷰 </summary>
          <div className='block2'>


            <h2 className='h2'> 📌 Create </h2>
            <li>  </li>
            <li> </li>

            <h2 className='h2'> 📌 Read </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 Update </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 Delete </h2>
            <li> </li>
            <li> </li>


            <h2 className='h2'> 📌 authority Create </h2>
            <li>  </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Read </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Update </h2>
            <li> </li>
            <li> </li>

            <h2 className='h2'> 📌 authority Delete </h2>
            <li> </li>
            <li> </li>

          </div>
        </details>
      </div>



      <div className='block1'>
        <details>
          <summary> 컬럼 </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 Create </h2>
            <li>  </li>
            <li> </li>
            <h2 className='h2'> 📌 Read </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 Update </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 Delete </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 authority Create </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 authority Read </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 authority Update </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 authority Delete </h2>
            <li> </li>
            <li> </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 필드 </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 Create </h2>
            <li> ALTER TABLE 테이블명 ADD 필드명 필드타입 제약조건 <small>  테이블에 필드를 추가</small> </li>
            <li> ALTER TABLE 테이블명 ADD CONSTRAINT 제약조건명 FOREIGN KEY 필드명 REFERENCES 테이블명 필드명 <small>  </small></li>
            <li> </li>
            <h2 className='h2'> 📌 Read </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 Update </h2>
            <li> ALTER TABLE 테이블명 ADD CONSTRAINT 제약조건명 제약조건 필드명 <small> 테이블 기존필드에 제약조건을 추가 </small> </li>
            <li> ALTER TABLE 테이블명 MODIFY COLUMN 필드명 필드타입 제약조건 <small> 테이블에 있는 기존 필드타입을 변경 </small></li>
            <li> </li>
            <h2 className='h2'> 📌 Delete </h2>
            <li> ALTER TABLE 테이블명 DROP 필드명 <small> 테이블에 필드를 삭제 </small> </li>
            <li> ALTER TABLE 테이블명 DROP INDEX 제약조건명 <small> 제약조건명을 찾아서 삭제 </small> </li>
            <li> ALTER TABLE 테이블명 DROP FOREIGN KEY 제약조건명 <small> 제약조건명으로 외래키를 삭제 </small></li>
            <li> </li>
            <h2 className='h2'> 📌 authority Create </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 authority Read </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 authority Update </h2>
            <li> </li>
            <li> </li>
            <h2 className='h2'> 📌 authority Delete </h2>
            <li> </li>
            <li> </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 권한명 - 옵션 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> all </li>
            <li> select </li>
            <li>  </li>
            <li>  </li>
            <li>  </li>
            <li>  </li>


          </div>
        </details>
      </div>


      <span className="lblock">

        <span className="mtitle"> <a name="MySQL Study">  MySQL Study  </a> </span>

        <div className='mblock'>
          <details>
            <summary className='stitle'> MySQL 시작, 설정
              <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
            <div className='sblock'>

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
            <summary className='stitle'> USE, SHOW, DESC, SET
              <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
            <div className='sblock'>


              <div className='sstitle'> SHOW </div>
              <div className='mblock'>
                <li> show variables like 'validate_password%'; <small> # 비밀번호 정책 보기 </small> </li>
                <li> show variables; # 환경변수 보기 </li>
                <li> show variables like 'char%'; # 서버에 사용되는 문자셋 조회 </li>
                <li> show table status from DB명 like '테이블명%'; #테이블에 사용되는 문자셋 조회  </li>

                <li> show create table 테이블명; # 테이블 생성정보 조회, 문자셋도 조회 가능</li>
                <li> show grants for 유저명@ </li>
                <li> show columns from user; <small> # 사용자들의 컬럼 조회 </small> </li>
                <li>  </li>
              </div>

              <div className='sstitle'> DESC </div>
              <div className='mblock'>
                <li> desc user; # user 테이블 조회 </li>
                <li>  </li>
              </div>

              <div className='sstitle'> SET </div>
              <div className='mblock'>
                <li> SET global validate_password[_policy .policy]=[LOW,MIDIUM,STRONG] <small> # policy부분 문법 확인해보기 </small> </li>
                <li>  </li>
              </div>
            </div>
          </details>
        </div>



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
                    <li> create user 'root'@'%' [identified by 'abcd']; </li>
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

      </span>
    </div>
  );
}
export default DBMySQLBasic;
