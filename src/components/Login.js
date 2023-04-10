import React, {useState, useEffect} from 'react'
import firebase from 'firebase/compat/app'
import {auth} from '../firebase'

import { heroMobile, heroDesktop } from '../assests'

const Login = () => {
    const [imageSrc, setImageSrc] = useState(heroDesktop);

    useEffect(() => {
        function handleResize() {
        if (window.innerWidth < 880) {
            setImageSrc(heroMobile);
        } else {
            setImageSrc(heroDesktop);
        }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className='flex flex-col lg:flex-row gap-10 login-page'>
            <div>
                <img className='object-contain md:mx-auto lg:h-screen' src={imageSrc} alt='hero'/>
            </div>
            <div className='flex-col justify-around'>
                <div className='my-10 mx-2 lg:mx-0 text-center lg:text-start'>
                    <h1 className='text-[34px]'>Create Account.</h1>
                    <h4 className='text-[20px]'>Start a conversation with your friends.</h4>
                </div>
                <div className='mx-10 flex-col text-center lg:text-start lg:mx-0'>
                    <h4 className='mb-4'>Continue with...</h4>
                    <button 
                        className='items-center border-2 border-[#696969] rounded-full h-12 w-[150px] px-4 text-[#696969] hover:border-[#141414] hover:text-[#141414]'
                        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login