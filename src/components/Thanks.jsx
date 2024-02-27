import React from 'react';

const Thanks = (props) => {
    return (
        <div className='absolute flex w-full h-full justify-center items-center flex-col gap-5'>
            <img src={props.ThankYou} alt="" className='size-[100px]' />
            <div className='text-[40px] font-[bold] text-blue-950'>Thank You!</div>
            <div className=' opacity-30 w-[75%] text-center text-[18px] font-[medium] text-blue-950'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</div>
        </div>
    );
}

export default Thanks;
