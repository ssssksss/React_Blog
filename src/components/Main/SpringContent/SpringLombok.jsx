import React from 'react';

const SpringLombok = (props) => {
    return (
        <>
            <div className="common_style">
                <span className="lblock">
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> <a href="https://projectlombok.org/features/all" target="_blank"> lombok 사이트 </a>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Getter / @Setter
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> Getter,Setter 메소드를 구현 (일반적으로 Setter는 구현을 하지 않음) </li>
                                    <li> 기본적으로 public, @Setter(AccessLevel.[PRIVATE | PROTECTED ]) </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @Getter </li>
                                    <li className="col_r"> @Setter </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @NoArgsConstructor , @AllArgsConstructor , @RequiredArgsConstructor
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @NoArgsConstructor #파라미터가 없는 기본생성자 </li>
                                    <li> @AllArgsConstructor #모든 파라미터가 있는 생성자 </li>
                                    <li> @RequiredArgsConstructor #특정 파라미터만 있는 생성자 </li>
                                    <li> @NoArgsConstructor(access = AccessLevel.[ PRIVATE | PROTECTED ]) #3개다 한정자 사용가능, @AllArgsConstructor
                                        , @RequiredArgsConstructor 2개의 어노테이션은 사용 지양(주의) </li>
                                    <li> @NoArgsConstructor은 @NonNull을 무시함(주의) </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @NoArgsConstructor <small> 필드에 final 변수가 있으면 에러발생, 해결법은 @(force=true)를 사용 </small> </li>
                                    <li className="col_r"> @AllArgsConstructor </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                    </li>
                                    <li> {'}'} </li>
                                    <li className="col_r"> @RequiredArgsConstructor <small> 입력한 파라미터가 순서대로 들어오지 않으면 멤버변수의 값이 바뀌어서 들어가고, 에러가 발생하지 않음 , @Builder
                                        패턴을 사용하기 권장 , [final, @Nonnull] 필드들에 대해서 생성자를 생성 </small> </li>
                                    <li> public class User {'{'}
                                        <li> private final String id; #생성자 필드에 포함</li> <br />
                                        <li> @Nonnull private String id; #생성자 필드에 포함</li>
                                        <li> private String id; #생성자 필드에 포함되지 않음</li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @ToString
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>

                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> ToString 메소드를 구현 </li>
                                    <li>  @ToString(exclude="password") #password 필드를 toString메소드에서 제외시킨다. </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @ToString(exclude="password") </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                        <li> private String password; </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}
                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Data
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @ToString + @EqualsAndHashCode + @Getter + @Setter + @RequiredArgsConstructor </li>
                                    <li> 무거워서 사용을 권장하지 않음, @AllArgsConstructor동시에 사용하면 @RequiredArgsConstructor사용불가 </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @Data </li>
                                    <li> public class User {'{'}
                                        <li> private String id; </li>
                                    </li>
                                    <li> {'}'} </li>
                                </div>
                            </div>
                        </details>
                    </div>
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @Builder
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> 클래스에 사용하는 것보다 생성자메소드에 직접 사용하는 것이 더 좋다. , 접근레벨 default여서 다른 패키지에서 생성자 호출가능(주의사항) </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li className="col_r"> @Builder </li>
                                    <li> public class User </li>
                                    <li> private String id; </li>
                                </div>
                                <div className='sstitle'> 예시2 - 생성자를 만들어서 사용하는것을 권장 </div>
                                <div className='mblock'>
                                    <li> public class User </li>
                                    <li> private String id; </li>
                                    <li className="col_r"> @Builder </li>
                                    <li> public User(String id) {'{'} </li>
                                    <li>  this.id = id; </li>
                                    <li> {'}'} </li>
                                </div>
                                <div className='sstitle'> build 패턴 구현 예시 </div>
                                <div className='mblock'>
                                    <li> {'public class User{'}
                                        <li> {'private String id;'} </li>
                                        <li> {'private String password;'} </li>
                                        <li> {'User() {}'} </li> <br />
                                        <li> {'public static class Builder {'}
                                            <li> {'private String id;'} </li>
                                            <li> {'private String password;'} </li> <br />

                                            <li> {'public Builder id(String id) {'}
                                                <li> {'this.id = id;'} </li>
                                            </li>
                                            <li> {'}'} </li><br />
                                            <li> {'public Builder password(String password) {'}
                                                <li> {'this.password = password;'} </li>
                                                <li> {'return this;'} </li>
                                            </li>
                                            <li> {'    } '} </li> <br />
                                            <li> {'    public User build() {'}
                                                <li> {'      User user = new User(this.id,this.password);'} </li>
                                                <li> {'      return user;'} </li>
                                            </li>
                                            <li> {'    }'} </li>
                                        </li>
                                        <li> {'    }'} </li>
                                    </li>
                                    <li> {'    }'} </li>
                                    <li> </li>
                                </div>
                                <div className='sstitle'> build 패턴 사용예시 </div>
                                <div className='mblock'>
                                    <li> User user = new User.Builder("id").password("1234").build(); </li>
                                    <li> </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @DynamicInsert , @DynamicUpdate
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> @DynamicInsert 필드값이 null이면 insert 쿼리에서 제외 </li>
                                    <li> @DynamicUpdate 필드값이 null이면 update 쿼리에서 제외 </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> @PrePersist , @PreUpdate
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li> persist 되기전에 호출하는 방법 </li>
                                    <li> 메소드에 사용 </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>

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