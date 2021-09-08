import React from 'react';
import './CssBlurBusinessCard.css';

const CssBlurBusinessCard = (props) => {

    return (
        <>

            <div className="common_style" >
                <div className="ex_container">
                    <div className="card">
                        {/* transform: rotate(calc(90deg * var(--i)));  */}
                        <span> </span> {/* html 코드 : style="--i:0;"*/}
                        <span> </span>  {/* html 코드 : style="--i:0;"*/}
                        <span> </span>  {/* html 코드 : style="--i:0;"*/}
                        <span> </span>  {/* html 코드 : style="--i:0;"*/}
                        <div className="glass">
                            <h2> 이수경 <br /> <i> +82 010-7430-9809 </i> </h2>
                        </div>
                    </div>
                    <div className="red"> red </div>
                </div>
            </div>
        </>
    );
}

export default CssBlurBusinessCard;