import React from 'react';

const PythonRegex = (props) => {

    return (
        <>
            <div className="common_style" >
                <span className="lblock">
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 설명
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> import re # 라이브러리를 사용  </li>
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 정규 표현식 문법
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li> 문자열 = r"모든문자" # 문자,특수문자 등등을 문자열로 출력 </li>
                                    <li> 패턴{'{1,3}'} # 패턴을 1~3번 반복 </li>
                                    <li> [abc] # a 혹은 b 혹은 c </li>
                                    <li> [a|b|c] # a 혹은 b 혹은 c </li>
                                    <li> [aA] # a 혹은 A  </li>
                                    <li> [a-z] # a~z 까지의 범위 </li>
                                    <li> [^a-z] # a~z가 아닌 문자 </li>
                                    <li> [0-9] # 0~9 까지의 숫자 </li>
                                    <li> [^0-9] # 0~9 까지의 숫자를 제외한 문자 </li>
                                    <li> [a-zA-Z0-9] # 모든 문자와 숫자 </li>
                                    <li> [가-힣] # 모든 한글 </li>
                                    <li> a...z # a~z 까지의 문자 </li>
                                    <li> ^[패턴] # 패턴이 제일 앞에 있는지 물어봄 </li>
                                    <li> 패턴+ : 1번이상의패턴 </li>
                                    <li> 패턴* : 0번 이상의 패턴
                                        <li> [0-9]* # 0~9로 이루어진 문자열 </li>
                                    </li>
                                    <li> 패턴? : 0~1번의 패턴 </li>
                                    <li> 패턴. : 어떠한 문자 패턴도 가능 </li>
                                    <li> \문자$ # 마지막에 문자의 위치를 찾는다고 하는데 (미확인) </li>
                                    <li> 문자$ # 문자열의 마지막의 문자가 맞는지
                                        <li> [a-zA-Z0-9]+.@ # 문자열의 끝이 @으로 끝나는지 확인  </li>
                                    </li>
                                    <li> \d : 0-9와 동일 </li>
                                    <li> \D : [^0-9] 와동일 </li>
                                    <li> \s : 공백문자(띄어쓰기,탭 등) </li>
                                    <li> \S : 공백이아닌문자 </li>
                                    <li> \w : [0-9a-zA-Z]와 동일 </li>
                                    <li> \W : [^0-9a-zA-Z]와 동일 </li>
                                    <li> 옵션 : re.IGNORECASE # 대소문자를 무시 </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ re 문법
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> re.match('패턴','문자열') </span>
                                <span className="mblock">
                                    <li> 문자열의 시작부분에서부터 패턴이 일치하는지 검색 </li>
                                    <li> 처음부터 일치하지 않으면 None  </li>
                                    <li> re.match('패턴','문자열') </li>
                                    <span className='title4'> 예시 </span>
                                    <span className='sblock'>
                                        <li> re.match('aaa','aaab') (o) </li>
                                        <li> re.match('baaa','aaab') (x) </li>
                                    </span>
                                </span>
                                <span className="sstitle"> re.search('패턴','문자열') </span>
                                <span className="mblock">
                                    <li> 문자열에서 패턴이 매칭되는 곳이 있는지 확인 </li>
                                    <span className="title4"> 예시 </span>
                                    <span className="sblock">
                                        <li> re.search('aaa','aaab') (o) </li>
                                        <li> re.search('baaa','aaab') (o) </li>
                                    </span>
                                </span>
                                <span className="sstitle"> re.findall('패턴','문자열') </span>
                                <span className="mblock">
                                    <li> 정규식과 일치하는 모든 문자열을 리스트로 반환 </li>
                                    <li> 만약에 정규식이 일치하는 부분이 겹치다면 중복을 허용하지 않음 </li>
                                    <li>  </li>
                                </span>
                                <span className="sstitle"> re.finditer('패턴','문자열') </span>
                                <span className="mblock">
                                    <li> 정규식과 일치하는 모든 문자열을 iterator로 반환 </li>
                                    <li> 만약에 정규식이 일치하는 부분이 겹치다면 중복을 허용하지 않음 </li>
                                </span>
                                <span className="sstitle"> match 객체 사용방법 </span>
                                <span className="mblock">
                                    <li> re.finditer('패턴','문자열') #문자열에서 패턴이 일치하면 iterator로 반환(겹치는값은x)  </li>
                                    <li> re.fullmatch('패턴','문자열') #시작부터 끝까지 모두 일치하면 match객체 반환 </li>
                                    <li> re.split('패턴','문자열',split횟수) </li>
                                    <li> re.sub('패턴','바꿀문자열','문자열','바꿀횟수') #바꾸어진 문자열 반환 </li>
                                    <li> re.subn('패턴','바꿀문자열','문자열') # (문자열,바뀐횟수)로 반환 </li>
                                    <li> re객체명 = re.compile('패턴') #패턴이 반복되면 공통적으로 적용시킴
                                        <li> re객체명.match('문자열') #이와 같이 패턴을 쓰지 않고 사용 </li>
                                    </li>
                                    <li> re.purge() #compile은 캐시에 100개가 넘어가면 초기화 그것을 방지 하는 용도 </li>
                                    <li> re.escape('특수문자') #모든 특수문자 앞쪽에 백슬래쉬(\)를 붙여서 반환 </li>
                                    <li> match객체
                                        <li> match객체명.group() #일치하는 패턴 문자열  </li>
                                        <li> match객체명.start() #일치한 패턴 시작 위치 인덱스</li>
                                        <li> match객체명.end() #일치한 패턴 끝 위치 인덱스 </li>
                                        <li> match객체명.span() #일치한 패턴이 어디부터 어디까지인지 인덱스 </li>
                                        <li> match객체명.groups() #일치한 패턴들을 반환 </li>
                                        <li> match객체명.group(인덱스) #일치한 패턴들의 인덱스 값을 반환 </li>
                                    </li>
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶ 사용 예시
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle"> 컴파일 사용해서 반복적으로 적용 </span>
                                <span className="mblock">
                                    <li>  </li>
                                    <li>  </li>
                                </span>
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <details>
                            <summary className="stitle"> ▶
                                <a name="" style={{ visibility: "hidden" }}>  </a> </summary>
                            <span className="sblock">
                                <span className="sstitle">  </span>
                                <span className="mblock">
                                    <li>  </li>
                                </span>
                            </span>
                        </details>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default PythonRegex;