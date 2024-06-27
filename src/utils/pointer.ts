import { RefObject, useEffect, useState } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 20, stiffness: 200, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
    const xPoint = useMotionValue(0);
    const yPoint = useMotionValue(0);
    const x = useSpring(xPoint, spring);
    const y = useSpring(yPoint, spring);
    const [hovered, setHovered] = useState('');
    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!;

            frame.read(() => {
                xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
                yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
            });
        };

        const handlePointerOver = (event: Event) => {
            setHovered((event.target as HTMLElement).className?.toLowerCase());
        };

        const handlePointerOut = (() => (
            setHovered('')
        ));

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerover", handlePointerOver);
        window.addEventListener("pointerout", handlePointerOut);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerover", handlePointerOver);
            window.addEventListener("pointerout", handlePointerOut);
        };
    }, []);

    return { x, y, hovered };
}
