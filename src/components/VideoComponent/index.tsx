import { useEffect, useRef } from "react";

const VideoComponent = ({ src }: { src: string }) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;

        if (video) {
            // Set muted to ensure autoplay on iOS
            video.muted = true;

            // Try to play the video and handle any possible promise rejection
            const playPromise = video.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log("Video is playing.");
                    })
                    .catch(error => {
                        console.log("Failed to play the video.", error);
                    });
            }
        }
    }, []);

    return (
        <video ref={ref} width="320" height="240" loop autoPlay muted>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoComponent;
