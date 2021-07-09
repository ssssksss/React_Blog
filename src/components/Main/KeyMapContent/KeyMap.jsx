import React from 'react';

const KeyMap = (props) => {

    return (
        <div>
            <span className="lblock">
                <span className="mtitle"> 0. 단축키 (하이퍼링크) </span>
                <span className="mblock">
                    <p className="hyperlink">
                        <a href="#Intellij 단축키">1. Intellij 단축키 </a>
                    </p>
                </span>
            </span>
            {/* <p> <img src={process.env.PUBLIC_URL + '/img/SpringBootLibrary.png'} /> </p> */}
            <span className="lblock">
                <span className="mtitle"> <a name="Intellij 단축키"> 1.Intellij 단축키  </a> </span>
                <p> <a href="https://gmlwjd9405.github.io/2019/05/21/intellij-shortkey.html" target="_blank"> 참고 </a></p>
                <p> <i> Alt + 1 </i>  : Project View 열고 닫기 </p>
                <p>  Ctrl + Shift + T   : 테스트 코드 작성 </p>
                <p> <i> Shift + F6 </i>  : 이름 변경(동일이름 전부 변경) </p>
                <p> <i> Ctrl + D </i>  : 코드 한줄 아래 복사 붙여넣기 </p>
                <p> <i> Ctrl + X </i>  : 코드 한줄 지우기 </p>
                <p> Ctrl + A   : 코드 전체 드래그 </p>
                <p> <i> Ctrl + Alt + l </i>  : 코드 정리 </p>
                <p> <i> Alt + Insert </i>  : 생성자, getter,setter 등 </p>
                <p> <i> Alt + Enter </i>  :  코드 수정 제안 </p>
                <p> <i> Alt + Shift + 방향키 </i>  :  코드 라인 위치 옮기기 </p>
                <p> <i> Ctrl + / </i>  : 해당 줄 주석 처리 </p>
                <p> Ctrl + E   : 최근 실행 파일 확인 </p>
                <p> Ctrl + B   : 코드에서 선택된 필드 코드로 이동 </p>
                <p> Alt + F7   : 항목이 사용된 위치를 모두 표시 </p>
                <p> Ctrl + W   : 코드 주위 영역 드래그 확대 </p>
                <p> Ctrl + Shift + W   : 코드 주위 영역 드래그 축소 </p>
                <p>  Shift + Ctrl + A   : 모든 액션을 검색 가능  </p>
                <p> <i>  </i>  :  </p>
                <p> <i>  </i>  :  </p>
                <span className="mblock">
                    {/* <h3> HTML </h3>
                    <h3> 자바 클래스 </h3> */}
                </span>

            </span>
        </div >
    );
}

export default KeyMap;