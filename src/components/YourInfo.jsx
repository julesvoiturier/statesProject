import React, {useState, useRef, useEffect} from 'react';

const YourInfo = (props) => {

    const input1 = useRef(null)
    const input2 = useRef(null)
    const input3 = useRef(null)

    useEffect(() => {
        input1.current.value = props.nameChange
        input2.current.value = props.emailChange
        input3.current.value = props.phoneChange
    }, [props.nameChange, props.emailChange, props.phoneChange]);
    

    return (
        <div className='bg-white w-full h-full rounded-[15px] px-[100px] pt-[50px] max-md:p-0 max-md:pt-4 max-md:pb-4 max-sm:h-[400px]'>
            <p className='text-[40px] font-[bold] text-blue-950'>Personal info</p>
            <p className='text-[16px] opacity-50 text-blue-950'>Please provide your name, email address, and phone number.</p>

            <div className='w-full flex flex-col mt-[50px] gap-5'>
                <div className='flex flex-col gap-[5px]'>
                    <div className='font-[medium] text-blue-950'>Your name is : <span className='text-purple-500'>{props.nameChange}</span></div>
                    <input ref={input1} placeholder='Your name' onChange={(e)=> props.setNameChange(e.target.value)} className=' focus:outline-purple-500 focus:outline-[1px] outline-[1px] pl-[20px] w-full border-[1px] border-slate-300 h-[60px] max-sm:h-[50px] rounded-[10px]' type="text" />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <div className='font-[medium] text-blue-950'>Your email is : <span className='text-purple-500'>{props.emailChange}</span></div>
                    <input type="email" ref={input2} placeholder='Your email address' onChange={(e)=> props.setEmailChange(e.target.value)} className=' focus:outline-purple-500 focus:outline-[1px] outline-[1px] pl-[20px] w-full border-[1px] border-slate-300 h-[60px] max-sm:h-[50px] rounded-[10px]' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <div className='font-[medium] text-blue-950'>Your phone number is : <span className='text-purple-500'>{props.phoneChange}</span></div>
                    <input ref={input3} placeholder='Your phone number' onChange={(e)=> props.setPhoneChange(e.target.value)} className='nbrInput focus:outline-purple-500 focus:outline-[1px] outline-[1px] pl-[20px] w-full border-[1px] border-slate-300 h-[60px] max-sm:h-[50px] rounded-[10px]' type="number" />
                </div>
            </div>
        </div>
    );
}
export default YourInfo;