import React from 'react';

const DBNamingConvention = (props) => {

    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> DB 네이밍 컨벤션 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1. userId ❌ , user_id ✅ , _를 사용해서 이름을 짓는다. </li>
                        <li> 2. dept_no가 아닌 department_no 처럼 축약하지 말고 사용할 것 </li>
                        <li> 3. SELECT user.id FROM user; , 코드작동은 상관없지만 문법은 대문자 사용해볼것 </li>
                        <li> 4. users 보다는 단수인 user 사용할 것 </li>
                        <li> 5. PK 추천은 table명_id , 꼭 이렇게 할 필요는 없음 </li>
                        <li> 6. FK는 참조table명_컬럼명, user_id </li>
                        <li> 7. 테이블명을 prefix와 suffix를 사용하는 경우가 있는데 사용X, (user_TB , user_VM) </li>
                        <li> 8. 컬럼에는 대문자를 사용하지 말것 </li>
                        <li> 9. index는 user_ix_컬럼명1_컬럼명2...   </li>
                        <li> 9. constraint는 제약조건테이블명_조건  </li>
                        <li> 10. 데이터타입을 이름으로 사용하지 않는다. </li>
                        <li> 11. 약어를 사용한다면 공통적으로 사용되는 약어를 사용해야한다. </li>
                        <li> 12. 예약어를 사용하지 않는다. (user,table 등등) </li>
                        <li> 13.  </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> 회사 관련 네이밍 </summary>
                    <div className='block2'>
                        <h2 className='h2'> 📌 컬럼 예시 </h2>
                        <li> employee_no,empno : 직원 번호 </li>
                        <li> employee_name, ename : 직원 이름 </li>
                        <li> employee_email : 직원 이메일 </li>
                        <li> employee_addr1 : 직원 주소 </li>
                        <li> employee_addr2 : 직원 예비 주소 </li>
                        <li> employee_location : 직원 근무지역 </li>
                        <li> employee_phone : 직원 휴대폰 번호 </li>
                        <li> last_name : 성 </li>
                        <li> first_name : 이름 </li>
                        <li> job : 직위 </li>
                        <li> hiredate : 입사일 </li>
                        <li> salary, sal : 월급 </li>
                        <li> commision , comm : 커미션(수수료) , nvl함수와 같이 사용 </li>
                        <li> commision_percent , comm_pct : 커미션(수수료) 퍼센트  </li>
                        <li> department_no ,deptno : 부서 번호 </li>
                    </div>
                </details>
            </div>

        </div>
    );
}
export default DBNamingConvention;
