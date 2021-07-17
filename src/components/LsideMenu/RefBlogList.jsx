import React from 'react';

const RefBlogList = (props) => {
    function send(page2) {
        props.onChangePage(page2)
    }

    return (
        <div className="refbloglist">
            <button onClick={() => { send('refblog') }}> 참고 블로그 </button>
        </div>
    );
}

export default RefBlogList;