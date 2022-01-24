import React from 'react';

const SpringCors = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>

                    <summary> Cors 정책 해결 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 추가 설명 </h2>
                        <li> 디폴트 값 </li>
                        <li> allow all origins </li>
                        <li> allow "simple" methods GET,HEAD and POST </li>
                        <li> allow all headers </li>
                        <li> set max age to 1800 seconds </li>

                        <h2 className='h2'> 📌 메소드 위에 어노테이션을 선언 </h2>
                        <div className="block4">
                            <li> 컨트롤러나 컨트롤러 메소드에 사용 </li>
                            <li> @CrossOrigin("*") <small> # 모든 경로 허용</small> </li>
                            <li> @CrossOrigin(origins="*", allowedHeaders="*") <small> # 모든 경로 허용 </small> </li>
                            <li>  </li>
                            <li>  </li>
                        </div>

                        <h2 className='h2'> 📌 클래스를 생성하여 처리() </h2>
                        <div className="block4">
                            <li> @Configuration </li>
                            <li> public class WebConfig implements WebMvcConfigurer {'{'}
                                <li> @Override </li>
                                <li> public void addCorsMappings(CorsRegistry registry) {'{'}
                                    <li> registry.addMapping("/**").allowCredentials(true)
                                        <li> .allowedOrigins("http://127.0.0.1:3000"); <small> # 안된다면 localhost로 변경 </small></li>
                                    </li>
                                </li>
                                <li> {'}'} </li>
                            </li>
                            <li> {'}'} </li>
                        </div>
                        <h2 className='h2'> 📌 모든 설정 예시 </h2>
                        <div className="block4">
                            <li> @Configuration </li>
                            <li> public class WebConfig implements WebMvcConfigurer {'{'}
                                <li> private final long MAX_AGE_SECS = 3600; </li>
                                <li> @Override </li>
                                <li> public void addCorsMappings(CorsRegistry registry) {'{'}
                                    <li> registry.addMapping("/**").allowCredentials(true)
                                        <li> .allowedOrigins("*") //모두 허용 </li>
                                        <li> .allowedOrigins("http://localhost:3000","http://localshot:3002);//여러개 적용가능 </li>
                                        <li> .allowedMethods("GET","POST","PUT","PATCH","DELETE","OPTIONS") //메소드 제한 가능 </li>
                                        <li> .allowedHeaders("*") </li>
                                        <li> .allowCredentials(true) </li>
                                        <li> .allowedOriginPatterns("*") // .allowCredentials(true) + .allowedOrigins("*")  </li>
                                        <li> .maxAge(MAX_AGE_SECS); pre-flight Request 요청을 보관하는 시간 </li>
                                    </li>
                                </li>
                                <li> {'}'} </li>
                            </li>
                            <li> {'}'} </li>
                        </div>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default SpringCors;