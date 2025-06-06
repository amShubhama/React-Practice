import React from 'react'
import './Timer.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
const Timer = () => {
    const [target, setTarget] = useState('');
    const [diff, setDiff] = useState(0);
    const id = useRef(0);
    const handleStart = () => {
        if (diff !== 0) clearInterval(id.current);
        id.current = setInterval(() => {
            setDiff((new Date(target) - new Date()) / 1000);
        }, 1000)
    }
    useEffect(() => {
        if (diff < 0) {
            clearInterval(id.current);
        }
    }, [diff]);


    function getDays() {
        return Math.floor(diff / (60 * 60 * 24));
    }

    function getHours() {
        return Math.floor((diff % (60 * 60 * 24)) / 3600);
    }

    function getMinutes() {
        return Math.floor((diff % 3600) / 60)
    }

    function getSeconds() {
        return Math.floor(diff % 60);
    }

    return (
        <>
            <div className='container'>
                <div className='time-input-wrapper'>
                    <input type="datetime-local"
                        onChange={(event) => setTarget(event.target.value)}
                        value={target}
                        min={new Date().toISOString().slice(0, 16)}
                    />
                </div>
                <button onClick={handleStart}>Start</button>
            </div>
            <div className='timerContainer'>
                <div className='listContainer'>
                    <div className='list'>
                        <span>{getDays() < 0 ? 0 : getDays()}</span>
                        <span>days</span>
                    </div>
                    <div className='list'>
                        <span>{getHours() < 0 ? 0 : getHours()}</span>
                        <span>hours</span>
                    </div>
                    <div className='list'>
                        <span>{getMinutes() < 0 ? 0 : getMinutes()}</span>
                        <span>minutes</span>
                    </div>
                    <div className='list'>
                        <span>{getSeconds() < 0 ? 0 : getSeconds()}</span>
                        <span>seconds</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Timer;