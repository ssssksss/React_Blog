import React from 'react';

const CTBaekJoon = (props) => {

  return (
    <>
      <div className="common_style">
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
                    <li> <h3> 문제 (번역) </h3>
                      <li> 농장에 소가 N마리 ({'5<=N<=50000'})는 2차원적인 영역에 있다. </li>
                      <li> 농부는 소들을 x,y축 평행한 울타리로 막기를 원하고,  </li>
                      <li> 가능한 작게 모든 소를 포함시키기를 원한다. ( 경계의 소들도 가능하다.) </li>
                      <li> 그래서 최대 3마리의 소를 팔려고 한다.  </li>
                      <li> 소는 점으로 생각하고 , 울타리는 수평이고 수직인 직선으로 구성되어 있다.  </li>
                      <li>  </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li> 1번째 줄에는 N(소의 숫자)을 입력한다, </li>
                      <li> 그 다음줄에는 구체적인 소의 위치(x,y)를 입력한다. </li>
                      <li> 소의 위치는 1~40000까지 된다. </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li> 최소 면적을 출력하시오 </li>
                      <li>  </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li> 소를 최대 3마리를 팔수 있다는 생각을 해야한다.  </li>
                      <li> 소의 위치는 양의 정수  </li>
                      <li> 1. 모든 수의 중점을 찾아서 멀리떨어진 수를 제거하자니 중점 계산하고
                        5만번의 좌표 거리 계산이 필요한데 이것도 맞을까????  </li>
                      <li> 2. 경우의 수를 해보기? , 만약에 N=50000이면 너무 많아서 이거는 아닐듯 싶다 </li>
                      <li> 3. 상하좌우 끝에서부터 3개의 좌표중에 제거해야되는 점이 존재한다. </li>
                      <li> 3-1. <sub> 12 </sub> C <sub> 3 </sub> 이므로 </li>
                      <li>  </li>
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