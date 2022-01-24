import React from 'react';

const ApiKakao = (props) => {
 return (
  <div className="common_style">
   <div className='block1'>
    <details>
     <summary> 카카오 로그인 API </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 Kakao Login API - React </h2>
      <li> <a href="https://developers.kakao.com/" target="_blank" rel="noopener noreferrer">
       카카오 개발자 플랫폼
      </a> </li>
      <li> 로그인 해서 어플리케이션 추가하기 </li>
      <li> {' "https://kauth.kakao.com/oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code" '}
       <li> REST_API_KEY 에는 내 어플리케이션 - 앱설정 - 요약정보 - REST API 키 </li>
       <li> REDIRECT_URI 에는 내 어플리케이션 - 제품 설정 - 카카오 로그인 - Redirect URI <small> # 로그인 한 뒤에 이 주소로 돌아옴</small> </li>
       <li> 내 어플리케이션 - 제품 설정 - 활성화 - ON </li>
       <li> 내 어플리케이션 - 앱설정 - 플랫폼 - Web - 서비스 Redirect URI 추가 </li>
      </li>
      <h3 className='h3'> 🎈 KakaoLoginUrl.js </h3>
      <div className='block4'>
       <li> {' const CLIENT_ID = "REST_API_KEY 넣어주기"; '} </li>
       <li> {' const REDIRECT_URI = "http://localhost:3000"; '} </li>
       <li> {' export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`; '} </li>
      </div>
      <h3 className='h3'> 🎈 LoginAPIs.js </h3>
      <div className='block4'>
       <li> {' import { KAKAO_AUTH_URL } from "KakaoLoginUrl.js 파일 경로"; '} </li>
       <li>  </li> <br />
       <li> {' const LoginApis = () => { '}
        <li> return (
         <li> {' <a href={KAKAO_AUTH_URL} > '}
          <li> {' <img src={kakaoimg} ></img> '} </li>
          <li> {' <span>카카오계정 로그인</span> '} </li>
         </li>
         <li> {' </a> '} </li>
         <li> ); </li>
        </li>
        <li> {'};'} </li>
       </li>
       <li> export default LoginApis; </li>
      </div>
     </div>
    </details>
   </div>
   <div className='block1'>
    <details>
     <summary> 카카오 맵 API </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> html 파일에 코드 넣어주기 </li>
      <li> {' <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=JavaScript 키&libraries=services"> </script> '} </li>
      <li>  </li>

      <h2 className='h2'> ✔ 예시 </h2>
      <li>
       <div className='block3'>
        <h3 className='h3'> 🎈 리액트 타입스크립트 테스트 예시 </h3>
        <div className='block4'>
         <li> {" import styled from 'styled-components'; "} </li>
         <li> {" const MapContainer = styled.div` "}
          <li> {" 	width: 500px; "} </li>
          <li> {" 	height: 500px; "} </li>
         </li>
         <li> {" `; "} </li>
         <li> {" declare global { "}
          <li> {" 	interface Window { "}
           <li> {" 		kakao: any; "} </li>
          </li>
          <li> {" 	} "} </li>
         </li>
         <li> {" } "} </li>
         <li> {" interface ISubPageProps { } "} </li>
         <li> {" const SubPage: React.FunctionComponent<ISubPageProps> = (props) => { "}
          <li> {" 	React.useEffect(() => { "}
           <li> {" 		const options = {  "}
            <li> {" 			center: new window.kakao.maps.LatLng(33.450701, 126.570667),  "} </li>
            <li> {" 			level: 3 "} </li>
           </li>
           <li> {" 		}; "} </li>
           <li> {" 		const container = document.getElementById('map'); "} </li>
           <li> {" 		const map: any = new window.kakao.maps.Map(container, options); "} </li>
          </li>
          <li> {" 	}, []); "} </li>
          <li> {" 	return ( "}
           <li> {" 		<> "}
            <li> {" 			<MapContainer id='map'> </MapContainer> "} </li>
           </li>
           <li> {" 		</> "} </li>
          </li>
          <li> {" 	); "} </li>
         </li>
         <li> {" }; "} </li>
         <li> {" export default SubPage; "} </li>
        </div>
       </div>
      </li>

     </div>
    </details>
   </div>
   {/* 끝 */}
  </div>
 );
}

export default ApiKakao;