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
                <details>
                  <summary className="sstitle"> ▶ 1339 번 - 단어 수학  </summary>
                  <span className="sblock">
                    <li> <h3> 문제 </h3>
                      <li> 수학문제는 N개의 단어로 이루어짐 </li>
                      <li> 단어는 알파벳 대문자로만 이루어져 있다. </li>
                      <li> 각 알파벳 대문자를 0~9까지의 숫자 중 하나로 바꾸어서 N개의 수를 합치는 문제 </li>
                      <li> 같은 알파벳은 같은 숫자로 바뀌며, 다른 알파벳과 같은 숫자가 되어서는 안된다. </li>
                      <li> N개의 단어를 합해서 최댓값을 구하는 프로그램 </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li> 첫째 줄에는 N을 입력한다. {' 1 <= N <= 10 '}  </li>
                      <li> 2번째 줄부터는 단어가 한줄에 1개씩 주어진다. </li>
                      <li> 모든 단어에 포함되어 있는 알파벳은 최대 10개 </li>
                      <li> 단어의 최대 길이는 8 </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li> 1번째 줄에 단어 합의 최댓값을 출력하라 </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li> 알파벳의 최대 갯수는 10개 , 일단 값에대한 매칭이 필요하다. </li>
                      <li> 최댓갑이 발생하려면 숫자가 큰 수의 제일 앞에 숫자가 9이어야 한다.  </li>
                      <li> 문제가 경우의 수가 크게 많지가 않아 그냥 브루트포스로 풀면 될것 같다.  </li>
                      <li> 브루트 포스가 아닌 간단한 해쉬테이블을 만들어서 풀어보려고 한다. </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li> import sys </li>
                          <li> N = int(sys.stdin.readline()) </li>
                          <li> word_list = []  # 입력받은 단어들을 보관하는 리스트 </li>
                          <li> word_alphabet = []  # 단어들의 모든 알파벳을 저장하는 리스트 </li>
                          <li> alphabet_kind = { }  # 단어들의 알파벳에서 중복을 제거하고 저장하는 리스트 </li>
                          <li> alphabet_hashtable = { }  # 중복되지 않은 단어들의 값이 빈 해쉬테이블 생성, 추후에 값을 넣음 </li>
                          <li> num_list = []  # 처음에 문자열로 입력한 단어를 숫자 바꿔놓은 리스트 </li>
                          <li> num = 9  # 해쉬테이블에 제일 큰값인 9부터 넣기 위해서 선언 </li> <br />
                          <li> for i in range(N):
                            <li> word_list.append(sys.stdin.readline().rstrip())  </li>
                            <li> for j in word_list[i]:
                              <li> word_alphabet.append(j) </li>
                            </li>
                          </li> <br />
                          <li> alphabet_kind = dict.fromkeys(list(set(word_alphabet)), 0) </li>
                          <li> alphabet_hashtable = dict.fromkeys(list(set(word_alphabet)), 0) </li> <br />
                          <li> for i in range(N): </li>
                          <li> num_position = len(word_list[i])
                            <li>  for j in word_list[i]: </li>
                            <li> rank = 10**(num_position-1) </li>
                            <li> alphabet_kind[j] += rank  </li>
                            <li> num_position = num_position - 1 </li>
                          </li>
                          <li> for i in alphabet_kind:
                            <li> alphabet_hashtable[max(alphabet_kind, key=alphabet_kind.get)] = num </li>
                            <li> alphabet_kind[max(alphabet_kind, key=alphabet_kind.get)] = 0 </li>
                            <li> num -= 1 </li>
                          </li>
                          <li> for word in word_list:
                            <li> temp = "" </li>
                            <li> for alpha in word:
                              <li> </li>
                            </li>
                            <li> </li>
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
                {/* 1399번 끝 */}
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
                {/* 번 끝 */}
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
                {/* 번 끝 */}
              </details>
            </span>
            {/* 1000번대 끝 */}
            <span className="mblock">
              <details>
                <summary className="stitle"> ▶ 2001 - 3000 </summary>
                {/* 2000번대 */}
                <details>
                  <summary className="sstitle"> ▶ 2529 번 - 부등호 </summary>
                  <span className="sblock">
                    <li> <h3> 문제 </h3>
                      <li> 부등호 기호 {'< , >'} k개가 나열된 순서열 A가 있다. </li>
                      <li> 부등호 사이에 숫자를 넣어서 순서열을 만족시키는 수를 찾고자한다. </li>
                      <li> 들어갈수 있는 숫자는 0~9이고 각 1개씩 밖에 존재하지 않는다. </li>
                      <li> 조건을 만족할 때 부등호를 없애고 이어 붙인 숫자를 찾는다. </li>
                      <li> 조건을 만족하는 수는 1개가 아니라 여러개일 수 있다. </li>
                      <li> 이때 최솟값과 최댓값을 찾으려 한다. </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li> 첫줄에 부등호의 갯수 k ({'2 ≤ k ≤ 9'}) </li>
                      <li> 2번째 줄에 부등호를 공백으로 두면서 입력 </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li> 1번째 줄에는 만족하는 최소 정수 </li>
                      <li> 2번째 줄에는 만족하는 최소 정수 </li>
                      <li> 0으로 시작하는 정수여도 0 표기 , 문자열로 출력 </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li> 브루트포스로 풀면 최대 10!의 숫자가 들어가고 조건이 일치하는지도 확인을 해야한다.(아닐듯 싶다) </li>
                      <li> 부등호의 갯수를 왼쪽,오른쪽을 먼저 구분해서 문제를 풀어보려 했는데 이게 아니다..  </li>
                      <li> 결론은 DFS 방식 + 백트래킹 </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li>  import sys </li>
                          <li>  k = int(sys.stdin.readline().rstrip()) </li>
                          <li>  bracket = sys.stdin.readline().rstrip().split() </li>
                          <li>  num_visit = ["false" for i in range(10)] </li>
                          <li>  num_list = [] </li> <br />
                          <li> def dfs(front_num, count_num, str_num):
                            <li> if count_num == k:
                              <li> num_list.append([str_num]) </li>
                            </li>
                            <li> else:
                              <li> for j in range(10):
                                <li> if num_visit[j] == "false":
                                  <li> if bracket[count_num] == "{'<'}":
                                    <li> if front_num {'>'} j:
                                      <li> continue  </li>
                                    </li>
                                  </li>
                                  <li> elif bracket[count_num] == "{'>'}":
                                    <li> if front_num {'<'} j:
                                      <li> continue </li>
                                    </li>
                                  </li>
                                  <li> num_visit[j] = "true" </li>
                                  <li> dfs(j, count_num+1, str_num+str(j)) </li>
                                  <li> num_visit[j] = "false" </li>
                                </li>
                              </li>
                            </li>
                          </li> <br />
                          <li> for i in range(10):
                            <li> num_visit[i] = "true" </li>
                            <li> dfs(i, 0, str(i)) </li>
                            <li> num_visit[i] = "false" </li>
                          </li> <br />
                          <li> print(" ".join(num_list[-1])) </li>
                          <li> print(" ".join(num_list[0])) </li>
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
                {/* 2000번대 끝 */}
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
                      <li> 그래서 최대 3마리의 소를 팔 수 있다.  </li>
                      <li> 소는 점으로 생각하고 , 울타리는 수평이고 수직인 직선으로 구성되어 있다.  </li>
                      <li> 즉 좌표명면 1사분면에 점을 찍고 점을 수직으로 이은 사각형의 면적이 제일 작은것을 구하라 </li>
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
                      <li> 3. 상하좌우 끝에서부터 각 3개의 좌표중에 제거해야되는 점이 존재한다. </li>
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
                <details>
                  <summary className="sstitle"> ▶ 14888 번 - 연산자 끼워넣기 </summary>
                  <span className="sblock">
                    <li> <h3> 문제 </h3>
                      <li> N개의 수로 이루어진 수열이 있다. </li>
                      <li> 수와 수 사이에 연산자를 끼어넣을 수 있다. </li>
                      <li> 연산자는 + , - , / , * 이 있다. </li>
                      <li> 식의 계산은 연산자의 우선순위를 무시하고 순서대로 계산한다. </li>
                      <li> 나눗셈은 몫만 챙기고 나머지는 버린다. </li>
                      <li> 음수를 나누면 양수로 바꾼후 몫을 가지고 음수로 바꾼다. </li>
                      <li> 식의 결과가 최대인 것과 최소인 값을 구하라 </li>
                      <li>  </li>
                    </li>
                    <li> <h3> 입력(문제 조건) </h3>
                      <li> 1번째 줄에 N {' 2 <= N <= 11'}의 갯수가 주어진다. </li>
                      <li> 2번째 줄에 공백을 구분으로 수열의 수를 입력한다. </li>
                      <li> 3번쨰 줄에 공백을 구분으로 +,-,*,/ 의 개수가 주어진다. </li>
                    </li>
                    <li> <h3> 출력 </h3>
                      <li> 1번째 줄에는 최댓값 출력 </li>
                      <li> 2번째 줄에는 최솟값 출력 </li>
                      <li> 계산이 되는 중에 값들은 -10억 ~ 10억 사이의 값만 갖는다. </li>
                    </li>
                    <li> <h3> 풀이 방법 - 생각 </h3>
                      <li> 1. 연산자를 넣을 때 중복되는 연산자는 제외한다. </li>
                      <li> 2. 연산자의 우선순위가 없다는 것은 이웃한 수끼리 묶어서 계산해야한다. </li>
                      <li> 3. 연산자가 음수일 경우에 대해서 판단을 해야한다.
                        <li> 파이썬에서는 양수를 음수로 나누어도 결과값이 나온다... C는 안그랬던거 같은데 ㅠㅠ </li>
                      </li>
                    </li>
                    <li> <h3> 정답 코드 </h3>
                      <details>
                        <summary className="sstitle"> ▶ Python </summary>
                        <span className="mblock">
                          <li> import sys </li>
                          <li> N = int(sys.stdin.readline().rstrip()) </li>
                          <li> A_list = list(map(int, sys.stdin.readline().rstrip().split())) </li>
                          <li> operator_list = list(map(int, sys.stdin.readline().rstrip().split())) </li>
                          <li> sum_list = [] </li> <br />
                          <li> def dfs(A_value, count): <br />
                            <li> if count == N-1:
                              <li> sum_list.append(A_value) </li> <br />
                            </li>
                            <li> for i in range(4):
                              <li> if operator_list[i] {'>'} 0:
                                <li> if i == 0:
                                  <li> temp = A_value + A_list[count+1] </li>
                                </li>
                                <li> if i == 1:
                                  <li> temp = A_value - A_list[count+1] </li>
                                </li>
                                <li> if i == 2:
                                  <li> temp = A_value * A_list[count+1] </li>
                                </li>
                                <li> if i == 3:
                                  <li> if A_value {'<'} 0 and A_list[count+1] {'<'} 0:
                                    <li> temp = int((A_value * -1) / (A_list[count+1] * -1)) </li>
                                  </li>
                                  <li> elif A_value {'<'} 0 or A_list[count+1] {'<'} 0:
                                    <li> temp = int((abs(A_value) / abs(A_list[count+1])) * -1) </li>
                                  </li>
                                  <li> else:
                                    <li> temp = int(A_value / A_list[count+1]) </li>
                                  </li>
                                </li>
                                <li> operator_list[i] -= 1 </li>
                                <li> dfs(temp, count+1) </li>
                                <li> operator_list[i] += 1 </li>
                              </li>
                            </li>
                          </li> <br />
                          <li> dfs(A_list[0], 0) </li>
                          <li> print(max(sum_list)) </li>
                          <li> print(min(sum_list)) </li>
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
                {/* 번 끝 */}
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
                {/* 번 끝 */}
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