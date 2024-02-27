import React, {useEffect, useState} from 'react';

const AddOns = (props) => {

    const [price1, setPrice1] = useState(0)
    const [price2, setPrice2] = useState(0)
    const [price3, setPrice3] = useState(0)

    useEffect(() => {
        props.MonthYear == "Month" ? setPrice1(1) : setPrice1(1*10)
        props.MonthYear == "Month" ? setPrice2(2) : setPrice2(2*10)
        props.MonthYear == "Month" ? setPrice3(2) : setPrice3(2*10)
    }, [props.MonthYear, price1, price2, price3]);

    return (
        <div className='bg-white w-full h-full rounded-[15px] px-[100px] pt-[50px] max-md:p-0'>
            <p className='text-[40px] font-[bold] text-blue-950 max-md:pt-6 max-sm:h-[100px]'>Pick add-ons</p>
            <p className='text-[16px] opacity-50 text-blue-950'>Add-ons help enhance your gaming experience</p>
            <div className='w-full h-[] mt-[50px] flex flex-col gap-4'>
                
                <div onClick={()=> props.SetAddOn1(!props.AddOn1)} className={`w-full h-[90px] max-sm:h-[100px] border-[1px] border-slate-300 flex items-center px-6 justify-between rounded-[10px] ${props.AddOn1 == true ? `border-purple-500`:``}`}>
                    <div className='flex items-center gap-6'>
                        <input type='checkbox' checked={props.AddOn1} className='size-[15px] accent-purple-500'></input>
                        <div className='flex flex-col pr-4'>
                            <div className='font-[bold] text-[20px] max-sm:text-[16px]'>Online service</div>
                            <div className='font-[regular] text-[18px] max-sm:text-[16px]'>Access to multiplayer games</div>
                        </div>
                    </div>
                    <div className='text-purple-500 font-[medium]'>{props.MonthYear == "Month" ? `+$${price1}/mo` : `+$${price1}/yr`}</div>
                </div>

                <div onClick={()=> props.SetAddOn2(!props.AddOn2)} className={`w-full h-[90px] max-sm:h-[100px] border-[1px] border-slate-300 flex items-center justify-between px-6 rounded-[10px] ${props.AddOn2 == true ? `border-purple-500`:``}`}>
                    <div className='flex items-center gap-6'>
                        <input type='checkbox' checked={props.AddOn2} className='size-[15px] accent-purple-500'></input>
                        <div className='flex flex-col'>
                            <div className='font-[bold] text-[20px] max-sm:text-[16px]'>Larger storage</div>
                            <div className='font-[regular] text-[18px] max-sm:text-[16px]'>Extra 1TB of cloud save</div>
                        </div>
                    </div>
                    <div className='text-purple-500 font-[medium]'>{props.MonthYear == "Month" ? `+$${price2}/mo` : `+$${price2}/yr`}</div>
                </div>

                <div onClick={()=> props.SetAddOn3(!props.AddOn3)} className={`w-full h-[90px] max-sm:h-[100px] border-[1px] border-slate-300 flex items-center justify-between px-6 rounded-[10px] ${props.AddOn3 == true ? `border-purple-500`:`` }`}>
                    <div className='flex items-center gap-6'>
                        <input type='checkbox' checked={props.AddOn3} className='size-[15px] accent-purple-500'></input>
                        <div className='flex flex-col '>
                            <div className='font-[bold] text-[20px] max-sm:text-[16px]'>Customizable profile</div>
                            <div className='font-[regular] text-[18px] max-sm:text-[16px]'>Custom theme on your profile</div>
                        </div>
                    </div>
                    <div className='text-purple-500 font-[medium]'>{props.MonthYear == "Month" ? `+$${price3}/mo` : `+$${price3}/yr`}</div>
                </div>

            </div>
        </div>
    );
}

export default AddOns;
