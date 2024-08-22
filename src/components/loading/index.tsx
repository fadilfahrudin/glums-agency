import { useEffect, useState } from "react";
import "./loading.scss";
import {  motion, useMotionValue } from "framer-motion";
import { useAppDispatch } from "../../utils/reduxHooks";
import { setLoading } from "../../utils/redux/slice/loadingSlice";

const Loading = ({ fetchDuration }: { fetchDuration: number }) => {
    const [percentage, setPercentage] = useState(0);
    const pathLength = useMotionValue(0);
    const dispatch = useAppDispatch()

    useEffect(() => {
        const animationDuration = fetchDuration / 1000;

        const interval = setInterval(() => {
            setPercentage(prev => {
                const newPercentage = Math.min(prev + 1, 100)
                pathLength.set(newPercentage / 100);
                return newPercentage
            });
        }, (animationDuration * 1000) / 100);

        return () => clearInterval(interval);
    }, [fetchDuration, pathLength]);


    useEffect(() => {
        if (percentage === 100) {
            setTimeout(() => {
                dispatch(setLoading(false))
            }, 500)
        }
    }, [percentage, dispatch])

    return (
        <motion.div animate={{ y: 0 }} initial={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.5 }} className="loadingWrap">
            <figure className="progress">
                <span className="percent">{percentage}%</span>
                <svg id="progress" width="131" height="131" viewBox="0 0 100 100">
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        pathLength="1"
                        className="indicator"
                        initial={{ pathLength: 0 }}
                        style={{ pathLength: pathLength }}
                    />
                </svg>
            </figure>
        </motion.div>
    )
}

export default Loading