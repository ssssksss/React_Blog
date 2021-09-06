import React, { useEffect, useRef } from 'react';

const CTBaekJoon = (props) => {

  function logit() {

    //위치 계산
    let elementHeight1 = document.getElementsByClassName('navMenu')[0].scrollHeight;
    let elementHeight2 = document.getElementsByClassName('navMenu')[0].scrollHeight +
      document.getElementsByClassName('navMenu2')[0].scrollHeight + 26;
    let testdis = document.getElementsByClassName('common_style')[0].getBoundingClientRect().left
      - document.getElementsByClassName('lblocknav_container')[0].getBoundingClientRect().left;
    // console.log(window.outerHeight);


    // 좌측 메뉴 이동 + 작은 버튼
    if (window.innerWidth < 1024) {
      blockRef.current[0].style.position = 'fixed';
      document.documentElement.scrollTop < elementHeight1 ?
        blockRef.current[0].style.top = elementHeight1 + "px" :
        blockRef.current[0].style.top = "10px";
      blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
      blockRef.current[0].style.maxWidth = '420px';
      blockRef.current[1].style.left = '25%';
      blockRef.current[0].style.height = window.outerHeight;
      blockRef.current[0].style.display === 'inline-block' ?
        document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none' :
        document.getElementsByClassName('lblocknav_btn')[0].style.display = 'inline-block';
    }
    // 좌측 메뉴 이동
    else if (document.documentElement.scrollTop < elementHeight2 && window.innerWidth > 1023) {
      // 좌측 메뉴 위치 고정, 보여주기 , 간격은 사이값
      blockRef.current[0].style.position = 'fixed';
      blockRef.current[0].style.top = elementHeight2 + "px";
      blockRef.current[0].style.display = 'inline-block';
      blockRef.current[0].style.maxWidth = testdis + "px";
      blockRef.current[0].style.height = window.outerHeight;
      blockRef.current[0].style.left = document.getElementsByClassName('navMenu2')[0].getBoundingClientRect().left + "px";
      // 좌측에 메뉴가 생기므로 메인 메뉴를 왼쪽에서 이동시킴
      blockRef.current[1].style.left = '25%';
      document.getElementsByClassName('lblocknav_btn')[0].style.display = 'none';
    }
    else if (document.documentElement.scrollTop > elementHeight2 && window.innerWidth > 1023) {
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
            <a href="#main" className="col_b"> <b> 사이드 메뉴 설명 </b> </a>
            <button className="lblocknav_btn2" onClick={() => {
              document.getElementsByClassName('lblocknav_btn')[0].style.display = 'block';
              document.getElementsByClassName('lblocknav_container')[0].style.display = 'none';
            }}> ❌ </button>
          </span>
          <div className="hyperlink">
            <details open>
              <summary> 목록 </summary>
              <details open>
                <summary className="col_g"> 세부 목록 </summary>
                <a href="#" className="col_p">  </a>
                {/* <a href="#" className="col_p"> </a> */}
              </details>
            </details>
          </div>
        </div>
      </div>
      <div className="common_style" ref={(elem) => (blockRef.current[1] = elem)} >
        <ul>
          <span className="lblock">
            <span className="mtitle"> 백준 문제 </span>
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 0 - 1000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 1001 - 2000 </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 2001 - 3000 </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 3001 - 4000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 4001 - 5000  </summary>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ 4377 번 - Tight words(영문) </summary>
                  <span className="sblock">
                    <li> <h3> 문제(번역) </h3>
                      <li> 1~k ({'0 <= k <= 9'}) 의 알파벳이 있다. </li>
                      <li> n의 길이를 가진 단어에서 2개의 이웃한 문자가 1이하인
                        단어를 tight word라고 한다. </li>
                      <li>  </li>
                    </li>
                    <li> <h3> 입력(문제 조건) (번역) </h3>
                      <li> 연속으로 줄에 입력하는데 , 각 라인은 2가지의 정수숫자를 포함한다. </li>
                      <li> k n ({'1 <= n <= 100'}) </li>
                    </li>
                    <li> <h3> 출력 (번역) </h3>
                      <li> 입력값에 대하여 각 줄에 tight한 word가 나타날 확률을
                        소수점 5자리숫자까지 확률로 출력하라 </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li> 전체 경우의 수는 k^n 최대경우의수는 9^100 </li>
                      <li> 양 옆에 자릿수가 1이하의 차이가 나야한다.  </li>
                      <li> 트리구조인것 같은데..  </li>
                      <li> 자릿수의 값이 0이거나 k이면 다음에 올수 있는 자릿수는 2가지이다.  </li>
                      <li> 자릿수의 값이 0,k 가 아니면 다음에 올수 있는 자릿수는 3가지이다.  </li>
                      <li> arr[n][k] : (n+1)자리에서 k의 값을 가질때 이전의 자릿수의 값과 비교해서
                        tight word조건을 만족할 수 있는 값의 경우의 수(말로 설명하기가 어렵다..)  </li>
                      <li> k=2 n=5 예시를 들어보겠다.
                        <span className="mblock">
                          <li> {'0<=k<=2 , n은 5자리의 숫자 , '} 가로줄은 n번째 자릿수 , <br /> 세로줄은
                            k의 값이 n번째 자릿수에 올 수 있는 경우의 수를 보여준다. </li>
                          <li> # 0  1 2 </li>
                          <li> 1 1  1 1 </li>
                          <li> 2 2  3 2</li>
                          <li> 3 5  7 5</li>
                          <li> 4 12 17 12</li>
                          <li> 5 29 41 29 </li>
                          <li> <h4> 결과 : </h4>
                            <li> 29+41+29 = 99 , 99/243 = 40.74074 </li>
                          </li>
                        </span>
                      </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li> import sys </li>
                          <li> for line in sys.stdin:
                            <li> k, n = map(int, line.split()) </li>
                            <li> array = [[0]*(k+1) for i in range(n)] </li>
                            <li>                     for i in range(k+1):
                              <li> array[0][i] = 1 </li>
                            </li>
                            <li> if k != 0:
                              <li> for i in range(1, n):
                                <li> for j in range(k+1):
                                  <li> array[i][j] = array[i-1][j]+array[i-1][j+1] </li>
                                </li>
                                <li> elif j == k:
                                  <li> array[i][j] = array[i-1][j]+array[i-1][j-1] </li>
                                </li>
                                <li> else:
                                  <li> array[i][j] = array[i-1][j-1]+array[i-1][j]+array[i-1][j+1] </li>
                                </li>
                              </li>
                            </li>
                            <li> elif k == 0:
                              <li> for i in range(n):
                                <li> array[i][k] = 1 </li>
                              </li>
                            </li>
                            <li> print('%0.5f' % (sum(array[n-1])/pow(k+1, n)*100)) </li>
                          </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C++ </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                    </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶  번 -  </summary>
                  <span className="sblock">
                    <li> <h3> 문제 </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li>   </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C++ </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                    </li>
                  </span>
                </details>
                {/*  */}
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 5001 - 6000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 6001 - 7000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 7001 - 8000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 8001 - 9000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 9001 - 10000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 10001 - 11000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 11001 - 12000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 12001 - 13000  </summary>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶ 12002 번 - Field Reduction (Silver) </summary>
                  <span className="sblock">
                    <li> <h3> 문제 </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li>   </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C++ </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                    </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶  번 -  </summary>
                  <span className="sblock">
                    <li> <h3> 문제 </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li>   </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C++ </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                    </li>
                  </span>
                </details>
                {/*  */}
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 13001 - 14000  </summary>
                <details>
                  <summary className="sstitle"> ▶ 13395 번 - 팬린드롬 행렬 </summary>
                  <span className="sblock">
                    <li> <h3> 문제 </h3>
                      <li> N행 M열로 이루어진 행렬 A </li>
                      <li> N,M 은 짝수, 행렬의 각 원소는 0 또는 1 </li>
                      <li> 행렬의 행은 1번부터 N번까지 번호가 매겨져 있음 </li>
                      <li> 행렬의 열은 1번부터 M번까지 번호가 매겨져 있음 </li>
                      <li> 팰린드롬이란? 앞에서 읽으나 뒤에서 읽으나 똑같은 번호를 가진 행렬 </li>
                      <li> 행렬 A의 일부 행과 열은 팰린드롬이다. </li>
                      <li> 행렬 A와 두 정수 R과 C가 주어진다. </li>
                      <li> 행렬 A의 팰린드롬 행의갯수는 최소 R개 , 열의 갯수는 최소 C개가 되어야 한다. </li>
                      <li> 위 조건을 만족시키기 위해 바꾸어야하는 행렬 A의 원소의 갯수를 구하는 프로그램을 작성하라. </li>
                      <li> 원소를 바꾼다는 의미는 0을 1로 1을 0으로 바꾼다는 의미이다. </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li> 첫째 줄에 N M R C 입력 (2 ≤ N, M ≤ 14, N과 M은 짝수, 0 ≤ R ≤ N, 0 ≤ C ≤ M ) </li>
                      <li> 둘째 줄부터 N개의 줄에 행렬 A의 원소가 1행 부터 순서대로 주어진다. </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li> 위의 조건을 만족하게 끔 행렬 A의 원소를 최소한으로 바꾸어야 하는 갯수를 출력 </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li> 1. 25분초과 </li>
                      <li> 2. 펠린드롬을 만족하는 행과열의 합은 홀수 일수는 없다. </li>
                      <li> 3.  </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C++ </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                    </li>
                  </span>
                </details>
                {/*  */}
                <details>
                  <summary className="sstitle"> ▶  번 -  </summary>
                  <span className="sblock">
                    <li> <h3> 문제 </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li>  </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li>   </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                      <details>
                        <summary className="sstitle"> ▶ C++ </summary>
                        <span className="mblock">
                          <li>  </li>
                          <li>  </li>
                        </span>
                      </details>
                    </li>
                  </span>
                </details>
                {/*  */}
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 14001 - 15000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 15001 - 16000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 16001 - 17000  </summary>
              </details>
            </span>
            {/*  */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 17001 - 18000  </summary>
              </details>
            </span>
            {/*  */}
          </span>
        </ul>
      </div>
    </>
  );
}

export default CTBaekJoon;


{/*
<details>
    <summary className="sstitle"> ▶  번 -  </summary>
    <span className="sblock">
        <li> <h3> 문제 </h3>
            <li>  </li>
        </li>
        <li> <h3> 입력(문제 조건) </h3>
            <li>  </li>
        </li>
        <li> <h3> 출력 </h3>
            <li>  </li>
        </li>
        <li> <h3> 풀이 방법 - 생각 </h3>
            <li>   </li>
        </li>
        <li> <h3> 정답 코드 </h3>
            <details>
                <summary className="sstitle"> ▶ Python </summary>
                <span className="mblock">
                    <li>  </li>
                    <li>  </li>
                </span>
            </details>
            <details>
                <summary className="sstitle"> ▶ C </summary>
                <span className="mblock">
                    <li>  </li>
                    <li>  </li>
                </span>
            </details>
            <details>
                <summary className="sstitle"> ▶ C++ </summary>
                <span className="mblock">
                    <li>  </li>
                    <li>  </li>
                </span>
            </details>
        </li>
    </span>
</details>

*/}