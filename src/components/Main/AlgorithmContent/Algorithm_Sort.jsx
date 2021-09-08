import React, { useEffect, useRef, useState } from 'react';

const Algorithm_Sort = (props) => {





    return (
        <>
            <div className="common_style" >
                <ul>
                    <span className="lblock">
                        {/*  */}
                        <span className="mblock">
                            <span className="stitle"> <a name="정렬 알고리즘"> 정렬 알고리즘 </a> </span>
                            <span className="sblock">
                                <details>
                                    <summary className="sstitle"> ▶ 선형 정렬(linear sort) </summary>
                                    <span className="mblock">
                                        <li> 방법: 처음부터 끝까지 순서대로 확인해서 정렬</li>
                                        <li> 장점: 어디서든 사용이 가능하다. </li>
                                        <li> 단점: 상대적으로 시간이 오래 걸린다. </li>
                                        <li> 시간 복잡도: O(n<sup>2</sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">
                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 이진 정렬(binary sort) </summary>
                                    <span className="mblock">
                                        <li> 방법: 남은 값들 중에 중간값을 찾아 제외하는 방법 </li>
                                        <li> 장점: ^2 만큼 순서가 줄어든다. </li>
                                        <li> 단점: 배열이 크기순으로 정렬이 되어있어야 가능하다. </li>
                                        <li> 시간 복잡도: O(n<sup></sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">

                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 선택 정렬(selection sort)  </summary>
                                    <span className="mblock">
                                        <li> 방법: 자신보다 뒤에 요소를 탐색하고 자신보다 작으면 바꾸는 방법 </li>
                                        <li> 장점: 구현이 쉬움 </li>
                                        <li> 단점: 비효율적  </li>
                                        <li> 시간 복잡도: O(n<sup>2</sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">
                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 삽입 정렬(insertion sort)  (상활에 따라 추천)</summary>
                                    <span className="mblock">
                                        <li> 방법: 자신 이전의 모든요소를 탐색하고 비교하여 자신의 위치를 찾아 삽입하는 방법 </li>
                                        <li> 장점: 상황에 따라 O(N)의 속도를 가진다. </li>
                                        <li> 단점: 상황에 따라 O(N<sup>2</sup>)을 가지므로 일반적으로 사용되면 안된다. </li>
                                        <li> 시간 복잡도: O(n<sup></sup>) ~ O(n<sup>2</sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">
                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 버블 정렬(bubble sort) </summary>
                                    <span className="mblock">
                                        <li> 방법: 인접한 인덱스를 비교하면서 정렬하는 방법 </li>
                                        <li> 장점: 구현이 쉽다. </li>
                                        <li> 단점: 비효율적이다. </li>
                                        <li> 시간 복잡도: O(n<sup>2</sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">

                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 퀵 정렬(quick sort) </summary>
                                    <span className="mblock">
                                        <li> 방법: 피벗을 이용해서 두 부분을 나누고 정렬 하는 방법 </li>
                                        <li> 장점: 효율적인 편 </li>
                                        <li> 단점: 피벗의 위치에 따라 비효율적일 수도 있다. </li>
                                        <li> 시간 복잡도: O(NlogN) ~ O(n<sup>2</sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">

                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 힙 정렬(heap sort) (추천)</summary>
                                    <span className="mblock">
                                        <li> 방법: 이진트리구조? </li>
                                        <li> 장점: 효율적인 편  </li>
                                        <li> 단점:  </li>
                                        <li> 시간 복잡도: O(NlogN)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">

                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 합병 정렬(merge sort) (추천)</summary>
                                    <span className="mblock">
                                        <li> 방법: 리스트를 모두 분할한 후에 병합을 하는 방법 </li>
                                        <li> 장점: 효율적인 편 </li>
                                        <li> 단점: 추가적인 메모리 공간 필요 </li>
                                        <li> 시간 복잡도: O(NlogN)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">

                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 쉘 정렬 </summary>
                                    <span className="mblock">
                                        <li> 방법:  </li>
                                        <li> 장점: 삽입정렬 보다 상황에 따라 빠르다. </li>
                                        <li> 단점: 성능 차이가 심하다. </li>
                                        <li> 시간 복잡도: O(n) ~ O(n<sup>1.3,1.5</sup>) ~  O(n<sup>2</sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">

                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 기수 정렬 </summary>
                                    <span className="mblock">
                                        <li> 방법:  </li>
                                        <li> 장점: 속도가 매우 빠름 </li>
                                        <li> 단점: 메모리가 많이 필요, 데이터 타입 일정, 구현 조건이 많음 </li>
                                        <li> 시간 복잡도: O(n<sup></sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">

                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                                <details>
                                    <summary className="sstitle"> ▶ 카운팅 정렬 </summary>
                                    <span className="mblock">
                                        <li> 방법: 원소가 카운팅된 빈 배열을 만들고 그곳에 배열을 정렬하는 방법  </li>
                                        <li> 장점: 속도가 매우 빠름 </li>
                                        <li> 단점: 메모리 공간이 필요, 메모리 낭비가 심할 수도 있음 </li>
                                        <li> 시간 복잡도: O(n<sup></sup>)</li>
                                        <li> 예시코드: </li>
                                        <span className="sblock">
                                            <li>  </li>
                                            <li>  </li>
                                        </span>
                                    </span>
                                </details>
                                {/*  */}
                            </span>
                        </span>
                        {/*  */}
                        <details>
                            <summary className="sstitle"> ▶  </summary>
                            <span className="mblock">
                                <span className="stitle"> <a name="">  </a> </span>
                                <span className="sblock">
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </span>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="sstitle"> ▶  </summary>
                            <span className="mblock">
                                <span className="stitle"> <a name="">  </a> </span>
                                <span className="sblock">
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </span>
                            </span>
                        </details>
                        {/*  */}
                        <details>
                            <summary className="sstitle"> ▶  </summary>
                            <span className="mblock">
                                <span className="stitle"> <a name="">  </a> </span>
                                <span className="sblock">
                                    <span className="sstitle">  </span>
                                    <span className="mblock">
                                        <li>  </li>
                                    </span>
                                </span>
                            </span>
                        </details>
                        {/*  */}
                    </span>
                </ul>
            </div>
        </>
    );
}

export default Algorithm_Sort;