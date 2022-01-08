import React from 'react';

const ApiNaver = (props) => {
 return (
  <div className="common_style">
   <div className='block1'>
    <details>
     <summary> 네이버 map api 시작 </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> https://www.ncloud.com/?language=ko-KR </li>
      <li> 우측 상단에 콘솔로 들어간다. </li>
      <li> 좌측에 product &amp; services 클릭하면 결제 등록하라는 내용이 작은 글씨로 보일것이다. 그거 하고 다시 해서 결제까지 완료하기 </li>
      <li> 홈 메뉴로 가서 우측상단에 메뉴 - 서비스 - Aplication Service - Maps - 이용 신청하기  </li>
      <li> Web 서비스 URL은 http://localhost:3000 와 같이 코드를 작성해서 사용할 URL 등록 </li>

     </div>
    </details>
   </div>

   <div className='block1'>
    <details>
     <summary> 네이버 지도 React에서 기본 예제 사용 </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> 1. index.html에 {'<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=지도어플리케이션ID넣기"></script>'} </li>
      <li> 2. 네이버 지도 어플리케이션에서 http://localhost:3000 넣기 </li>

      <h2 className='h2'> 📌 예제 코드 </h2>
      <div className="block4">
       <li> {'const { naver } = window;'} </li>
       <li>  </li> <br />
       <li> {' useEffect(() => { '}
        <li> {' let mapContainer = document.getElementById("map") '} </li>
        <li> {'  '} </li> <br />
        <li> {' let mapOption = { '}
         <li> {' center: new naver.maps.LatLng(37.3595704, 127.105399), '} </li>
         <li> {' zoom: 10 '} </li>
        </li>
        <li> {' } '} </li>
        <li> const map = new naver.maps.Map(mapContainer, mapOption); </li>
       </li>
       <li> {'}, [])'} </li>
       <li>  </li> <br />
       <li> {' return ( '}
        <li> {' <> '}
         <li> {' <div id="map" style={{ width: "300px", height: "300px" }}> </div> '} </li>
        </li>
        <li> {' </> '} </li>
       </li>
       <li> {' ) '} </li>
      </div>

     </div>
    </details>
   </div>

   <div className='block1'>
    <details>
     <summary>  네이버 검색 API React 예제 </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 포스트맨을 이용한 테스트 </h2>
      <li> 내 어플리케이션에 등록하기 </li>
      <li> 포스트맨을 켜서 GET에 https://openapi.naver.com/v1/search/movie.json?query="아이언맨" 넣기 </li>
      <li> Headers로 변경하고 key와 value에 [X-Naver-Client-Id,어플리케이션 Clinet-Id] , [X-Naver-Client-Secret,어플리케이션 Client-Secret] </li>

      <h2 className='h2'> 📌 react 예시 </h2>
      <li> naver 검색 api를 사용하려면 cors문제를 해결해야한다.  </li>
      <div className="block4">
       <li> import axios from 'axios'; </li>
       <li>  </li> <br />
       <li> {"const TestSearchAPI = () => {"}
        <li> const [stores, setStores] = useState([]); </li>
        <li> const [loading, setLoading] = useState(null); </li>
        <li> const [error, setError] = useState(null); </li>
        <li> const [word, setWord] = useState('기본'); </li>
        <li> const ClientId = '사용자ID'; </li>
        <li> const ClientSecret = '사용자Secret'; </li>
        <li> {" const changeText = (e) => { "}
         <li> {" console.log(e.target.value); "} </li>
         <li> {" setWord(e.target.value); "} </li>
        </li>
        <li> {" } "} </li>
        <li>  </li> <br />
        <li> {" const fetchStores = async () => { "}
         <li> {" try { "}
          <li> {" setStores(null); "} </li>
          <li> {" setError(null); "} </li>
          <li> {" setLoading(true); "} </li>
          <li> {" const response = await axios.get('/v1/search/local.json' "}
           <li> {" , { "}
            <li> {" params: { "}
             <li> {" query: word, "} </li>
             <li> {" display: 1 "} </li>
            </li>
            <li> {" }, "} </li>
            <li> {" headers: { "}
             <li> {" 'X-Naver-Client-Id': ClientId, "} </li>
             <li> {" 'X-Naver-Client-Secret': ClientSecret "} </li>
            </li>
            <li> {" } "} </li>
           </li>
          </li>
          <li> {" }); "} </li>
          <li> {" const res = { response }; "} </li>
          <li> {" console.log(res); "} </li>
          <li> {" setStores(res.response.data.items); "} </li>
         </li>
         <li> {" } "} </li>
         <li> {" catch (e) { "}
          <li> {" setError(e); "} </li>
         </li>
         <li> {" } "} </li>
         <li> {" setLoading(false); "} </li>
        </li>
        <li> {" } "} </li>
        <li> {" useEffect(() => { "}
         <li> {" fetchStores() "} </li>
        </li>
        <li> {" }, []); "} </li>
        <li> {" if (loading) return < div > 로딩 </div> "} </li>
        <li> {" if (error) return <div> 에러 </div> "} </li>
        <li> {" if (!stores) return <div> 아무것도 없는데? </div>; "} </li>
        <li> {" return ( "} </li>
        <li> {" <> "}
         <li> {" {stores.map(store => ( "}
          <li> {" <Container key={store.address}> "}
           <li> {" <div> 가게 주소 : {store.address} </div> "} </li>
           <li> {" <div> 가게 카테고리 : {store.category} </div> "} </li>
           <li> {" <div> 가게 설명 : {store.descriptions} </div> "} </li>
           <li> {" <div> 가게 링크 : {store.link} </div> "} </li>
           <li> {" <div> 맵x 좌표 : {store.mapx} </div> "} </li>
           <li> {" <div> 맵y 좌표 : {store.mapy} </div> "} </li>
           <li> {" <div> 길주소 : {store.roadAddress} </div> "} </li>
           <li> {" <div> 가게명 : {store.title} </div> "} </li>
          </li>
          <li> {" </Container> "} </li>
         </li>
         <li> {" ))} "} </li>
         <li> {" <input "}
          <li> {" type='text' onChange={changeText} "} </li>
         </li>
         <li> {" /> "} </li>
         <li> {" <button onClick={fetchStores}> 불러오기</button> "} </li>
        </li>
        <li> {" </> "} </li>
        <li> {" ) "} </li>
       </li>
       <li> {"}"} </li>
       <li> export default TestSearchAPI; </li>
      </div>

      <h2 className='h2'> 📌  </h2>
      <li>  </li>

     </div>
    </details>
   </div>


   <div className='block1'>
    <details>
     <summary> 네이버 로그인 API </summary>
     <div className='block2'>

      <h2 className="h2"> 📌 Naver API 설정하기 </h2>
      <li> <a href="https://developers.naver.com/main/" target="_blank" rel="noopener noreferrer"> 네이버 개발자 센터 </a> </li>
      <li> <a href="https://developers.naver.com/docs/login/api/api.md" target="_blank" rel="noopener noreferrer"> 네이버 API 문서 </a> </li>
      <li> 상단 메뉴 Application 클릭 </li>
      <li> 애플리케이션 등록 </li>
      <li> 애플리케이션 이름 : 아무거나 </li>
      <li> 사용 API : 네아로 , 필요한거 체크 </li>
      <li> 환경 추가 : PC 웹 , 서비스 URL을 사용할것입력 , 콜백 URL을 아무거나입력  </li>

      <h2 className="h2"> ✔ 스프링 예시 </h2>
      <li> 소제목
       <div className='block3'>
        <h3 className="h3"> 🎈 application.yml </h3>
        <li> security:
         <li> oauth2:
          <li> client:
           <li> registration:
            <li> naver:
             <li> client-id: 클라이언트 ID </li>
             <li> client-secret: 클라이언트 보안 비밀번호 </li>
             <li> scope:
              <li> - email </li>
              <li> - pulic_profile </li>
             </li>
             <li> client-name: Naver </li>
             <li> authorization-grant-type: [authorization_code,refresh_token,delete] #발급,갱신,삭제 </li>
             <li> redirect-uri: 네이버아이디로 로그인 Callback URL  #html 로그인폼에서 사용하는 경로 </li>
            </li>
           </li>
           <li> provider:
            <li> naver:
             <li> authorization-uri: https://nid.naver.com/ouath2.0/authorize <small> # 네이버 로그인창이 뜨게 만듬 </small> </li>
             <li> token-uri: https://nid.naver.com/oauth2.0/toke <small> # 토큰을 받기 위해 사용</small> </li>
             <li> user-info-uri: https://openapi.naver.com/v1/nid/me <small> # 프로필 API를 호출할 때 사용 </small> </li>
             <li> user-name-attribute: response <small> # 응답을 받을 때</small> </li>
            </li>
           </li>
          </li>
         </li>
        </li> <br />

        <li> <h3 className="h3"> 🎈 html </h3>
         <li> {'<a href="네이버아이디로 로그인 Callback URL 경로"> 네이버 로그인 </a>'} </li>
         <small> 네이버는 경로를 본인이 적기 때문에 경로 설정을 잘 해주어야 한다. #localhost:8080 은 빼고 사용 </small>
        </li> <br />

        <li> <h3 className="h3"> 🎈 CustomOAuth2UserService </h3>
         <li> @Service public class CustomOAuth2UserService extends DefaultOAuth2UserService {'{'}
          <li> @Override public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException
           <li> System.out.println("1: "+ userRequest); </li>
           <li> System.out.println("2: "+userRequest.getAccessToken().getTokenValue()); </li>
           <li> System.out.println("3: "+userRequest.getAdditionalParameters()); </li>
           <li> System.out.println("4: "+userRequest.getClientRegistration()); //유저의 아이디 등등 </li>
           <li> System.out.println("5: "+super.loadUser(userRequest).getAttributes()); </li>
           <li> return super.loadUser(userRequest);  </li>
          </li>
         </li>
         <li> {'}'} </li>
        </li>

        <li> <h3 className="h3"> 🎈 CustomWebSecurityConfig </h3>
         <li> @EnableWebSecurity </li>
         <li> @Configuration  </li>
         <li> public class CustomWebSecurityConfig extends WebSecurityConfigurerAdapter {'{'}
          <li> @Override </li>
          <li> protected void configure(HttpSecurity http) throws Exception {'{'}
           <li> .oauth2Login() </li>
           <li> .loginPage("/loginForm")  </li>
           <li> .userInfoEndpoint()  </li>
           <li> .userService(customOAuth2UserService); //로그인 후에 처리할 서비스 작성 </li>
          </li>
          <li> {'}'} </li>
         </li>
         <li> {'}'} </li>
        </li>


       </div>
      </li>

     </div>
    </details>
   </div>
  </div>
 );
}

export default ApiNaver;