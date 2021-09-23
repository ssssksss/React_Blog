import React from 'react';

const CloudOracle = (props) => {
    return (
        <>

            <div className="common_style">
                <ul>
                    <span className="lblock">
                        <div className='mblock'>
                            <details>
                                <summary className='stitle'> 오라클 클라우드 설명
                                    <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                                <div className='sblock'>
                                    <div className='sstitle'>  </div>
                                    <div className='mblock'>
                                        <li>  </li>
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
                                <summary className='stitle'> 오라클 클라우드 무료 시작하기
                                    <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                                <div className='sblock'>
                                    <div className='sstitle'> 사이트 </div>
                                    <div className='mblock'>
                                        <li> <a href="https://www.oracle.com/kr/cloud/free/" target="_blank"
                                            rel="noopener noreferrer"> 오라클 클라우드 무료 이용 주소 </a> </li>
                                        <li> 영어로 입력해서 가입하기 </li>
                                        <li> 메뉴 - ID - 구획 - 구획 생성  </li>
                                        <li> 메뉴 - 네트워킹 - 가상클라우드네트워크 - VCN 생성
                                            <li> 이름 작성 , IPv4 CIDR 블록 10.0.0.0/16 입력 , 이 VCN의 DNS 호스트 이름 사용 체크 </li>
                                        </li>
                                        <li> 서브넷 생성
                                            <li> 이름 작성 , CIDR 블록 10.0.0.0/24 입력 </li>
                                        </li>
                                        <li> 서브넷 - 만든 서브넷 이름 클릭 - 디폴트 클릭 - 수신 규칙 추가
                                            <li> 소스 CIDR : 0.0.0.0/0 , 대상 포트 범위 : 80,443 , 설명 : HTTP, HTTPS </li>
                                            <li> 소스 CIDR : 0.0.0.0/0 , 대상 포트 범위 : 3306,33060 , 설명 : mysql </li>
                                        </li>
                                        <li> 메뉴 - 컴퓨트 - 인스턴스 - 인스턴스 생성
                                            <li> 이름 작성 , 이미지 및 구성 - 이미지 변경 - 원하는 운영체제(CentOS7)    </li>
                                            <li> 윈도우면 SSH 키 쌍 생성에서 전용키,공용키 저장 </li>
                                            <li> 리눅스면 공용 키 붙여넣기에서 SSH키 가져와서 붙여넣기 </li>
                                        </li>
                                        <li>  </li>
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
                                <summary className='stitle'> 오라클 클라우드 DB 생성 및 연결하기
                                    <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                                <div className='sblock'>
                                    <div className='sstitle'> 클라우드 공간에 DB생성하기 </div>
                                    <div className='mblock'>
                                        <li> 메뉴 - Oracle Database - 자율운영 데이터베이스 - 자율운영 데이터베이스 생성 </li>
                                        <li> 구획, 표시이름, 데이터베이스 이름 적고, 트랜잭션 처리 클릭 , 항상 무료 구성 옵션만 표시 사용 - 생성완료 </li>
                                        <li> 프로비전 중 - 사용가능으로 변경될때 까지 대기  </li>
                                        <li> DB 접속 - 인스턴스 전자 지갑 다운로드 </li>
                                        <li>  </li>
                                    </div>
                                    <div className='sstitle'> sql developer에 연결하기 </div>
                                    <div className='sblock'>
                                        <li> 좌측상단 초록색 + 버튼 클릭  </li>
                                        <li> DB이름, 사용자 이름, 비번 입력 , 접속 유형을 클라우드 전자 지갑으로 변경 </li>
                                        <li> 구성 파일에 오라클 클라우드 DB에서 받은 전자지갑 파일을 넣기 </li>
                                        <li>  </li>
                                    </div>
                                    <div className='sstitle'>  </div>
                                    <div className='sblock'>
                                        <li>  </li>
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
                </ul>
            </div>
        </>
    );
}

export default CloudOracle;