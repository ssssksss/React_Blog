import React, { useEffect, useRef } from 'react';

const Algorithm_Graph = (props) => {





    return (
        <>

            <div className="common_style" >
                <ul>
                    <span className="lblock">
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ BFS 알고리즘(너비 우선탐색) </summary>
                                <span className="sblock">
                                    {/*  */}
                                    <span className="sstitle"> 설명 </span>
                                    <span className="mblock">
                                        <li> 루트 노드에서 시작해서 인접한 노드를 탐색하여 전체 그래프를 탐색하는 방법 </li>
                                        <li> 최단 거리를 구하는 알고리즘 </li>
                                        <li> Queue 구조를 이용 </li>
                                        <li> 간선의 가중치가 모두 1일때 사용 가능  </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 장단점 </span>
                                    <span className="mblock">
                                        <li className="col_be"> 장점
                                            <li> 노드의 수가 적고 깊이가 얕으면 빠르게 동작할 수 있음 </li>
                                            <li> DFS보다 빠름 , 단 너무 깊다면 DFS를 사용하는 것이 좋음 </li>
                                            <li> 최단경로를 반드시 찾음 </li>
                                            <li> 모든 정점을 방문할 때, 최단거리 문제를 구할 때 </li>
                                        </li>
                                        <li className="col_r"> 단점
                                            <li> DFS는 재귀를 사용하여 저장공간이 적지만 BFS는 저장 공간이 많이 필요 </li>
                                            <li> 노드의 수가 늘어나면 탐색해야하는 노드가 많아져 않좋음 </li>
                                            <li>  </li>
                                        </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 그래프 구현 방법 2가지 </span>
                                    <span className="mblock">
                                        <li> 2차원 배열(인접행렬) , 시간복잡도: O(N<sup>2</sup>) </li>
                                        <li> 링크드리스트, 어레이리스트(인접리스트) , 시간복잡도: O(N+E) </li>
                                    </span>
                                    {/*  */}
                                    <span className="sstitle"> 예시 코드 </span>
                                    <span className="mblock">
                                        <details>
                                            <summary className="sstitle"> ▶ JAVA </summary>
                                            <span className="sblock">
                                                <li> <span className="sstitle"> 인접 행렬(2차원배열) 예시 </span> </li>
                                                <li> {'queue<int> q;'} </li>
                                                <li> check[1] = true; q.push(1); </li>
                                                <li> while (!q.empty()) {'{'}
                                                    <li> int x = q.front(); q.pop(); </li>
                                                    <li> for (int i=1; i{'<='}n; i++) {'{'}
                                                        <li> if (a[x][i] == 1 {'&&'} check[i] == false) {'{'}
                                                            <li> check[i] = true; </li>
                                                            <li> q.push(i); </li>
                                                        </li>
                                                        <li> {'}'} </li>
                                                    </li>
                                                    <li> {'}'} </li>
                                                </li>
                                                <li> {'}'} </li>
                                            </span>
                                        </details>
                                        {/*  */}
                                        <details>
                                            <summary className="sstitle"> ▶ C </summary>
                                            <span className="sblock">
                                                <li> <span className="sstitle"> 인접 행렬(2차원배열) 예시 </span> </li>
                                                <li> static void bfs(int node) {'{'}
                                                    <li> BFS_isVisit[node] = true; </li>
                                                    <li> BFS_visitArray.add(node); </li>
                                                    <li> for(int i=0; i{'<='}nodeNum; i++)
                                                        <li> if( graph[node][i] == 1 {'&&'} BFS_visitArray[i] == false
                                                            {'&&'} queue.contains(i)==false) {'{'}
                                                            <li> queue.add(i); </li>
                                                        </li>
                                                        <li> {'}'} </li>
                                                    </li>
                                                    <li> {'}'} </li>
                                                    <li> if(!queue.isEmpty())
                                                        <li> bfs(queue.poll()); </li>
                                                    </li>
                                                </li>
                                                <li> {'}'} </li>
                                            </span>
                                            {/*  */}
                                            <span className="sblock">
                                                <li> <span className="sstitle"> 인접 리스트(링크드,어레이리스트) 예시 </span> </li>
                                                <li> static void bfs(int node) {'{'}
                                                    <li> BFS_isVisit[node] = true; </li>
                                                    <li> BFS_visitArray.add(node); </li>
                                                    <li> for(int i=0; i{'<'} graph[node].size() ; i++) {'{'}
                                                        <li> int adjNode = graph[node].get(i); </li>
                                                        <li> if(BFS_isVisit[adjNode] == false {'&&'} queue.contains(adjNode) == false ) {'{'}
                                                            <li> queue.add(adjNode); </li>
                                                        </li>
                                                        <li> {'}'} </li>
                                                    </li>
                                                    <li> {'}'} </li>
                                                    <li> if(!queue.isEmpty())
                                                        <li> bfs(queue.poll()); </li>
                                                    </li>
                                                </li>
                                                <li> {'}'} </li>
                                            </span>
                                        </details>
                                        {/*  */}
                                        <details>
                                            <summary className="sstitle"> ▶ C++ </summary>
                                            <span className="sblock">
                                                <li>  </li>
                                            </span>
                                        </details>
                                        {/*  */}
                                        <details>
                                            <summary className="sstitle"> ▶ Python </summary>
                                            <span className="sblock">
                                                <li>  </li>
                                            </span>
                                        </details>
                                        {/*  */}
                                        <details>
                                            <summary className="sstitle"> ▶  </summary>
                                            <span className="sblock">
                                                <li>  </li>
                                            </span>
                                        </details>
                                        {/*  */}
                                    </span>
                                    {/*  */}
                                </span>
                            </details>
                        </span>
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ DFS 알고리즘 </summary>
                                <span className="sblock">
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
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
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ 다익스트라(최단경로) 알고리즘 </summary>
                                <span className="sblock">
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
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
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ 프라임 알고리즘 </summary>
                                <span className="sblock">
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
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
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ 크루수 칼 알고리즘 </summary>
                                <span className="sblock">
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
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
                        {/*  */}
                        <span className="mblock">
                            <details>
                                <summary className="stitle"> ▶ 알고리즘 </summary>
                                <span className="sblock">
                                    {/*  */}
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
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
                        {/*  */}
                    </span>
                </ul>
            </div>
        </>
    );
}

export default Algorithm_Graph;