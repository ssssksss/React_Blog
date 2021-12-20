import React from 'react';

const SpringCors = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>

                    <summary> Cors 정책 해결 </summary>
                    <div className='block2'>

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
                                        <li> .allowedOrigins("http://127.0.0.1:3001"); </li>
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
                                        <li> .allowedOrigins("http://127.0.0.1:3001"); </li>
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