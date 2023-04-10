import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import axios from 'axios'

import { useAuth } from '../contexts/AuthContext'

const Chats = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/')
    }

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob();

        return new File([data], 'userPhoto.jpg', {type: 'image/jpeg'})
    }

    useEffect(() => {
        if(!user){
            navigate('/')
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers:{
                'project-id': process.env.REACT_APP_CHAT_ENGINE_ID,
                'user-name': user.email,
                'user-secret': user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email)
            formdata.append('username', user.email)
            formdata.append('secret', user.uid)

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name)

                    axios.post('https://api.chatengine.io/users/', 
                        formdata,
                        {headers: {'private-key': process.env.REACT_APP_CHAT_ENGINE_KEY}}     
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
        })
    },[user, navigate])

    if(!user || loading ) return 'Loading...'

    return(
        <div className='h-screen chats-page'>
            <div className="flex justify-between items-center h-[66px] navbar">
                <div className='ml-4 text-[33px]'>
                    CHAT APP
                </div>
                <div onClick={handleLogout} className='text-center pt-1 border-2 border-[#696969] rounded-full h-8 w-[120px] text-[#696969] hover:border-[#141414] hover:text-[#141414] mr-4'>
                    <p>Logout</p>
                </div>
            </div>

            <ChatEngine 
                height='calc(100vh - 66px)'
                projectID = {process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}

export default Chats