import React from 'react';

const SpringService = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> @Transactional </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> <a href="https://nesoy.github.io/articles/2019-05/Database-Transaction-isolation" target="_blank" rel="noopener noreferrer"> 정리 내용 참고 </a> </li>
                        <li> 트랜잭션은 DB의 상태를 변경하는 작업, 한번에 연산 처리가 필요 </li>
                        <li> (begin, commit)을 자동실행, 예외발생시 rollback 처리 </li>
                        <li> 메소드, 클래스, 인터페이스 위에 선언, 트랜잭션 기능을 가진 프록시 객체가 진행 </li>
                        <li> @Transactional 은  </li>
                        <li> @Transactional(rollbackFor = Exception.class) </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 옵션 </h2>
                        <li> isolation : 트랜잭션에서 일관성없는 데이터 허용 수준을 설정한다(이해가 안감) </li>
                        <li> @Transactional(isolation=Isolation.DEFAULT) , 데이터베이스의 Isolation Level 사용 </li>
                        <li> @Transactional(isolation=Isolation.READ_UNCOMMITED) , 데이터 변경해서 커밋을 하는 동안 다른사용자가 데이터 읽기 허용 </li>
                        <li> @Transactional(isolation=Isolation.READ_COMMITED) , 데이터 변경해서 커밋을 하는 동안 다른사용자가 데이터 읽기 불가 </li>
                        <li> @Transactional(isolation=Isolation.REPEATEABLE_READ) , 트랜잭션마다 ID를 부여하여 본인보다 작은 ID값만 읽게 허용  </li>
                        <li> @Transactional(isolation=Isolation.SERIALIZABLE) , MVCC막고, Lock을 걸어서 막음 </li>
                        <li> Dirty Read, Non-Repeatable Read, Phantom Read 가 위에서부터 3,2,1개씩 있고 마지막만 없음 </li>
                        <li>  </li> <br />
                        <li> propagation : 트랜잭션 동작 도중 다른 트랜잭션을 호출할 때, 어떻게 할 것인지 지정하는 옵션이다(이해가 안감) </li>
                        <li> @Transactional(propagation=Propagation.REQUIRED), 진행중인 트랜잭션이 존재하면 속성을 그대로 따르고 , 없다면 생성 </li>
                        <li> @Transactional(propagation=Propagation.REQUIRED_NEW), 진행중인 트랜잭션이 존재하면 잠시 중지하고, 트랜잭션을 새로 생성해서 먼저 실행  </li>
                        <li> @Transactional(propagation=Propagation.SUPPORT), 진행중인 트랜잭션이 존재하면 속성을 그대로 따르고 , 없다면 설정x </li>
                        <li> @Transactional(propagation=Propagation.NOT_SUPPORT), 진행중인 트랜잭션이 존재하면 잠시 중지하고 트랜잭션 없이 수행 </li>
                        <li> @Transactional(propagation=Propagation.MANDATORY), 진행중인 트랜잭션이 존재하면 실행, 없으면 예외 발생 </li>
                        <li> @Transactional(propagation=Propagation.NEVER), 트랜잭션이 없으면 진행, 있으면 에외 발생 </li>
                        <li> @Transactional(propagation=Propagation.NESTED), 진행중인 트랜잭션이 있으면 중첩해서 실행, 없으면 REQUIRED와 동일 </li>
                        <li>  </li> <br />
                        <li> noRollbackFor : 특정 예외 발생 시 rollback하지 않는다. </li>
                        <li> @Transactional(noRollbackFor=Exception.class) </li>
                        <li>  </li> <br />
                        <li> rollbackFor : 특정 예외 발생 시 rollback한다. </li>
                        <li> @Transactional(rollbackFor=Exception.class) </li>
                        <li>  </li> <br />
                        <li> timeout : 지정시간내에 메소드 완료 안할시 rollback (-1은 사용안함 표시) </li>
                        <li> @Transactional(timeout=1) </li>
                        <li>  </li> <br />
                        <li> readOnly : 읽기 전용 </li>
                        <li> @Transactional(readonly = true) , insert/update/delete이면 예외 발생 </li>
                        <li>  </li> <br />

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li> 소제목
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li>  </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default SpringService;