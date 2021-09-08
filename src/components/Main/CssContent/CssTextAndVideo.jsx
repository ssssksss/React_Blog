import React, { useEffect } from 'react';
import './CssTextAndVideo.css';
const CssTextAndVideo = (props) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./CssTextAndVideo js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, ["./CssTextAndVideo js"]);

    return (
        <>
            <div className="common_style" >
                <section className="MainContainer" onMouseMove={(e) => {
                    const dot = document.querySelector('.dot');
                    dot.style.left = (e.clientX) + 'px';
                    dot.style.top = e.clientY + 'px';
                }}>
                    <div className="dot">
                        123
                    </div>
                </section>
            </div>
        </>
    );
}

export default CssTextAndVideo;
