import "./pointer.scss";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../utils/pointer";

export default function Pointer() {
    const ref = useRef(null);
    const { x, y, hovered } = useFollowPointer(ref);
    const [otherClass, setOtherClass] = useState("");
    useEffect(() => {
        console.log(hovered)
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
            case "footer-list":
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
            case "item__name":
                setOtherClass("small");
                break;
            case "small-ponter":
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
