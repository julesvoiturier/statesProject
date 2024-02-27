import React, {useState} from 'react';

const Summary = (props) => {

    const [totalPrice, setTotalPrice] = useState(props.AddOnPrice1 + props.AddOnPrice2 + props.AddOnPrice3 + props.PlanPrice)

    return (
        <div className='bg-white w-full h-full rounded-[15px] px-[100px] pt-[50px] max-md:p-0'>
            <p className='text-[40px] font-[bold] text-blue-950 max-md:pt-6'>Finishing up</p>
            <p className='text-[16px] opacity-50 text-blue-950'>Double check everything looks OK before confirming</p>
            <div className='bg-slate-100 w-full h-auto mt-[50px] rounded-[10px] px-8 py-6'>
                <div className='border-b-[1px] border-slate-300 flex justify-between'>
                    <div className=' flex flex-col items-start pb-6'>
                        <span className='font-[bold] text-[20px] text-blue-900'>{props.FinalPlan}</span>
                        <button onClick={()=> props.SetPage(2)} className='underline opacity-40'>change</button>
                    </div>
                    <div className='font-[bold] text-blue-900'>
                        ${props.MonthYear == "Month" ? `${props.PlanPrice}/mo` : `${props.PlanPrice}/yr`}
                    </div>
                </div>
                <div className='flex flex-col gap-3 pt-5'>
                    {
                        props.FinalAddOns.map((element, key) => {
                            let price = 0
                            if (element == "Online service"){price = props.AddOnPrice1}
                            if (element == "Larger storage"){price = props.AddOnPrice2}
                            if (element == "Customizable profile"){price = props.AddOnPrice3}
                            return(
                                <div className='flex justify-between items-center'>
                                    <div className='opacity-40'>{element}</div>
                                    <div className='text-blue-900 font-[bold]'>+${props.MonthYear == "Month" ? `${price}/mo` : `${price}/yr`}</div>
                                </div>
                            )
                        })
                    }
                </div>    
            </div>  
            <div className='flex justify-between items-center'>
                <div className='px-8 py-6 opacity-40'>Total (per <span className='lowercase'>{props.MonthYear})</span></div> 
                <div className='px-8 py-6 font-[bold] text-blue-900 text-[20px]'>${props.MonthYear == "Month" ? `${totalPrice}/mo` : `${totalPrice}/yr`}</div> 
            </div>
        </div>
    );
}
export default Summary;