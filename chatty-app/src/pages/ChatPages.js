import React from 'react'
import { ChatSelect } from '../components/ChatSelect'
import { InboxPeople } from '../components/InboxPeople'
import { Menssages } from '../components/Menssages'
import '../css/chat.css'
export const ChatPages = () => {
    return (
        <div className="messaging">
        <div className="inbox_msg">
            <InboxPeople />
            <ChatSelect/>
            <Menssages />
        </div>


    </div>
    )
}
