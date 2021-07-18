import React, { useEffect, useRef, useState } from 'react';

const PtyhonStudy = (props) => {
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
                    <p className="hyperlink">
                        <details open>
                            <summary> 파이썬 문법  </summary>
                            <a href="#Python이란?" > Python이란? </a>
                            <a href="#출력메소드" > 출력메소드 </a>
                            <a href="#주석" > 주석 </a>
                            <a href="#자료형과 변수" > 자료형과 변수 </a>
                            <a href="#문자열" > 문자열 </a>
                            <a href="#연산자" > 연산자 </a>
                            <a href="#입력메소드" > 입력메소드 </a>
                            <a href="#리스트(list)" > 리스트(list) </a>
                            <a href="#튜플(tuple)" > 튜플(tuple) </a>
                            <a href="#세트(set)" > 세트(set) </a>
                            <a href="#딕셔너리(dictionary)" > 딕셔너리(dictionary) </a>
                            <a href="#조건문" > 조건문 </a>
                            <a href="#반복문" > 반복문 </a>
                            <a href="#" >  </a>
                            <a href="#" >  </a>
                            <a href="#" >  </a>
                            {/* <a href="#" className="col_p"> </a> */}
                        </details>
                    </p>
                </div>
            </div>
            <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
                <span className="lblock">

                    <span className="mtitle"> 파이썬 공부 </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="Python이란?">  Python이란? </a> </span>
                        <ul>
                            <li> <small> 인터프리터 언어 </small> </li>
                            <li> <small> .py코드 실행 - 바이트 코드 상태 - PVM(파이썬 가상 머신) - 처리 </small> </li>
                            <li> <small> 객체지향언어 지원 </small> </li>
                            <li> <small> 자료형이 정해져 있지 않음, 변수를 따로 선언하지도 않음 </small> </li>
                            <li> <small> 영상처리, 딥러닝 등 수학적인 내용이 들어갈때 자바보다 유리한것 같다.(numpy를 사용) </small> </li>
                        </ul>
                        {/* <span className="sblock">
                            <ul>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span> */}
                    </span>

                    {/*  */}

                    <span className="mblock">
                        <span className="stitle"> <a name="출력메소드"> 출력메소드 </a> </span>

                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 문자열 형식 </span>
                                <li> %d(정수), %o(8진수) , %x(16진수), %f(실수), %s(문자열) </li>
                                <span className="sstitle"> 이스케이프 문자 </span>
                                <li> \' , \" , \n , \t , \\ , \b 등등 </li>
                                <span className="sstitle"> print()함수 </span>
                                <li>  print('hello') </li>
                                <li>  print('hello' + 'world') , 공백없음 </li>
                                <li>  print('hello+"world"') , ""지워지지 않고 존재 </li>
                                <li>  print('hello'+end='abc') , hello 끝에 abc추가 , 그리고 개행(new line)을 하지 않음</li>
                                <li>  print('hello'+'world',sep='&nbsp;') , &nbsp;문자로 구분을 한다. </li>
                                <li>  print('hello'+'world') </li>
                                <li>  print('hello'+'world',file=sys.stdout) , 사용하면 모니터에 출력x? 확인필요 </li>
                                <li>  print('hello'+'world',flush=false) ,  </li>
                                <li>  print(변수) ,변수 출력 </li>
                                <li>  f=opne('파일명.txt','w') , print('hello',file=f) , 텍스트 파일에 출력내용이 저장이 된다 </li>
                                <li>  str1 = '%s는 %d원입니다' print(str1%(변수,변수))  </li>
                                <li>  print('%d,%f,%s',(변수,변수,변수)) </li>
                                <li>  print('%5d,%2.2f,%2s',(변수,변수,변수)) </li>
                                <li>  print('%5d,%2.2',(변수,변수,변수)) </li>
                                <li>  print('{"{}"},{"{}"},{"{}"}'.format(변수,변수,변수)) , 순서대로 출력</li>
                                <li>  print('{"{2}"},{"{1}"},{"{0}"}'.format(변수,변수,변수)) , 순서를 바꾸어서 사용가능 </li>
                                <li>  print('{"{a}"},{"{b}"},{"{c}"}'.format(a=변수,b=변수,c=변수)) </li>
                                <li>  print('{"{0[a]}"},{"{0[b]}"}'.format(locals())) , 변수로 선언된 변수들이 맞게 들어감 </li>
                                <li>  print('{"{a}"},{"{b}"}'.format(**locals())) , 변수로 선언된 변수들이 맞게 들어감 </li>
                                <li>  print(True) , True가 출력됨 </li>
                                <li>  pirnt(list(range(1,5)) , 1~5가 배열로 출력) </li>

                                <span className="sstitle"> f-string 문자열 포매팅(파이썬 버전 3.6이상) </span>
                                <li> print(f'hello{"{변수}"}') </li>
                                <li> print(f'hello{"{변수}"}:^10') , 총 10칸 가운데 정렬</li>
                                <li> print(f'hello{"{변수}"}:&gt;10') ,총 10칸 우측 정렬</li>
                                <li> print(f'hello{"{변수}"}:&lt;10') ,총 10칸 좌측 정렬</li>
                                <span className="sstitle"> 출력 모양(별로 필요없는 내용이라 접어둠) </span>
                                <details>
                                    <summary> 출력의 모양(간격조정) </summary>
                                    <li> print('hello'.center(10)) </li>
                                    <li> print('hello'.rjust(10)) </li>
                                    <li> print('hello'.ljust(10)) </li>
                                    <li> print('hello'.zfill(10) , 앞쪽에 0으로 채움) </li>
                                    <li> print('hello'.capitalize() , 첫글자만 대문자) </li>
                                    <li> print('hello'.upper()) , 대문자로 변경 </li>
                                    <li> print('hello'.lower()) , 소문자로 변경 </li>
                                </details>

                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="주석"> 주석  </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 한줄 주석 </span>
                                <li> # </li>
                                <span className="sstitle"> 여러줄 주석 </span>
                                <li> ''' ''' 혹은  """ """ </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="자료형과 변수">  자료형과 변수 </a> </span>
                        <span className="sstitle"> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 변수 </span>
                                <li> 파이썬의 변수는 자료형을 따로 지정하지 않아도 변수의 값에 따라서 알아서 지정을 해준다.
                                    그러므로 대입연산자(=)를 사용해서 값만 넣어주면 변수가 생성이 된다. </li>
                                <span className="sstitle"> 자료형  </span>
                                <li> 정수(int), 실수(float), 논리(bool), 문자열,   </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="문자열"> 문자열  </a> </span>
                        <p> 문자열은 추가,중복,순서,정렬 등은 되지만 수정은 되지 않는다.  </p>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 인덱싱(indexing) </span>
                                <li> 인덱싱의 첫시작은 0부터 시작하며, 그리고 끝에서부터 인덱싱이 가능한
                                    -인덱싱도 지원한다.  </li>
                                <span className="sstitle"> 슬라이싱(slicing) </span>
                                <li> 문자열의 일부를 잘라서 사용하는 메소드 </li>
                                <li> 문자열[start:end:step] , 문자열[start,end] </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="연산자"> 연산자  </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 산술 연산자 </span>
                                <li> +, -, *, **(제곱) , / , //(몫) , %(나머지)  </li>
                                <li>  문자열에 *를 사용하면 문자열이 2번 반복이 된다. </li>
                                <span className="sstitle"> 대입 연산자, 복합대입 연산자 </span>
                                <li>  =, +=, -=, *=, **= , /= ,//= , %= </li>
                                <span className="sstitle"> 관계 연산자 </span>
                                <li> &gt;, &gt;=, &lt;, &lt;=, ==, != </li>
                                <span className="sstitle"> 논리 연산자 </span>
                                <li> and, or, not  </li>
                                <span className="sstitle"> 비트 연산자 </span>
                                <li> &nbsp;, |, ^, ~, &lt;&lt;, &gt;&gt;   </li>
                                <span className="sstitle"> 기타 연산자 </span>
                                <li>  시퀸스 연산(리스트, 튜플 등 데이터 구조가 있는 곳에서 사용 가능) , * 혹은 + 사용  </li>
                                <li>  'a' in 문자열 : 문자열에 a라는 문제가 있으면 true, 없으면 false (멤버쉽연산자)</li>
                                <li>  변수 = 조건식 ? 참 : 거짓 : 삼항연산자  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="입력 메소드">  입력메소드 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> input() </span>
                                <li> 표준 입력 장치(키보드)로 입력받을 때 사용  </li>
                                <li> input('') 입력은 문자열로 반환하므로 다른 자료형은 형변환을 해야한다.  </li>
                                <li> input().split() , 입력값을 띄어쓰기로 구분하여 저장  </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="리스트(list)"> 리스트(list)  </a> </span>
                        <small> 타입이 다르더라도 하나의 리스트에 저장 가능 </small>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 리스트 덧셈, 곱셈 </span>
                                <li> list1+list2(리스트 합치기) , [1,2,3]*3  </li>
                                <span className="sstitle"> 일반적인 리스트 형태 </span>
                                <li> list1 = [값,값,값]  </li>
                                <span className="sstitle"> 인자 수정 및 추가 </span>
                                <li> list1[인덱스] = 값   </li>
                                <span className="sstitle"> 인자 마지막에 추가 </span>
                                <li> list1.append(값)  </li>
                                <span className="sstitle"> 인자 원하는 위치에 추가  </span>
                                <li> list1.insert(인덱스,값) </li>
                                <span className="sstitle"> 리스트에 다른 리스트 추가  </span>
                                <li> list1.extend(list2) </li>
                                <span className="sstitle"> 리스트 복사 </span>
                                <li> list1.copy()  </li>
                                <span className="sstitle"> 인자 삭제 </span>
                                <li> list1.pop(인덱스(default:마지막)) </li>
                                <span className="sstitle"> 리스트 삭제 및 인자 삭제 </span>
                                <li> del(list1) , del(list1[인덱스]) </li>
                                <span className="sstitle"> 값으로 인자 삭제 </span>
                                <li> list1.remove(값) , 인자(값)이 동일하면 먼저 있는 인자 삭제 </li>
                                <span className="sstitle"> 값과 같은 값을 가진 인자의 갯수 카운팅 </span>
                                <li> list1.count(값) </li>
                                <span className="sstitle"> 리스트 초기화 </span>
                                <li> list1.clear() </li>
                                <span className="sstitle"> 리스트 길이 </span>
                                <li> len(list1) </li>
                                <span className="sstitle"> 리스트 인덱스에 위치한 값 </span>
                                <li> list1.index(인덱스) </li>
                                <span className="sstitle"> 리스트 형변환 </span>
                                <li> list1 = list(튜플,세트 등) </li>
                                <span className="sstitle"> 리스트에 값이 존재하는지 확인(return boolean) </span>
                                <li> 값 in list1 </li>
                                <span className="sstitle"> 리스트 슬라이싱 </span>
                                <li> list1[인덱스시작,인덱스끝] </li>
                                <span className="sstitle"> 반복문 값을 리스트 형태로 넣어줌 </span>
                                <li> list1 = [i for i in range(10)] </li>
                                <span className="sstitle"> 조건에 맞는 반복문 값을 리스트 형태로 넣어줌 </span>
                                <li> list1 = [i for i in range(10) if i % 3 == 0] </li>
                                <span className="sstitle"> 리스트 정렬(오름차순, 내림차순) </span>
                                <li> list1.sort() , list1.sort(reverse=True) </li>
                                <span className="sstitle"> 리스트를 역순으로 변경 </span>
                                <li> list1.reverse() </li>
                                {/* <span className="sstitle">  </span>
                                <li>  </li> */}
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="튜플(tuple)"> 튜플(tuple) </a> </span>
                        <small> 저장된 값을 수정,삭제 할 수 없는 리스트 </small>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 튜플의 일반적인 형태 </span>
                                <li> tuple1 = (값,값,값) </li>
                                <span className="sstitle"> 튜플 생성 </span>
                                <li> tuple1 = () </li>
                                <li> tuple1 = tuple() </li>
                                <li> tuple1 = (값,) , (값)으로 하면 일반적인 값만 들어가서 튜플의 형태가 되지 않는다. </li>
                                <span className="sstitle"> 튜플 인덱싱 </span>
                                <li> tuple1[인덱스] </li>
                                <span className="sstitle"> 튜플 슬라이싱 </span>
                                <li> tuple1[인덱스시작,인덱스끝] </li>
                                <span className="sstitle"> 튜플 길이 </span>
                                <li> len(tuple1) </li>
                                <span className="sstitle"> 튜플 덧셈 곱셈 </span>
                                <li> tuple1+tuple2 , tuple1*2 </li>
                                <span className="sstitle"> 튜플 swap </span>
                                <li> tuple1,tuple2 = tuple2,tuple1 </li>
                                {/* <span className="sstitle">  </span>
                                <li>  </li> */}
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="세트(set)"> 세트(set) </a> </span>
                        <small> 세트는 순서가 없지만 중복된 값이 저장이 되지 못하게 한다. </small>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 세트의 일반적인 형태 </span>
                                <li> set1 = {"{값,값,값"} </li>
                                <span className="sstitle"> 세트 생성 </span>
                                <li> set1 = set() , 빈 세트 생성</li>
                                <li> set1 = set(리스트,튜플 등) </li>
                                <span className="sstitle"> 세트 인자 추가하기 </span>
                                <li> set1.add(값) </li>
                                <li> set1.update(리스트) , 리스트 전체를 추가 </li>
                                <li> set1.update(튜플) , 튜플 전체를 추가 </li>
                                <span className="sstitle"> 세트 값 제거 </span>
                                <li> set1.remove(값) , 없으면 에러 발생 </li>
                                <li> set1.discard() , 없어도 에러 발생x </li>
                                <span className="sstitle"> 세트 교집합 </span>
                                <li> set1.interserction(set2) </li>
                                <li> set1 &nbsp; set2</li>
                                <span className="sstitle"> 세트 합집합 </span>
                                <li> set1.union(set2) </li>
                                <li> set1 | set2</li>
                                <span className="sstitle"> 세트 차집합 </span>
                                <li> set1.difference(set2) </li>
                                <li> set1 - set2</li>
                                <span className="sstitle"> 세트 (합집합-교집합) </span>
                                <li> set1.symmetric_difference(set2) </li>
                                <li> set1 ^ set2</li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                                <span className="sstitle">  </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="딕셔너리(dictionary)"> 딕셔너리(dictionary) </a> </span>
                        <small> 키와 값으로 구분되는 리스트 </small>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> 딕셔너리 일반적인 형태 </span>
                                <li> dict1 = {"'키':값, '키':값"} </li>
                                <span className="sstitle"> 딕셔너리 생성하기 </span>
                                <li> dict1={"{}"} , 빈 딕셔너리 </li>
                                <li> dict() , 빈 딕셔너리 </li>
                                <span className="sstitle"> 딕셔너리 수정하기 </span>
                                <li> dict1[키] = 값 </li>
                                <li> dict1.update(키 = 값) </li>
                                <li> dict1.update(['키' , 값]) </li>
                                <span className="sstitle"> 딕셔너리 추가하기 </span>
                                <li> dict1[키] = 값 </li>
                                <li> dict1.setdefault('키':값) , 키와 값을 추가하기 </li>
                                <li> dict1.setdefault('키') , 값은 없는 키만 추가하기 </li>
                                <span className="sstitle"> 딕셔너리 제거하기 </span>
                                <li> del dict1[키] </li>
                                <span className="sstitle"> 딕셔너리 초기화 </span>
                                <li> dict1.clear() </li>
                                <span className="sstitle"> 딕셔너리 값 가져오기 </span>
                                <li> dict1.get(키) </li>
                                <span className="sstitle"> 리스트나 튜플로 딕셔너리 만들기  </span>
                                <li> dict1.fromkeys(리스트 혹은 튜플) , 키만 갖는 리스트로 만들어짐 </li>
                                <li> dict1.fromkeys(리스트 혹은 튜플, 값) </li>
                                <span className="sstitle"> 딕셔너리 키 목록 가져오기 </span>
                                <li> dict1.keys() </li>
                                <span className="sstitle"> 딕셔너리 값 목록 가져오기 </span>
                                <li> dict1.values() </li>
                                <span className="sstitle"> 딕셔너리 키와값을 튜플 목록으로 가져오기 </span>
                                <li> dict1.items() </li>
                                <span className="sstitle"> 딕셔너리 조회하기 ( return boolean ) </span>
                                <li> 키 in dict1 , 딕셔너리에 키가 존재하는지 확인 </li>
                                <span className="sstitle"> </span>
                                <li>  </li>
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="조건문"> 조건문 </a> </span>
                        <small> 띄어쓰기를 이용, 탭간격으로 구분 , 에러가 이런 부분에서 발생하므로 주의 </small>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> if, if-else, if-elif, if-elif-else </span>
                                <li> if 조건식: </li>
                                <li> elif 조건식: </li>
                                <li> else: </li>
                                {/* <span className="sstitle"> </span>
                                <li>  </li> */}
                            </ul>
                        </span>
                    </span>

                    <span className="mblock">
                        <span className="stitle"> <a name="반복문"> 반복문 </a> </span>
                        <span className="sblock">
                            <ul>
                                <span className="sstitle"> while , for </span>
                                <li> while 조건식: </li>
                                <li> for 사용할변수 in 리스트,튜플,문자열,세트,딕셔너리: </li>
                                <li> continue(조건이 맞으면 다음 인덱스로 넘어감), break(조건에 맞으면 반복문 종료) </li>
                                <span className="sstitle"> range() </span>
                                <li> for i in range(10) </li>
                                <span className="sstitle"> eumerate(리스트 등) </span>
                                <li> for i,j in enumerate(리스트 등) </li>
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
export default PtyhonStudy;

