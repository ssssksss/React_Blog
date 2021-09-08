import React from 'react';

const SpringLombok = (props) => {
    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    <small> <a href="https://projectlombok.org/features/all" target="_blank"> lombok 사이트 </a> </small>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Getter / @Setter"> @Getter / @Setter </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> Getter,Setter 메소드를 구현 </span>
                            <small> 기본적으로 public, @Setter(AccessLevel.[PRIVATE | PROTECTED ]) </small>
                            <span className="mblock">
                                <li className="col_r"> @Getter </li>
                                <li className="col_r"> @Setter </li>
                                <li> public class User {'{'}</li>
                                <li> &nbsp;private String id; </li>
                                <li> {'}'} </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@NoArgsConstructor"> @NoArgsConstructor #파라미터가 없는 기본생성자</a> </span>
                        <span className="stitle"> <a name="@AllArgsConstructor"> @AllArgsConstructor #모든 파라미터가 있는 생성자</a>  </span>
                        <span className="stitle"> <a name="@RequiredArgsConstructor"> @RequiredArgsConstructor #특정 파라미터만 있는 생성자</a> </span>
                        <small> @NoArgsConstructor(access = AccessLevel.[ PRIVATE | PROTECTED ]) #3개다 한정자 사용가능, @AllArgsConstructor
                            , @RequiredArgsConstructor 2개의 어노테이션은 사용 지양(주의) , @NoArgsConstructor은 @NonNull을 무시함(주의) </small>
                        <span className="sblock">
                            <span className="sstitle"> 생성자 메소드를 구현 </span>
                            <span className="mblock">
                                <li className="col_r"> @NoArgsConstructor <small> 필드에 final 변수가 있으면 에러발생, 해결법은 @(force=true)를 사용 </small> </li>
                                <li className="col_r"> @AllArgsConstructor </li>
                                <li> public class User {'{'}</li>
                                <li> &nbsp;private String id; </li>
                                <li> {'}'} </li>
                                <li className="col_r"> @RequiredArgsConstructor <small> 입력한 파라미터가 순서대로 들어오지 않으면 멤버변수의 값이 바뀌어서 들어가고, 에러가 발생하지 않음 , @Builder
                                    패턴을 사용하기 권장 , [final, @Nonnull] 필드들에 대해서 생성자를 생성 </small> </li>
                                <li> public class User {'{'}</li>
                                <li> &nbsp;private final String id; #생성자 필드에 포함</li>
                                <li> &nbsp;@Nonnull private String id; #생성자 필드에 포함</li>
                                <li> &nbsp;private String id; #생성자 필드에 포함되지 않음</li>
                                <li> {'}'} </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@ToString"> @ToString </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> ToString 메소드를 구현 </span>
                            <small> @ToString(exclude="password") #password 필드를 toString메소드에서 제외시킨다. </small>
                            <span className="mblock">
                                <li> @ToString </li>
                                <li> public class User {'{'}</li>
                                <li> &nbsp;private String id; </li>
                                <li> {'}'} </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Data"> @Data </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> @ToString + @EqualsAndHashCode + @Getter + @Setter
                                + @RequiredArgsConstructor </span>
                            <small> 무거워서 사용을 권장하지 않음, @AllArgsConstructor동시에 사용하면
                                @RequiredArgsConstructor사용불가   </small>
                            <span className="mblock">
                                <li> @Data </li>
                                <li> public class User {'{'}</li>
                                <li> &nbsp;private String id; </li>
                                <li> {'}'} </li>
                            </span>
                        </span>
                    </span>
                    <span className="mblock">
                        <span className="stitle"> <a name="@Builder"> @Builder </a> </span>
                        <span className="sblock">
                            <small> 클래스에 사용하는 것보다 생성자메소드에 직접 사용하는 것이 더 좋다.
                                , 접근레벨 default여서 다른 패키지에서 생성자 호출가능(주의사항) </small>
                            <span className="sstitle"> 빌더 예시 </span>
                            <span className="mblock">
                                <li> @Builder </li>
                                <li> public class User </li>
                                <li> &nbsp;private String id; </li>
                            </span>
                            <span className="sstitle"> 생성자를 만들어서 사용하는것을 권장 </span>
                            <span className="mblock">
                                <li> public class User </li>
                                <li> &nbsp;private String id; </li>
                                <li> &nbsp;@Builder </li>
                                <li> &nbsp;public User(String id) {'{'} </li>
                                <li> &nbsp; this.id = id; </li>
                                <li> &nbsp;{'}'} </li>
                            </span>
                            <span className="sstitle"> build 패턴 구현 예시 </span>
                            <span className="mblock">
                                <li> {'public class User{'} </li>
                                <li> &nbsp;{'private String id;'} </li>
                                <li> &nbsp;{'public static class builder {'} </li>
                                <li> &nbsp;&nbsp;{'private String id;'} </li>
                                <li> &nbsp;&nbsp;{'public builder() { }'} </li>
                                <li> &nbsp;&nbsp;{'public builder id(String id) {'} </li>
                                <li> &nbsp;&nbsp;&nbsp;{'this.id = id;'} </li>
                                <li> &nbsp;&nbsp;&nbsp;{'return this;'} </li>
                                <li> &nbsp;&nbsp;{'    } '} </li>
                                <li> &nbsp;&nbsp;{'    public User build(){'} </li>
                                <li> &nbsp;&nbsp;&nbsp;{'      User user = new User(this.id);'} </li>
                                <li> &nbsp;&nbsp;&nbsp;{'      return user;'} </li>
                                <li> &nbsp;&nbsp;{'    }'} </li>
                                <li> &nbsp;{'    }'} </li>
                                <li> {'    }'} </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@EqualsAndHashCode"> @EqualsAndHashCode </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  equals(),hashCode() 메소드 생성 </span>
                            <span className="mblock">
                                <li> (of={"멤버변수1", "멤버변수2"},callSuper=false)를 추가하면
                                    멤버변수1과 멤버변수2가 같다면 같은 객체로 판단을 하여 처리하게 할 수 있다. </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Cleanup"> @Cleanup </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> 리소르를 종료되기전에 .close() 해준다.  </span>
                            <span className="mblock">
                                <li> @Cleanup ABC abc = new FileInput() #대략적인 형식</li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Delegate"> @Delegate </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> lombok??? </span>
                            <span className="mblock">
                                <li> 한 객체의 메소드를 다른 객체로 위임한다. </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Syncronized"> @Syncronized </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Value"> @Value </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Slf4j"> @Slf4j </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@Log4j2"> @Log4j2 </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="@NonNull"> @NonNull </a> </span>
                        <span className="sblock">
                            <span className="sstitle"> NonNull #필드에 값이 필수적으로 들어와야한다. </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                    <span className="mblock">
                        <span className="stitle"> <a name="">  </a> </span>
                        <span className="sblock">
                            <span className="sstitle">  </span>
                            <span className="mblock">
                                <li>  </li>
                            </span>
                        </span>
                    </span>
                    {/*  */}
                </span>
            </div>
        </>
    );
}

export default SpringLombok;