import React from 'react';

const ReactFetchAPI = (props) => {

    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> fetch api 사용방법 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <div className="block4">
                            <li> useEffect(() {'=> {'}
                                <li> fetch("http://127.0.0.1:8080/hello") </li>
                                <li> .then(response {'=> {'}
                                    <li> if (!response.ok) {"{"}
                                        <li> throw Error("비어있어"); </li>
                                    </li>
                                    <li> {"}"} </li>
                                    <li> return response.json(); </li>
                                </li>
                                <li> {"}"}) </li>
                                <li> .then(message {'=> {'}
                                    <li> setMessage(message); </li>
                                </li>
                                <li> {'}'}) </li>
                                <li> .catch(err {"=> {"}
                                    <li> setMessage("비어있어"); </li>
                                </li>
                                <li> {"}"}) </li>
                            </li>
                            <li> {"}"}, []) </li>
                        </div>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default ReactFetchAPI;