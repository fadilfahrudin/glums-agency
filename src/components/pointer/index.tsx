import "./pointer.scss";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../utils/pointer";

export default function Pointer() {
    const ref = useRef(null);
    const { x, y, hovered } = useFollowPointer(ref);
    const [otherClass, setOtherClass] = useState("");
    useEffect(() => {
        switch (hovered) {
            case "text-pointer":
                setOtherClass("text-item");
                break;
            case "text-secondline":
                setOtherClass("text-item");
                break;
            case "headeline__about":
                setOtherClass("text-item");
                break;
            case "wording__p":
                setOtherClass("text-item");
                break;
            case "menu-footer":
                setOtherClass("footer-list");
                break;
            case "footer-list-a":
                setOtherClass("footer-list");
                break;
            case "list-footer":
                setOtherClass("footer-list");
                break;
            case "slidebtn-img":
                setOtherClass("hide");
                break;
            case "slide-btn__about ":
                setOtherClass("hide");
                break;
            case "slide-btn__about disabled":
                setOtherClass("hide");
                break;
            case "text-action":
                setOtherClass("small");
                break;
            case "show-more__about":
                setOtherClass("small");
                break;
            case "show-more__service":
                setOtherClass("small");
                break;
            case "item__name":
                setOtherClass("small");
                break;
            case "small-pointer":
                setOtherClass("small");
                break;
            case "arrowwrap__animate":
                setOtherClass("small");
                break;
            case "arrow__item":
                setOtherClass("small");
                break;
            case "arrows-icon":
                setOtherClass("small");
                break;
            case "btn-submit":
                setOtherClass("small");
                break;
            default:
                setOtherClass(" ");
                break;
        }
    }, [hovered]);
    return <motion.div
        ref={ref} className={`box ${otherClass}`} style={{ x, y }}

    />;
}
