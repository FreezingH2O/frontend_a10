'use client'
import React from 'react';

export default function InteractiveCard({children,contentName}: 
    {children: React.ReactNode, contentName:string}){

    const onCardMouse= (event: React.SyntheticEvent)=>{
        if(event.type==='mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.add('bg-neutral-200')

            
        }else{
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove('bg-neutral-200')
           
        }
    }
    const select=()=>{
    }
    return (
        <div
        className="rounded-lg bg-white w-full shadow-lg hover:bg-neutral-200"
        onClick={select} 
        onMouseOver={onCardMouse} 
        onMouseOut={onCardMouse}>
        {children}
        </div>
    );
}