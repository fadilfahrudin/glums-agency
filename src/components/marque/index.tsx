import React from "react";
import "./marquee.scss";
const Marquee = ({ children }: { readonly children: React.ReactNode }) => {
    return (
        <div className="marquee-container" >
            <div className="marquee">
                {children}
            </div>
            <div className="marquee">
                {children}
            </div>
            <div className="marquee">
                {children}
            </div>
        </div>
    );
};


export default Marquee;
