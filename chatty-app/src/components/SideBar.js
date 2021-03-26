import React from 'react'
import { SideBarProfileStatus } from './SideBarProfileStatus'

export const SideBar = () => {
    const chats = [1,2,3,4,5,6] 
    return (
        <div className="inbox_chat">
            {
                chats.map( ( chat ) =>(
                    <SideBarProfileStatus key={ chat }/>
                ))
            }
            
            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>
        </div>

    )
}
