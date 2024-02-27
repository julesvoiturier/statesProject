import React, {useState} from 'react';

const YourInfo = () => {

    const [nameChange, setNameChange] = useState("")
    const [emailChange, setEmailChange] = useState("")
    const [phoneChange, setPhoneChange] = useState("")

    return (
        <div className='bg-white w-full h-full rounded-[15px] px-[100px] pt-[50px] max-md:p-0 max-md:pt-4 max-md:pb-4'>
            <p className='text-[40px] font-[bold] text-blue-950'>Personal info</p>
            <p className='text-[16px] opacity-50 text-blue-950'>Please provide your name, email address, and phone number.</p>

            <div className='w-full flex flex-col mt-[50px] gap-5'>
                <div className='flex flex-col gap-[5px]'>
                    <div className='font-[medium]'>Your name is : {nameChange}</div>
                    <input onChange={(e)=> setNameChange(e.target.value)} className=' focus:outline-purple-500 pl-[20px] w-full border-[1px] border-[rgba(0,0,0,0.42)] h-[60px] rounded-[10px]' type="text" />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <div className='font-[medium]'>Your email is : {emailChange}</div>
                    <input onChange={(e)=> setEmailChange(e.target.value)} className=' focus:outline-purple-500 pl-[20px] w-full border-[1px] border-[rgba(0,0,0,0.42)] h-[60px] rounded-[10px]' type="text" />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <div className='font-[medium]'>Your phone number is : {phoneChange}</div>
                    <input onChange={(e)=> setPhoneChange(e.target.value)} className=' focus:outline-purple-500 pl-[20px] w-full border-[1px] border-[rgba(0,0,0,0.42)] h-[60px] rounded-[10px]' type="text" />
                </div>
            </div>
        </div>
    );
}
export default YourInfo;