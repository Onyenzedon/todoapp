import React, { useEffect, useState } from 'react'

const Pomodoro = ({show, setShow}) => {
    const[minutes, setMinutes] = useState(1);
    const[seconds, setSeconds] = useState(10);
    const[displayMessage, setDisplayMessage] = useState(false);
    // const[show, setShow] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if(seconds === 0){
                if(minutes !== 0){
                    setSeconds(59);
                    setMinutes(minutes-1);
                } else{
                    let minutes = displayMessage ? 5 : 4;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            } else{
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [minutes, seconds, displayMessage]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
        <div>
            {displayMessage && <div>Break Time! New Session Will Start In</div> }
            {displayMessage && minutes === 0 && seconds < 10 && <div>Time Up!</div> }
        </div>
        <div>
            {timerMinutes}:{timerSeconds}
        </div>
        
    </div>
  )
}

export default Pomodoro