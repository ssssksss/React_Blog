import React from 'react';

const SpringCommunication = (props) => {

 return (
  <div className="common_style">
   <div className='block1'>
    <details>
     <summary> RestTemplate - HTTP 통신(정리중) </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> <a href="https://e2e2e2.tistory.com/15" target="_blank" rel="noopener noreferrer"> 참고 링크 </a> </li>
      <li> spring 4.x 부터 </li>
      <li> http 요청 후 json,xml,string 응답 받을 수 있음 </li>
      <li> restful 형식 지원 </li>
      <li> Synchronous - Block  </li>
      <li> 다른 httpClient로는 HttpURLConnection, HttpClient(HttpComponent), WebClient 등이 있다. </li>
      <li> 커넥션 풀을 지원하지 않아서 호출할 때 마다 tcp connection을 만들어서 사용
       그러므로 이 문제를 해결해야 한다.  </li>
      <li> 기본적으로 URLConnection을 사용하는데 Apache에서 사용하는 HttpClient를 사용해서 커넥션 풀을 이용해본다. </li>
      <li> uri를 String 타입과 URI 타입 둘다 사용 할 수 있다. </li>
      <li>  </li>

      <h2 className='h2'> 📌 동작 과정 </h2>
      <li> 1. RestAPI를 이용하기 위해 RestTemplate 메서드를 호출 </li>
      <li> 2. MessageConverter를 이용해서 java object를 request body에 담을 Json등으로 변환 </li>
      <li> 3. ClientHttpRequestFactory에서 ClientHttpRequest을 받아서 요청을 전달 </li>
      <li> 4. ClientHttpRequest가 http요청을 수행 </li>
      <li> 5. RestTemplate가 에러를 핸들링함 </li>
      <li> 6. ClientHttpResponser에서 응답데이터를 가져온다. 에러가 있으면 Response ErrorHandler을 수행 </li>
      <li> 7. MessageConverter를 이용해서 response body의 message를 자바 객체로 변환 </li>
      <li> 8. 결과를 받아서 처리 </li>
      <li>  </li>

      <h2 className='h2'> 📌 RestTemplate 메소드 </h2>
      <li> excute : Any , Request/Response 콜백을 수정 가능 </li>
      <li> exchange : Any , HTTP 헤더를 새로 만들 수 있고, 어떤 HTTP 메소드도 사용가능하다.</li>
      <li> getForObject(uri,자바객체.class) : GET , get 요청 보내고 매핑해서 자바 객체로 반환 </li>
      <li> getForEntity : GET , get 요청 보내고 ResponseEntity로 반환 </li>
      <li> <small> GET에 헤더를 추가하고 싶으면 exchange를 이용 </small> </li>
      <li> postForLocation : POST , post 요청 보내고 헤더에 저장된 java.net.URI로 반환 </li>
      <li> postForEntity : POST , post 요청 보내고 ResponseEntity로 반환 </li>
      <li> postForObject : POST , post 요청 보내고 자바 객체로 반환 </li>
      <li> put : PUT , URL 주소에 HTTP PUT 메소드를 실행한다. </li>
      <li> delete : DELETE , URL 주소에 HTTP DELETE 메소드를 실행한다. </li>
      <li> patchForObject : PATCH , URL 주소에 HTTP PATCH 메소드를 실행한다. </li>
      <li> optionsForAllow : OPTIONS , URL 주소에서 지원하는 HTTP 메소드를 조회한다. </li>
      <li> headForHeader : HEADER , 헤더의 모든 정보를 얻을 수 있으면 HTTP HEAD 메소드를 사용한다. </li>

      <h2 className='h2'> 📌 ResponseEntity </h2>
      <li> HttpEntity : HttpHeader, HttpBody를 포함하는 클래스 </li>
      <li> ResponseEntity extends HttpEntity </li>
      <li> ResponseEntity는 HttpStatue를 포함 </li>
      <li> RequestEntity는 HttpMethod를 포함 </li>

      <h2 className='h2'> 📌 UriComponentsBulider </h2>
      <li> url과 파라미터를 조합해서 빌드를 가능하게 해준다. </li>
      <li> UriComponents uriBuilder = UriComponentsBuilder.fromHttpUrl(url)
       <li> .path("/") </li>
       <li> .queryParam("키","값") </li>
       <li> .encode() //UTF-8 인코딩 처리, toUri()할때 사용 </li>
       <li> .build() </li>
      </li>
      <li>  </li> <br />
      <li> uriBuilder.toUri() </li>
      <li> uriBuilder.toString() </li>

      <h2 className='h2'> 📌 설명 </h2>
      <li> RestTemplate restTemplate = new RestTemplate(); </li>
      <li> restTemplate.getRequestFactory().getClass() </li>
      <li>  </li>

      <h2 className='h2'> ✔ 예시 </h2>
      <li>
       <div className='block3'>
        <h3 className='h3'> 🎈 RestTemplate 커넥션 풀 설정하기 </h3>
        <div className='block4'>
         <li> public RestTemplate restTemplate() {"{"}
          <li> HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory(); </li>
          <li> factory.setReadTimeout(5000); </li>
          <li> factory.setConnectTimeout(3000); </li>
          <li> HttpClient httpClient = HttpClientBuilder.create()
           <li> .setMaxConnTotal(50) </li>
           <li> .setMaxConnPerRoute(20).build(); </li>
          </li>
          <li> factory.setHttpClient(httpClient); </li>
          <li> RestTemplate restTemplate = new RestTemplate(factory); </li>
          <li> return restTemplate; </li>
         </li>
         <li> {"}"} </li>
        </div>
       </div>
       <div className='block3'>
        <h3 className='h3'> 🎈 GET - 자바 객체 반환 </h3>
        <div className='block4'>
         <li>  </li>
         <li>  </li>
         <li>  </li>
        </div>
       </div>
       <div className='block3'>
        <h3 className='h3'> 🎈 카카오 로그인 API 토큰 받기 </h3>
        <div className='block4'>
         <li> String url = "http://kauth.kakao.com/oauth/token"; </li>
         <li> RestTemplate restTemplate = new RestTemplate(); </li>
         <li> // 헤더 설정 </li>
         <li> HttpHeaders headers = new HttpHeaders(); </li>
         <li> 1️⃣ headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED); </li>
         <li> 2️⃣ headers.add("Content-type","application/x-www-form-urlencoded;charset=utf-8"); </li>
         <li>  </li> <br />
         <li> //파라미터 설정 </li>
         <li>MultiValueMap{"<String,String>"} params = new LinkedMultiValueMap{"<>"}(); </li>
         <li>params.add("client_id","카카오 REST API 키"); </li>
         <li>params.add("grant_type","authorization_code"); </li>
         <li>params.add("redirect_uri","http://localhost:3000/StoreReview-Frontend/homepage");  </li>
         <li>params.add("code",code(받아온인증코드)); </li>
         <li>  </li> <br />
         <li>
          <div className="block4">
           <li> // 헤더와 body를 가진 httpEntity 생성  </li>
           <li> {"HttpEntity<MultiValueMap<String,String>> kakaoRequest = new HttpEntity<>(params,headers);"} </li>
           <li> // 스프링에서 RestTemplate를 이용해서 http 통신  </li>
           <li>RestTemplate restTemplate = new RestTemplate();</li>
           <li>ResponseEntity{"<String>"} res = restTemplate.exchange(
            <li> "https://kauth.kakao.com/oauth/token", </li>
            <li> HttpMethod.POST, </li>
            <li> kakaoRequest, </li>
            <li> String.class </li>
           </li>
           <li> ); </li>
          </div>
         </li>
         <li>  </li>
         <li>  </li>
         <li>  </li>
         <li>  </li>
         <li>  </li>
         <li>  </li>
        </div>
       </div>
       <div className='block3'>
        <h3 className='h3'> 🎈 </h3>
        <div className='block4'>
         <li>  </li>
         <li>  </li>
        </div>
       </div>
       <div className='block3'>
        <h3 className='h3'> 🎈 </h3>
        <div className='block4'>
         <li>  </li>
         <li>  </li>
        </div>
       </div>
      </li>

     </div>
    </details>
   </div>

   <div className='block1'>
    <details>
     <summary> URLConnection - HTTP 통신(미정리) </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> 1 </li>
      <li> 2 </li>
      <li> 3 </li>

      <h2 className='h2'> 📌 장점, 단점 </h2>
      <li> 장점 : </li>
      <li> 단점 : </li>

      <h2 className='h2'> ✔ 예시 </h2>
      <li> 소제목
       <div className='block3'>
        <h3 className='h3'> 🎈 </h3>
        <div className='block4'>
         <li>  </li>
        </div>
       </div>
      </li>

     </div>
    </details>
   </div>

   <div className='block1'>
    <details>
     <summary> HttpClient - HTTP 통신(미정리) </summary>
     <div className='block2'>

      <h2 className='h2'> 📌 설명 </h2>
      <li> 1 </li>
      <li> 2 </li>
      <li> 3 </li>

      <h2 className='h2'> 📌 장점, 단점 </h2>
      <li> 장점 : </li>
      <li> 단점 : </li>

      <h2 className='h2'> ✔ 예시 </h2>
      <li> 소제목
       <div className='block3'>
        <h3 className='h3'> 🎈 </h3>
        <div className='block4'>
         <li>  </li>
        </div>
       </div>
      </li>

     </div>
    </details>
   </div>
  </div>
 );
}

export default SpringCommunication;

