import React from 'react'
import { BoxMenssages } from './BoxMenssages'
import { IncomingMsg } from './IncomingMsg'
import { OutgoingMsg } from './OutgoingMsg'

export const Menssages = () => {
    const msgs = [1,2,3,4,5,6,7,8,9.10];
    return (
        <div className="mesgs">
            <div className="msg_history">
                {
                    msgs.map(msg => (
                        (msg % 2 )
                        ?<IncomingMsg key={msg}/>
                        :<OutgoingMsg key={msg}/>
                    ))
                }
                {/* <IncomingMsg/>
                <OutgoingMsg/> */}
            </div>
          
            <BoxMenssages/>

        </div>

    )
}
