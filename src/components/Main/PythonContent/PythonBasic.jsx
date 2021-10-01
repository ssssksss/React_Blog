import React from 'react';

const PythonBasic = (props) => {


    return (
        <>
            <div className="common_style">
                <ul>
                    <span className="lblock">
                        <span className="mtitle"> 파이썬 공부 </span>
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 설치
                                    <a name="설치" style={{ visibility: "hidden" }}> 설치 </a> </summary>
                                <span className="sblock">
                                    <li> <h4> vscode에 설치 </h4> </li>
                                    <li> vscode extension에 가서 Python, python for VSCode , Python Extension Pack 설치 </li>
                                    <li>  </li>
                                    <li>  </li>
                                    <li> <h4>  </h4> </li>
                                    <li>  </li>
                                    <li> <h4>  </h4> </li>
                                    <li>  </li>
                                </span>
                            </details>
                        </span>
                        {/*  */}

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ Python이란?
                                    <a name="Python이란?" style={{ visibility: "hidden" }}> Python이란? </a> </summary>
                                <span className="sblock">
                                    <li> <small> 인터프리터 언어 </small> </li>
                                    <li> <small> .py코드 실행 - 바이트 코드 상태 - PVM(파이썬 가상 머신) - 처리 </small> </li>
                                    <li> <small> 객체지향언어 지원 </small> </li>
                                    <li> <small> 자료형이 정해져 있지 않음, 변수를 따로 선언하지도 않음 </small> </li>
                                    <li> <small> 영상처리, 딥러닝 등 수학적인 내용이 들어갈때 자바보다 유리한것 같다.(numpy를 사용) </small> </li>
                                </span>
                            </details>
                        </span>
                        {/*  */}

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 출력메소드
                                    <a name="출력메소드" style={{ visibility: "hidden" }}> 출력메소드 </a> </summary>
                                <span className="sblock">
                                    <small> 메소드 - 문자열 메소드 참고 </small>
                                    <span className="sstitle"> 문자열 형식 </span>
                                    <li> %d(정수), %o(8진수) , %x(16진수), %f(실수), %s(문자열) </li>
                                    <span className="sstitle"> 이스케이프 문자 </span>
                                    <li> \' , \" , \n , \t , \\ , \b 등등 </li>
                                    <span className="sstitle"> print()함수 </span>
                                    <li>  print('hello') </li>
                                    <li>  print('hello', end='') , #줄을 바꾸지 않고 출력 </li>
                                    <li>  print('hello' + 'world') , 공백없음 </li>
                                    <li>  print('hello+"world"') , ""지워지지 않고 존재 </li>
                                    <li>  print('hello'+end='abc') , hello 끝에 abc추가 , 그리고 개행(new line)을 하지 않음</li>
                                    <li>  print('hello'+'world',sep='&nbsp;') , &nbsp;문자로 구분을 한다. </li>
                                    <li>  print('hello'+'world') </li>
                                    <li>  print('hello'+'world',file=sys.stdout) , 사용하면 모니터에 출력x? 확인필요 </li>
                                    <li>  print('hello'+'world',flush=false) ,  </li>
                                    <li>  pirnt('''asd asd asd''') , 여러줄을 줄바꿈 하여서 출력하기 </li>
                                    <li>  print(변수) ,변수 출력 </li>
                                    <li>  f=open('파일명.txt','w') , print('hello',file=f) , 텍스트 파일에 출력내용이 저장이 된다 </li>
                                    <li>  str1 = '%s는 %d원입니다' print(str1%(변수,변수))  </li>
                                    <li>  print('%d,%f,%s',(변수,변수,변수)) , 데이터 타입에 맞게 출력</li>
                                    <li>  print('%5d,%2.2f,%2s',(변수,변수,변수)) , 자릿수와 소수점을 고려한 출력방법 </li>
                                    <li>  print('%5d,%2.2',(변수,변수)) , 자릿수와 소수점을 고려한 출력방법</li>
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
                                        <li> print('hello'.rjust(10,"@")) , 글자수가 부족한 부분은 왼쪽에 특정문자로 채움 </li>
                                        <li> print('hello'.ljust(10,"@")) , 글자수가 부족한 부분은 우측에 특정문자로 채움 </li>
                                        <li> print('hello'.zfill(10) , 글자수가 부족한 부분은 왼쪽에 0으로 채움) </li>
                                        <li> print('hello'.capitalize() , 첫글자만 대문자) </li>
                                        <li> print('hello'.upper()) , 대문자로 변경 </li>
                                        <li> print('hello'.lower()) , 소문자로 변경 </li>
                                    </details>
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 주석
                                    <a name="주석" style={{ visibility: "hidden" }}> 주석  </a> </summary>
                                <span className="sblock">

                                    <span className="sstitle"> 한줄 주석 </span>
                                    <li> # </li>
                                    <span className="sstitle"> 여러줄 주석 </span>
                                    <li> ''' ''' 혹은  """ """ </li>

                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 자료형과 변수
                                    <a name="자료형과 변수" style={{ visibility: "hidden" }}>  자료형과 변수 </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 변수 </span>
                                    <li> 파이썬의 변수는 자료형을 따로 지정하지 않아도 변수의 값에 따라서 알아서 지정을 해준다.
                                        그러므로 대입연산자(=)를 사용해서 값만 넣어주면 변수가 생성이 된다. </li>
                                    <span className="sstitle"> 자료형  </span>
                                    <li> 정수(int), 실수(float), 논리(bool), 문자열,   </li>
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 문자열
                                    <a name="문자열" style={{ visibility: "hidden" }}> 문자열  </a> </summary>
                                <p> 문자열은 추가,중복,순서,정렬 등은 되지만 수정은 되지 않는다.  </p>
                                <span className="sblock">
                                    <span className="sstitle"> 인덱싱(indexing) </span>
                                    <li> 문자열[인덱스] </li>
                                    <li> 문자열[-인덱스]  # -1이 제일 뒷문자 </li>
                                    <span className="sstitle"> 슬라이싱(slicing) </span>
                                    <li> 문자열[start:end:step]  </li>
                                    <li> 문자열[start:end] </li>
                                    <li> 문자열[start:] </li>
                                    <li> 문자열[:end] </li>
                                    <span className="sstitle"> 문자열 길이(len) </span>
                                    <li> len(문자열)  </li>
                                    <span className="sstitle"> 여백공간제거(strip) </span>
                                    <li> 문자열.strip() </li>
                                    <span className="sstitle"> 특정기호로 구분하여 리스트로 반환(split) </span>
                                    <li> 리스트 = 문자열.split("특수문자,문자")  </li>
                                    <span className="sstitle"> 문자열 연산 </span>
                                    <li> 문자열3 = 문자열1 + 문자열2 </li>
                                    <li> 문자열3 = 문자열1 * 10 </li>
                                    <span className="sstitle"> 문자열 포맷팅 </span>
                                    <li> "%s" % ["문자열" | 문자열변수 ]</li>
                                    <li> "%d" % [숫자 | 숫자변수 ] </li>
                                    <li> "%s %d" % (["문자열" | 문자열변수 ], [숫자 | 숫자변수 ]) </li>
                                    <li> %c %s %d %f %o %x %%("%" 문자출력) </li>
                                    <li> %숫자s : 숫자만큼 좌측으로 공간을 비움 </li>
                                    <li> %0.숫자f : 소수점 몇 째 짜리까지 나타낼지 </li>
                                    <li> " {'{0}'} ".format(3) </li>
                                    <li> " {'{name}'} ".format(name=값) </li>
                                    <li> " {'{0:>10}'} ".format(3) # 우측정렬 공간 10칸 </li>
                                    <li> " {'{0:문자>10}'} ".format(3) # 우측정렬 공간 10칸 , 빈공간은 문자로 채움 </li>
                                    <span className="sstitle"> 문자열 함수 </span>
                                    <li> 문자열.replace("바꿀문자열","대체할문자열") </li>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                    <span className="sstitle">  </span>
                                    <li>  </li>
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 연산자
                                    <a name="연산자" style={{ visibility: "hidden" }}> 연산자  </a> </summary>
                                <span className="sblock">
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
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 입력메소드
                                    <a name="입력 메소드" style={{ visibility: "hidden" }}>  입력메소드 </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> input() </span>
                                    <li> 2.x 버전에서 입력값을 받아 판단하고 그에 맞게 자료형으로 초기화 </li>
                                    <li> 표준 입력 장치(키보드)로 입력받을 때 사용  </li>
                                    <li> raw_input() # 입력값을 문자열로만 받음, 2.x버전에서만 존재, 3.x에서는 사라짐  </li>
                                    <li> input('') 입력은 문자열로 반환하므로 다른 자료형은 형변환을 해야한다.  </li>
                                    <li> input('입력을 하시오 : ')  </li>
                                    <li> input().split() , 입력값을 띄어쓰기로 구분하여 저장  </li>
                                    <li> input().split(",") , 입력값을 "," 로 구분하여 저장  </li>
                                    <li> input().split(",")   </li>
                                    <li> str = input('')   </li>
                                    <li> x = int(input())   </li>
                                    <li> x = float(input())   </li>
                                    <li> x,y = map(int,input().split())   </li>
                                    <span className="sstitle"> import sys  </span>
                                    <li> a = sys.stdin # 여러줄 입력 </li>
                                    <li> a = sys.stdin.readline() # 한줄 입력 \n 개행문자 끝에 존재 </li>
                                    <li> a = sys.stdin.readline().strip() # 한줄 입력 , 앞뒤로 개행 문자 제거 </li>
                                    <li> x,y = map(int,sys.stdin.readline().split()) # 한줄 입력 \n 개행문자 끝에 추가됨 </li>
                                    <li> 혹시 알고리즘 문제를 풀다가 EOF, ValueError 문제가 생긴다면
                                        <li> for line in sys.stdin: # 이와 같이 사용해서 해결  </li>
                                    </li>
                                    <li>  </li>
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 리스트(list)
                                    <a name="리스트(list)" style={{ visibility: "hidden" }}> 리스트(list)  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 리스트 설명 </span>
                                    <span className="mblock">
                                        <li> 타입이 다르더라도 하나의 리스트에 저장 가능  </li>
                                        <li> {'{}'}기호를 이용하여 사용  </li>
                                    </span>
                                    <span className="sstitle"> 리스트와 문자열 </span>
                                    <span className="mblock">
                                        <li> 객체 = "".join(리스트) <small> # 리스트를 문자열로 반환 </small>  </li>
                                        <li> 객체 = "특수문자,문자".join(리스트) <small> # 리스트를 문자를 구분자로 사용하여 반환 </small>  </li>
                                    </span>
                                    <span className="sstitle"> 리스트 기타 </span>
                                    <span className="mblock">
                                        <li> len(리스트) <small> 리스트 길이 보기 </small> </li>
                                        <li> 리스트.count(요소) <small> 리스트의 요소의 갯수를 반환  </small> </li>
                                        <li> 리스트[인덱스1],리스트[인덱스2] = 리스트[인덱스2],리스트[인덱스1] <small> 리스트 SWAP </small> </li>
                                        <li> 요소 in 리스트 <small> 리스트에 요소가 있는지 확인 , boolean 값으로 반환 </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 위치 , 인덱싱,  </span>
                                    <span className="mblock">
                                        <li> 리스트.index(요소) <small> 리스트에서 맞는 요소 값의 위치 반환, 요소가 없으면 ValueError  </small> </li>
                                        <li> 리스트[인덱스]  <small> # 리스트 인덱싱(음수값도 지원) </small> </li>
                                        <li> 리스트[:인덱스] , 리스트[인덱스:] , 리스트[인덱스:인덱스] <small> 리스트 슬라이싱 </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 추가, 생성, 수정 </span>
                                    <span className="mblock">
                                        <li> 리스트1 = 리스트2 + 리스트3 <small> # +연산을 이용하여 리스트 합치기 </small> </li>
                                        <li> 리스트1 = 리스트2 * 5 <small> # *연산을 이용하여 리스트 여러개 추가하기 </small> </li>
                                        <li> 리스트[인덱스] = 값 , 리스트[-인덱스] = 값 <small> # 리스트 값 수정하기 </small> </li>
                                        <li> 리스트.append(요소) <small> # 리스트 뒤에 요소(값,리스트) 추가 </small> </li>
                                        <li> 리스트.update([리스트],값) <small> # 리스트 뒤에 여러 요소 추가 </small> </li>
                                        <li> 리스트.insert(a,b) <small> 리스트의 a번째에 b값을 넣는다, 남은 요소들 인덱스는 뒤로 밀린다.
                                            만약에 넣은 요소위치 앞쪽이 비어있으면 비어있는 공간을 제외하고 리스트의 제일 뒤에 추가한다. </small> </li>
                                        <li> 리스트.extend(리스트) <small> 기존 리스트에 리스트를 더해서 확장 </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 1차원 배열 만들기 </span>
                                    <span className="mblock">
                                        <li> 배열 = [0]*10 <small> # 1차원 배열 만들기 </small> </li>
                                        <li> 배열 = [[0] for i in range(10)] <small> # 연산을 이용하여 리스트 여러개 추가하기 </small> </li>
                                        <li> 배열 = [[0] for i in range(10) if 조건 ] <small> # 조건에 맞는 배열 생성 </small> </li>
                                        <li> 배열 = [값1,값2,값3] <small> 1차원 배열 만들기 </small> </li>
                                        <li> 배열 = [값1,값2,값3] <small>  </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 2차원 배열 만들기 </span>
                                    <span className="mblock">
                                        <li> 배열 = [[값1,값2,값3],[값1,값2,값3]] <small> 2차원 배열 만들기 </small> </li>
                                        <li className="col_r"> list = [0 * col] * row <small> 잘못된 2차원 배열 만들기 </small> </li>
                                        <li> list = [[0 for col in range(10) ] for row in range(10)] <small> 2차원 배열 만들기 </small> </li>
                                        <li> list = [[0 * col ] for row in range(10)] <small> 2차원 배열 만들기 </small> </li>
                                        <li>  <small>  </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 순서 </span>
                                    <span className="mblock">
                                        <li> 리스트.sort() <small> 리스트 정렬하기 , 반환값은 None , 원본이 바뀜 </small> </li>
                                        <li> 리스트.sort(reverse=True) <small> 리스트 역정렬하기 , 반환값은 None , 원본이 바뀜 </small> </li>
                                        <li> 리스트.reverse() <small> 리스트 순서 바꾸기 , 반환값은 None , 원본이 바뀜 </small> </li>
                                        <li> 리스트2 = sorted(리스트1) <small> 리스트를 정렬해서 반환, 깊은복사처럼 정렬됨 </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 삭제 </span>
                                    <span className="mblock">
                                        <li> del 리스트[인덱스] <small> 리스트 요소 삭제하기 </small> </li>
                                        <li> del 리스트[인덱스:] <small> 리스트 요소 슬라이싱 이용하여 삭제하기 </small> </li>
                                        <li> 리스트.remove(요소) <small> 리스트 제일 앞에 보이는 요소를 제거한다. </small> </li>
                                        <li> 리스트.pop() <small> 리스트 마지막 요소를 반환하고 삭제 </small> </li>
                                        <li> 리스트.pop(인덱스) <small> 리스트 인덱스 요소를 반환하고 삭제  </small> </li>
                                        <li> 리스트.clear() <small> 리스트 초기화, 빈 배열존재 </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 복사 </span>
                                    <span className="mblock">
                                        <li> 리스트1 = 리스트2.copy() <small> 리스트 깊은복사 </small> </li>
                                        <li> 리스트1 = 리스트2 <small> 리스트 얕은복사 </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 형변환 </span>
                                    <span className="mblock">
                                        <li> list1 = list(튜플) <small> 튜플을 리스트로 변환 </small> </li>
                                        <li> list1 = list(세트) <small> 세트를 리스트로 변환 </small> </li>
                                    </span>
                                    <span className="sstitle"> 리스트 중복 요소 </span>
                                    <span className="mblock">
                                        <li> 리스트2 = list(set(리스트)) <small> 리스트의 중복요소를 제거하고 리스트로 반환 </small> </li>
                                        <li> 리스트1 = list(set(리스트2).intersection(리스트3)) <small> 리스트2와 리스트3의 중복요소 반환 </small> </li>
                                        <li>  <small>  </small> </li>
                                    </span>
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  <small>  </small> </li>
                                    </span>
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 튜플(tuple)
                                    <a name="튜플(tuple)" style={{ visibility: "hidden" }}> 튜플(tuple) </a> </summary>
                                <small> 저장된 값을 수정,삭제 할 수 없는 리스트 </small>
                                <span className="sblock">
                                    <span className="sstitle"> 튜플 설명 </span>
                                    <span className="mblock">
                                        <li> {'()'}기호를 이용하여 사용 <small>  </small> </li>
                                        <li> 중복된 값을 허용하지 않음 <small>  </small> </li>
                                    </span>
                                    <span className="sstitle"> 튜플 인덱싱 </span>
                                    <span className="mblock">
                                        <li>  <small>  </small> </li>
                                        <li>  <small>  </small> </li>
                                    </span>
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  <small>  </small> </li>
                                    </span>
                                    <span className="sstitle"> 튜플의 일반적인 형태 </span>
                                    <li> tuple1 = (값,값,값) </li>
                                    <span className="sstitle"> 튜플 생성 </span>
                                    <li> tuple1 = () </li>
                                    <li> tuple1 = tuple() </li>
                                    <li> tuple1 = (값,) , (값)으로 하면 일반적인 값만 들어가서 튜플의 형태가 되지 않는다. </li>
                                    <span className="sstitle"> 튜플 인덱싱 </span>
                                    <li> 튜플[인덱스] </li>
                                    <span className="sstitle"> 튜플 슬라이싱 </span>
                                    <li> 튜플[인덱스:인덱스] </li>
                                    <span className="sstitle"> 튜플 길이 </span>
                                    <li> len(tuple1) </li>
                                    <span className="sstitle"> 튜플 덧셈 곱셈 </span>
                                    <li> tuple1+tuple2 , tuple1*2 </li>
                                    <span className="sstitle"> 튜플 swap </span>
                                    <li> tuple1,tuple2 = tuple2,tuple1 </li>
                                    {/* <span className="sstitle">  </span>
                                <li>  </li> */}

                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 세트(set)
                                    <a name="세트(set)" style={{ visibility: "hidden" }}> 세트(set) </a> </summary>
                                <small> 세트는 순서가 없지만 중복된 값이 저장이 되지 못하게 한다. </small>
                                <span className="sblock">

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
                                    {/* <span className="sstitle">  </span>
                                <li>  </li> */}

                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 딕셔너리(dictionary)
                                    <a name="딕셔너리(dictionary)" style={{ visibility: "hidden" }}> 딕셔너리(dictionary) </a> </summary>
                                <small> 키와 값으로 구분되는 리스트 , 요소의 타입이 문자인지숫자인지 섞어도 상관이 없다. </small>
                                <span className="sblock">

                                    <span className="sstitle"> 딕셔너리 일반적인 형태 </span>
                                    <li> dict1 = {"'키':값, '키':값"} </li>
                                    <span className="sstitle"> 딕셔너리 생성하기 </span>
                                    <li> dict1={"{}"} , 빈 딕셔너리 </li>
                                    <li> dict() , 빈 딕셔너리 </li>
                                    <span className="sstitle"> 딕셔너리 수정하기 </span>
                                    <li> dict1[키] = 값 </li>
                                    <li> dict1.update(키 = 값) </li>
                                    <li> dict1.update(['키' , 값]) </li>
                                    <span className="sstitle"> 딕셔너리에 요소 추가하기 </span>
                                    <li> dict1[키] = 값 </li>
                                    <li> dict1.setdefault('키':값) , 키와 값으로 요소 추가하기 </li>
                                    <li> dict1.setdefault('키') , 값은 없는 키만 있는 요소 추가하기 </li>
                                    <span className="sstitle"> 딕셔너리 제거하기 </span>
                                    <li> del dict1[키] </li>
                                    <span className="sstitle"> 딕셔너리 초기화 </span>
                                    <li> dict1.clear() </li>
                                    <span className="sstitle"> 딕셔너리 키 가져오기 </span>
                                    <span className="sblock">
                                        <li> max(딕셔너리,key=딕셔너리.get) #딕셔너리 값중에 최댓값을 가진 키를 반환 </li>
                                        <li> min(딕셔너리,key=딕셔너리.get) #딕셔너리 값중에 최솟값을 가진 키를 반환 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </span>
                                    <li> dict1.get(키) </li>
                                    <span className="sstitle"> 딕셔너리 값 가져오기 </span>
                                    <li> dict1.get(키) </li>
                                    <span className="sstitle"> 리스트나 튜플로 딕셔너리 만들기  </span>
                                    <li> dict객체 = dict.fromkeys(리스트 혹은 튜플) , 키만 갖는 리스트로 만들어짐 </li>
                                    <li> dict객체 = dict.fromkeys(리스트 혹은 튜플, 값) </li>
                                    <span className="sstitle"> 딕셔너리 키 목록 가져오기 </span>
                                    <li> dict1.keys() </li>
                                    <li> for 값 in dict1.keys(): 딕셔너리의 키가 일치하면 반복문 실행 </li>
                                    <span className="sstitle"> 딕셔너리 값 목록 가져오기 </span>
                                    <li> dict1.values() </li>
                                    <li> for 값 in dict1.values(): 딕셔너리의 값이 일치하면 반복문 실행 </li>
                                    <span className="sstitle"> 딕셔너리 키와값을 튜플 목록으로 가져오기 </span>
                                    <li> dict1.items() </li>
                                    <span className="sstitle"> 딕셔너리 조회하기 ( return boolean ) </span>
                                    <li> 키 in dict1 , 딕셔너리에 키가 존재하는지 확인 </li>
                                    <span className="sstitle"> </span>
                                    <li>  </li>

                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 조건문
                                    <a name="조건문" style={{ visibility: "hidden" }}> 조건문 </a> </summary>
                                <small> 띄어쓰기를 이용, 탭간격으로 구분 , 에러가 이런 부분에서 발생하므로 주의 </small>
                                <span className="sblock">
                                    <span className="sstitle"> if, if-else, if-elif, if-elif-else </span>
                                    <li> if 조건식: </li>
                                    <li> elif 조건식: </li>
                                    <li> else: </li>
                                    <span className="sstitle"> 삼항 연산 </span>
                                    <li> 변수 = 참값 if 조건값 else 거짓값 , 조건값이 참값과 일치하면 참값 반환, 틀리면 거짓값 반환</li>
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 반복문
                                    <a name="반복문" style={{ visibility: "hidden" }}> 반복문 </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> while , for </span>
                                    <li> while 조건식: </li>
                                    <li> for 사용할변수 in 리스트,튜플,문자열,세트,딕셔너리: </li>
                                    <li> continue(조건이 맞으면 다음 인덱스로 넘어감), break(조건에 맞으면 반복문 종료) </li>
                                    <span className="sstitle"> range() </span>
                                    <li> range(10) ※0~9까지  </li>
                                    <li> range(5,10) ※5~9까지  </li>
                                    <li> range(1,10,3) ※1,4,7 간격이 3만큼씩  </li>
                                    <li> for i in range(10 혹은 변수)  </li>
                                    <span className="sstitle"> eumerate(리스트 등) </span>
                                    <li> for i,j in enumerate(리스트 등) </li>
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 메소드
                                    <a name="메소드" style={{ visibility: "hidden" }}>  메소드 </a> </summary>
                                <span className="sblock">

                                    <span className="sstitle"> 문자열 메소드 </span>
                                    <span className="mblock">
                                        <li> .format() : 문자열 정렬,  </li>
                                        <span classname="sblock">
                                            <li> '1:{'{ }'}, 2:{'{ }'}'.format(x,y); #순서대로 넣기</li>
                                            <li> '1:{'{0}'}, 2:{'{1}'}'.format(x,y); #순서 지정해서 넣기</li>
                                            <li> '1:{'{0}'}, 2:{'{0}'}', 3:{'{1}'}'.format(x,y); #중복해서 넣기</li>
                                            <li> '1:{'{1}'}, 2:{'{0}'}'.format(x,y); #순서 바꿔서 넣기</li>
                                            <li> '1:{'{0}'}'.format('text'); #문자열로 넣기</li>
                                            <li> '1:{'{x}'}'.format(x=123); #이름으로 넣기</li>
                                            <li> '1:{'{0}'}', 중괄호출력:{'{{}}'} .format('test'); #중괄호 출력하기 </li>
                                            <li> '중괄호출력:{'{{0}}'}'.format(1234); #중괄호 출력하기 </li>
                                            <li> '좌측정렬 : {'{0:<10}'}'.format('left') </li>
                                            <li> '우측정렬 : {'{0:>10}'}'.format('right') </li>
                                            <li> '중간정렬 : {'{0:^10}'}'.format('center') </li>
                                            <li> '여백정렬 : {'{0:@<10}'}'.format('center') #여백에 다른 문자(@대신 아무거나)를 채워서 정렬 </li>
                                            <li> '정수표현 : {'{0:05d}'}'.format(123) #00123 정수의 자릿수가 부족하면 채워짐  </li>
                                            <li> '소수표현 : {'{0:0.3f}'}'.format(1.123456) #1.123 소수점 표현, 소수점 자리가 남으면 0으로 표현 </li>
                                        </span>
                                        <li> 변수 = 문자열.count() : 문자열의 갯수 </li>
                                        <li> 문자열.find("abc") : "abc" 문자를 문자열 앞에서 찾기 ,없다면 -1 리턴 </li>
                                        <li> 문자열.rfind("abc") : "abc" 문자를 문자열 뒤에서 찾기 ,없다면 -1 리턴 </li>
                                        <li> 문자열.index() : 특정문자열의 위치 찾기 ,없다면 에러 발생 </li>
                                        <li> 문자열.upper() : 모두 대문자로 변환 </li>
                                        <li> 문자열.lower() : 모두 소문자로 변환 </li>
                                        <li> 문자열.capitalize() : 첫글자만 대문자로 변환 </li>
                                        <li> 문자열 = "".join('123','456') 혹은 "".join('문자배열') : 여러문자열을 하나의 문자열로 합쳐서 반환  </li>
                                        <li> 문자열 = "_(구분자)".join('123','456')  : 여러문자열을 "_"(구분자)로 구분하여 하나의 문자열로 합쳐서 반환  </li>
                                        <li> 문자열.split(sep='구분자', maxsplit=분할횟수) #문자열을 구분자로 잘라서 리스트로 반환 </li>
                                        <li> 문자열.replace(old,new,[count]) #변경하고 싶은 문자를 바꾸는 메소드 </li>
                                        <li> 문자열.[rstrip('문자열') | lstript('문자열') | stript('문자열') ] #불필요한 공백, 문자열 제거 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </span>

                                    <span className="sstitle"> 사용자 정의 메소드 </span>
                                    <span className="mblock">
                                        <li> def 메소드명(매개변수): </li>
                                        <li> &nbsp;코드작성 </li>
                                        <li> &nbsp;return 반환값 <small> 리턴은 필수가 아님 </small> </li>
                                    </span>

                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 라이브러리,패키지,모듈
                                    <a name="라이브러리,패키지,모듈" style={{ visibility: "hidden" }}> 라이브러리,패키지,모듈  </a> </summary>
                                <span className="sblock">
                                    <small> 패키지 : 특정 기능과 여러 모듈을 하나의 폴더에 보관 </small> <br />
                                    <small> 라이브러리 : 모듈과 패키지를 묶은 단위 </small> <br />
                                    <small> 모듈 : 함수,변수,클래스 등이 묶인 단위 </small> <br />
                                    <small> 선언 : import.패키지명.모듈명 , import 모듈명 , from 모듈명 import 함수명1,함수명2,
                                        from 모듈 import *, import 모듈명 as 별명 </small> <br />

                                    <details>
                                        <summary className="sstitle"> ▶ calculator (수학 함수) </summary>
                                        <span className="sstitle">  </span>
                                        <span className="mblock">
                                            <li> add(x,y) : 덧셈 </li>
                                            <li> subtract(x,y) : 뺄셈 </li>
                                            <li> multiple(x,y) : 곱셈 </li>
                                            <li> divide(x,y) : 나눗셈 </li>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary className="sstitle"> ▶ numpy (수학 관련 모듈) </summary>
                                        <span className="sstitle">  </span>
                                        <span className="mblock">
                                            <li>  </li>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary className="sstitle"> ▶ math (수학 관련)  </summary>
                                        <span className="mblock">
                                            <li> round(값,소수점몇번째까지살리는위치) : 반올림 </li>
                                            <li> sqrt(@) : 제곱근, 루트 </li>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary className="sstitle"> ▶ datatime (날짜) </summary>
                                        <span className="sstitle">  </span>
                                        <span className="mblock">
                                            <li>  </li>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary className="sstitle"> ▶ os (운영체제) </summary>
                                        <span className="sstitle">  </span>
                                        <span className="mblock">
                                            <li>  </li>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary className="sstitle"> ▶ random (랜덤) </summary>
                                        <span className="sstitle">  </span>
                                        <span className="mblock">
                                            <li>  </li>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary className="sstitle">  </summary>
                                        <span className="sstitle">  </span>
                                        <span className="mblock">
                                            <li>  </li>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary className="sstitle">  </summary>
                                        <span className="sstitle">  </span>
                                        <span className="mblock">
                                            <li>  </li>
                                        </span>
                                    </details>
                                    {/*  */}
                                    <details>
                                        <summary className="sstitle">  </summary>
                                        <span className="sstitle">  </span>
                                        <span className="mblock">
                                            <li>  </li>
                                        </span>
                                    </details>
                                    {/*  */}

                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 파일 관련
                                    <a name="파일 관련" style={{ visibility: "hidden" }}> 파일 관련 </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 파일 읽기 (확인 필요) </span>
                                    <span className="mblock">
                                        {/* 이거 실행해봐야함.. 뭔지 아직 잘 모름 */}
                                        <li> with open('주소','r') as f: </li>
                                        <li> for line in f: </li>
                                        <li> print(line) </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 파일 쓰기 </span>
                                    <span className="mblock">
                                        <li> with open('파일주소.txt','w') as f:   #txt파일에 내용 덮어쓰기 </li>
                                        <li>  f.write("Hello world\n") </li>
                                        <li>  </li>  <br />
                                        <li> with open('파일주소.txt','a') as f    #txt파일에서 내용 추가하기 </li>
                                        <li>  f.write("Hello world\n") </li>
                                    </span>
                                    {/*  */}
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 데코레이터 함수
                                    <a name="데코레이터 함수" style={{ visibility: "hidden" }}> 데코레이터 함수 </a> </summary>
                                <span className="sblock">
                                    <small> 기존 함수를 바꾸지 않고 추가적으로 코드를 작성하여 사용하거나 반환 </small>
                                    <span className="sstitle"> 사용방법1 </span>
                                    <span className="mblock">
                                        <small> 함수1에다가 코드를 추가 작성하여 함수2로 만드는 방법 기존코드는 수정하지 않고 만들어냄 </small>
                                        <li> def deco_func(함수명1) </li>
                                        <li> &nbsp;def deco_new_func(): </li>
                                        <li> &nbsp;&nbsp;함수명1() 혹은 코드작성 </li>
                                        <li> &nbsp;return deco_new_func </li> <br />
                                        <li> 함수명2 = deco_func(함수명1) </li>
                                        <li> 함수명2()  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> @을 이용한 사용방법2 </span>
                                    <span className="mblock">
                                        <small> 함수명1()에 함수명2()가 들어가서 새로운 함수를 만들어내는 방법 </small>
                                        <li> def deco_func(함수명1) </li>
                                        <li> &nbsp;def deco_new_func(): </li>
                                        <li> &nbsp;&nbsp;함수명1() 혹은 코드작성 </li>
                                        <li> &nbsp;return deco_new_func </li> <br />
                                        <li> @deco_func </li>
                                        <li> def 함수명2():  </li>
                                        <li> &nbsp;코드작성  </li>
                                        <li> 함수명2()  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 람다(lambda,익명함수)
                                    <a name="람다(lambda,익명함수)" style={{ visibility: "hidden" }}> 람다(lambda,익명함수) </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 사용방법 </span>
                                    <span className="mblock">
                                        <li> 정의 : lam1 = lambda 변수,변수,변수 :range(변수,변수,변수) </li>
                                        <li> 사용 : lam1(1,10,2) , 1~10까지 2의 간격으로 반환 </li>
                                        <li> 정의 : lam2 = lambda 변수 :변수[-1] </li>
                                        <li> 사용 : sorted(리스트,lam2 = lambda n:n[-1]) , 역순으로 정렬? </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 클래스
                                    <a name="클래스" style={{ visibility: "hidden" }}> 클래스 </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 클래스 생성자 정의 및 사용 </span>
                                    <small> 멤버변수를 따로 선언할 필요는 없고 생성자로 만들면 사용이 되는것 같다. </small>
                                    <span className="mblock">
                                        <li> class 클래스명: </li>
                                        <li> &nbsp;def initialize(self,매개변수1,매개변수2): </li>
                                        <li> &nbsp;&nbsp;self.멤버변수1 = 매개변수1 </li> <br />
                                        <li> &nbsp;&nbsp;self.멤버변수2 = 매개변수2</li> <br />
                                        <li> 변수 = 클래스명() </li>
                                        <li> 변수.initialize(매개변수1,매개변수2) </li>
                                        <li> print(변수.멤버변수1, 변수.멤버변수2) </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ 형변환
                                    <a name="형변환" style={{ visibility: "hidden" }}> 형변환 </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 형변환 </span>
                                    <span className="mblock">
                                        <li> float(5) </li>
                                        <li> int(5.0) </li>
                                        <li> str(5) </li>
                                        <li> hex(5) </li>
                                        <li> oct(5) </li>
                                        <li> bin(2) </li>
                                        <li> tuple([5,5])  # 리스트를 튜플로 </li>
                                        <li> list((5,5)) # 튜플을 리스트로 </li>
                                        <li> set([5,5]) #리스트를 집합 데이터형으로 바꿈 </li>
                                        <li> dict([[5,5]]) # 쌍으로 존재할 때 만 딕셔너리로 </li>
                                        <li> chr(숫자) # 아스키코드로  </li>
                                        <li> ord("문자")  # 아스키코드로 </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▷ _(언더바) 사용
                                    <a name="_(언더바) 사용" style={{ visibility: "hidden" }}> _(언더바) 사용 </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 사용방법 </span>
                                    <span className="mblock">
                                        <li> <h4> 반복문 인덱스 용도 </h4> , _ 는 인덱스 값을 가지지 않음
                                            <li> for _ in range(10):
                                                <li> print('test') </li>
                                            </li>
                                        </li>
                                        <li> <h4> 값 무시 용도 </h4>
                                            <li> a,b,_,c = 1,2,3,4 </li>
                                            <li> print(a) print(b) print(c) # 1,2,4 출력 </li>
                                        </li>
                                        <li> <h4> 자릿수 표기 용도 </h4>
                                            <li> num = 100_000_000 </li>
                                            <li> print(num) # 100000000 출력 </li>
                                        </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>

                        <span className="mblock">
                            <details>
                                <summary className="stitle"> numpy 모듈
                                    <a name="" style={{ visibility: "hidden" }}> ▷  </a> </summary>
                                <span className="sblock">
                                    <span className="sstitle"> 설명 </span>
                                    <span className="mblock">
                                        <li> <a href="https://numpy.org/doc/stable/index.html" target="_blank"
                                            rel="noopener noreferrer"> numpy 공식 사이트 </a> </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 사용 </span>
                                    <span className="mblock">
                                        <li> import numpy as np # 선언 </li>
                                        <li> arr1 = np.array(배열) # array 정의 </li>
                                        <li> arr1 = np.array(2ckdnjs배열) # array 정의 </li>
                                        <li> arr1.shape # array 행과 열 조회 </li>
                                        <li> arr1.dtype # array 자료형 조회 </li>
                                        <li> np.zeros(10) # 1행 10열 0 요소를 가진 1차원 array </li>
                                        <li> np.zeros((10,10)) # 10행 10열 0 요소를 가진 2차원 array </li>
                                        <li> np.ones(1) </li>
                                        <li> np.ones((10,10)) </li>
                                        <li> np.arange(10) # 0~9 까지  </li>
                                        <li> np.arange(1,10) # 1~9 까지  </li>
                                        <li> arr1 + arr2 , np.add(arr1,arr2) # 행열의 각 요소끼리 덧셈 </li>
                                        <li> arr1 - arr2 , np.subtract(arr1,arr2) # 행열의 각 요소끼리 뺄셈 </li>
                                        <li> arr1 * arr2 , np.multiply(arr1,arr2) # 행열의 각 요소끼리 곱셈 </li>
                                        <li> arr1 / arr2 , np.dividev(arr1,arr2) # 행열의 각 요소끼리 나눗셈 </li>
                                        <li> arr1 = 2행 2열 , arr2 = 1행 2열 (브로드 캐스트)
                                            <li> arr1 + arr2 # arr2가 행을 1개 확장하여 계산 </li>
                                            <li> arr1 - arr2 # arr2가 행을 1개 확장하여 계산 </li>
                                            <li> arr1 * arr2 # arr2가 행을 1개 확장하여 계산 </li>
                                            <li> arr1 / arr2 # arr2가 행을 1개 확장하여 계산 </li>
                                        </li>
                                        <li> arr1 * 10 # 각요소의 곱셈 </li>
                                        <li> arr1 ** 2 # 각요소의 제곱 </li>
                                        <li> arr1[1] #인덱스 조회 </li>
                                        <li> arr1[1:10] # 슬라이싱 </li>
                                        <li> arr1[:10]  0부터 9까지 </li>
                                        <li> arr1[1:] # 1부터 끝까지 </li>
                                        <li> arr1[:] #모든 요소 </li>
                                        <li> arr1[1,1] #2차원 인덱싱 </li>
                                        <li> arr1[1,:] #2차원 1행 모든열 슬라이싱 </li>
                                        <li> arr1[:,1] #2차원 모든행 1열 슬라이싱 </li>
                                        <li> np.random.rand(10,10) # 0~1 의 난수를 발생시킨다. , 10행 10열 </li>
                                        <li> np.random.randn(10,10) # 기대값 0, 표준편차 1의 가우시안 정규분포를 따르는
                                            난수를 발생시킨다. , 10행 10열 </li>
                                        <li> mask1 = ( arr1 == '값') # arr1에서 조건에 맞는 값들에 대한 boolean 값을 리턴 </li>
                                        <li> arr1[arr2 == '값', : ] # arr1에서 arr2 조건에 맞는 행을 출력 </li>
                                        <li> arr1[ (arr2 == '값') | (arr2 == '값') , :  ] # arr1에서 arr2 조건에 맞는 행을 출력 </li>
                                        <li> arr1[arr1[ (arr2 == '값') ] {'>'} 0, : ]  </li>
                                        <li> np.abs(arr1) </li>
                                        <li> np.sqrt(arr1) , arr1 ** 0.5 # 음수를 제곱근 하면 경고 발생, nan 출력 </li>
                                        <li> np.square(arr1) , arr1 ** 2 </li>
                                        <li> np.exp(arr1) </li>
                                        <li> np.log(arr1) # 자연로그 ln , log<sub>e</sub> </li>
                                        <li> np.log10(arr1) # 상용로그 log<sub>10</sub> </li>
                                        <li> np.log2(arr1) # 상용로그 log<sub>2</sub> </li>
                                        <li> np.sign(arr1) # +는 1, -는 -1 , 0은 0 </li>
                                        <li> np.isnan(arr1) # nan이면 True , 아니면 False </li>
                                        <li> np.isinf(arr1) # 무한대이면 True , 아니면 False </li>
                                        <li> np.ceil(arr1) # 1번째 자리에서 올림 </li>
                                        <li> np.floor(arr1) # 1번째 자리에서 내림 </li>
                                        <li> np.sin(arr1) </li>
                                        <li> np.sinh(arr1) </li>
                                        <li> np.cos(arr1) </li>
                                        <li> np.cosh(arr1) </li>
                                        <li> np.tan(arr1) </li>
                                        <li> np.tanh(arr1) </li>
                                        <li> np.maximum(arr1,arr2) # arr1,arr2 배열에서 최댓값 출력 </li>
                                        <li> np.minimum(arr1,arr2) # arr1,arr2 배열에서 최솟값 출력 </li>
                                        <li> np.sum(arr1) # 모든 요소 합 </li>
                                        <li> np.sum(arr1, axis=0) #각 열의 합 </li>
                                        <li> np.sum(arr1, axis=1) #각 행의 합</li>
                                        <li> np.mean(arr1) # 평균값 출력 </li>
                                        <li> np.std(arr1) # 표준편차 </li>
                                        <li> np.var(arr1) # 분산 </li>
                                        <li> np.min(arr1) # 최댓값 </li>
                                        <li> np.max(arr1) # 최솟값 </li>
                                        <li> np.argmin(arr1) # arr1의 최솟값 인덱스 반환 </li>
                                        <li> np.argmax(arr1) # arr1의 최댓값 인덱스 반환 </li>
                                        <li> np.cumsum(arr1) # 첫항부터 누적합을 계산 </li>
                                        <li> np.cumprod(arr1) # 첫항부터 누적곱을 계산 </li>
                                        <li> np.sort(arr1) #오름차순 정령 </li>
                                        <li> np.sort(arr1)[::-1] #내림차순 정령 </li>
                                        <li>  </li>
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>

                        <div className='mblock'>
                            <details>
                                <summary className='stitle'> 판다스 문법
                                    <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                                <div className='sblock'>
                                    <div className='sstitle'>  </div>
                                    <div className='mblock'>
                                        <li> row_df = pd.DataFrame(['a','b','c','d'], axis=0) # axis=0은 아래로 추가, 디폴트값 </li>
                                        <li> row_df = pd.DataFrame(['a','b','c','d'], axis=0) # axis=1은 우측으로 추가 </li>
                                        <li> column_df = pd.DataFrame([['a','b','c','d']]) </li>
                                        <li> column_df = pd.DataFrame([['a','b','c','d']], columns=['A','B','C','D']) </li>
                                        <li> df2 = pd.concat([데이터프레임1,데이터프레임2]) </li>
                                        <li> df2.append(데이터프레임3,ignore_index=True) </li>
                                        <li> df4 = {'{'} 'A':'n1', 'B':'n2', 'C':'n3', 'D':'n4' {'}'} </li>
                                        <li> df2.append(df4, ignore_index=True) # 딕셔너리형태로 데이터프레임에 넣으려면 인덱스가 필요 </li>
                                        <li> df.  RangeIndex(start=0, stop=10, step=1) </li>
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
export default PythonBasic;

