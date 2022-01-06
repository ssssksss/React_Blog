import React from 'react';

const SpringCors = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>

                    <summary> Cors 정책 해결 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 추가 설명 </h2>
                        <li> 해놓고서 재실행했을 때 에러가 발생하면 setupProxy.js 파일을 지우고 재실행해보기 </li>

                        <h2 className='h2'> 📌 메소드 위에 어노테이션을 선언 </h2>
                        <li> @CrossOrigin("*") <small> # 모든 경로 허용</small> </li>
                        <li> @CrossOrigin(origins="http://localhost:3000") <small> # 모든 경로 허용 </small> </li>

                        <h2 className='h2'> 📌 클래스를 생성하여 처리 </h2>
                        <div className="block4">
                            <li> @Configuration </li>
                            <li> public class WebConfig implements WebMvcConfigurer {'{'}
                                <li> @Override </li>
                                <li> public void addCorsMappings(CorsRegistry registry) {'{'}
                                    <li> registry.addMapping("/**")
                                        <li> .allowedOrigins("http://127.0.0.1:3000"); </li>
                                    </li>
                                </li>
                                <li> {'}'} </li>
                            </li>
                            <li> {'}'} </li>
                        </div>
                        <div className="block4">
                            <li> 위와 같이 작동이 안된다면 아래 코드로 사용, 브라우저들이
                                응답을 FE JS에 노출할지를 설정하는 코드 추가
                            </li>
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
                        <div className="block4">
                            <li> @Configuration </li>
                            <li> public class WebConfig implements WebMvcConfigurer {'{'}
                                <li> private final long MAX_AGE_SECS = 3600; </li>
                                <li> @Override </li>
                                <li> public void addCorsMappings(CorsRegistry registry) {'{'}
                                    <li> registry.addMapping("/**")
                                        <li> .allowedOrigins("*") </li>
                                        <li> .allowedMethods("GET","POST","PUT","PATCH","DELETE","OPTIONS") </li>
                                        <li> .allowedHeaders("*") </li>
                                        <li> .allowCredentials(true) </li>
                                        <li> .maxAge(MAX_AGE_SECS); </li>
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