import React from 'react';

const CollaborationTool_Slack = (props) => {
    return (
        <>
            <div className="common_style">
                <div className='block1'>
                    <details>

                        <summary> 슬랙에서 깃허브 (commit,push,PR) 알림 받기(웹훅 사용) </summary>
                        <div className='block2'>

                            <h2 className='h2'> 📌 설명 </h2>
                            <li> 디스코드 - 서버설정(서버 관리자일때만 가능) - 연동 - 웹 후크 만들기 - 알림할 채널 설정 - 웹 후크 URL복사 </li>
                            <li> 깃허브 - Settings - Webhooks - Add webhook </li>
                            <li> Payload URL : 깃허브 웹 후크 URL붙여넣기/github </li>
                            <li> Content Type : application/json </li>
                            <li> Which events would you like to trigger this webhook? : Send me everything </li>
                            <li> Update webhook 초록 버튼 클릭 </li>
                            <li> 그러면 commit,push 할 때 알림이 옵니다. </li>
                        </div>

                    </details>
                </div>
            </div>
        </>
    );
}

export default CollaborationTool_Slack;