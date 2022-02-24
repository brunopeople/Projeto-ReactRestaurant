import React from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constrants';
import './Intro.css';

const Intro = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();

    return(
        <div className="app__video">
            <video 
            ref={videRef}
            src={meal}
            type="video/mp4"
            loop 
            controls={false}
            muted
            />

            <div className="app__video-overlay flex__center">
                onClick={() => {
                    setPlayVideo(!playVideo);
                    if(playVideo){
                        vidRef.current.pause();
                    }else {
                        vidRef.current.play();
                    }
                }}

                >
                {playVideo ? (
                    <BsPauseFill color="#fff" fontSize={30} />
                ) : (
                    <BsFillPlayFill color="#fff" fontSize={30} />
                )}
            </div>
        </div>
    );
};

export default Intro;