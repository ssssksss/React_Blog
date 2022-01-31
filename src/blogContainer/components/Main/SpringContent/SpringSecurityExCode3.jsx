import React from 'react';

const SpringSecurityExCode3 = (props) => {

  return (
    <>
      <div className="common_style" >
        <ul>
          <span className="lblock">
            <span className="mtitle"> Spring Security Excode3 </span>
            <small> JPA를 이용한 회원가입 , DB의 정보를 가지고 로그인을 해보고 인증과 권한 유무에 따라 특정 URL에 접속이 가능한지 불가능한지 테스트 하는 예제</small>
            <div className='mblock'>
              <details>
                <summary className='stitle'> spring initializr
                  <a name='spring initializr' style={{ visibility: 'hidden' }}> spring initializr </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/SpringSecurityStart.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> directory
                  <a name='directory' style={{ visibility: 'hidden' }}> directory </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/directory.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> application.yml
                  <a name='application.yml' style={{ visibility: 'hidden' }}> application.yml </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/application.yml.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> CustomUserDetails
                  <a name='CustomUserDetails' style={{ visibility: 'hidden' }}> CustomUserDetails </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/CustomUserDetails.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> CustomUserDetailsService
                  <a name='CustomUserDetailsService' style={{ visibility: 'hidden' }}> CustomUserDetailsService </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/CustomUserDetailsService.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> CustomWebMvcConfig
                  <a name='CustomWebMvcConfig' style={{ visibility: 'hidden' }}> CustomWebMvcConfig </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/CustomWebMvcConfig.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> CustomWebSecurityConfig
                  <a name='CustomWebSecurityConfig' style={{ visibility: 'hidden' }}> CustomWebSecurityConfig </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/CustomWebSecurityConfig.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> UserController
                  <a name='UserController' style={{ visibility: 'hidden' }}> UserController </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/UserController.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> User
                  <a name='User' style={{ visibility: 'hidden' }}> User </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/User.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> UserRepository
                  <a name='UserRepository' style={{ visibility: 'hidden' }}> UserRepository </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/UserRepository.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> admin.html
                  <a name='admin.html' style={{ visibility: 'hidden' }}> admin.html </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/admin.html.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> index.html
                  <a name='index.html' style={{ visibility: 'hidden' }}> index.html </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/index.html.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> joinForm.html
                  <a name='joinForm.html' style={{ visibility: 'hidden' }}> joinForm.html </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/joinForm.html.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> loginForm.html
                  <a name='loginForm.html' style={{ visibility: 'hidden' }}> loginForm.html </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/loginForm.html.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> member.html
                  <a name='member.html' style={{ visibility: 'hidden' }}> member.html </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/member.html.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> user.html
                  <a name='user.html' style={{ visibility: 'hidden' }}> user.html </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/user.html.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            <div className='mblock'>
              <details>
                <summary className='stitle'> result
                  <a name='result' style={{ visibility: 'hidden' }}> result </a> </summary>
                <div className='sblock'>
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/result1.png'} alt='' />
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/result2.png'} alt='' />
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/result3.png'} alt='' />
                  <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/result4.png'} alt='' />
                </div>
              </details>
            </div>
            {/*  */}
            {/* <span className="mblock">
                            <span className="stitle"> <a name="">  </a> </span>
                            <img alt="" src={process.env.PUBLIC_URL + '/img/SpringSecurityStudy/SpringSecurityExCode3/.png'} alt='' />
                        </span> */}
            {/*  */}
          </span>
        </ul>
      </div>
    </>
  );
}
export default SpringSecurityExCode3;