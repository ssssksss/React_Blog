import React, { useEffect, useRef } from 'react';

const Algorithm_Graph = (props) => {

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