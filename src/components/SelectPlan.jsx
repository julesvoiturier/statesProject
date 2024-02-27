import React, {useEffect, useState, useRef} from 'react';

const SelectPlan = (props) => {

    
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const [arcadePrice, setArcadePrice] = useState(9)
    const [advancedPrice, setAdvancedPrice] = useState(12)
    const [proPrice, setProPrice] = useState(15)
    // const [selected, setSelected] = useState(1)

    useEffect(() => {
        props.selected == 1 ? ref1.current.classList.add("bg-blue-50", "border-purple-400") : ref1.current.classList.remove("bg-blue-50", "border-purple-400")
        props.selected == 2 ? ref2.current.classList.add("bg-blue-50", "border-purple-400") : ref2.current.classList.remove("bg-blue-50", "border-purple-400")
        props.selected == 3 ? ref3.current.classList.add("bg-blue-50", "border-purple-400") : ref3.current.classList.remove("bg-blue-50", "border-purple-400")

        props.plan == true ? props.SetMonthYear("Month") : props.SetMonthYear("Year")
        if (props.selected == 1) {
            props.plan == true ? props.SetPlanPrice(arcadePrice) : props.SetPlanPrice(arcadePrice*10)
        } else if (props.selected == 2){
            props.plan == true ? props.SetPlanPrice(advancedPrice) : props.SetPlanPrice(advancedPrice*10)
        } else if(props.selected == 3){
            props.plan == true ? props.SetPlanPrice(proPrice) : props.SetPlanPrice(proPrice*10)
        }
    }, [props.selected, props.plan]);

    return (
        <div className='bg-white w-full h-full rounded-[15px] px-[100px] pt-[50px] max-md:p-0 max-md:pt-6'>
            <p className='text-[40px] font-[bold] text-blue-950'>Select your plan</p>
            <p className='text-[16px] opacity-50 text-blue-950'>You have the option of monthly or yearly billing</p>

            <div className='w-full h-[200px] mt-[50px] flex gap-4 max-sm:flex-col'>
                <button onClick={()=> {props.setSelected(1); props.SetSelectedPlan("Arcade")}} ref={ref1} className='max-sm:w-full max-sm:h-[80px] max-sm:items-end max-sm:justify-center border-[1px] transition-all p-5 relative button1 h-full w-1/3 rounded-[15px] flex flex-col justify-end'>
                    <img className='w-[50px] absolute top-[10px] left-[10px]' src={props.IconArcade} alt="" />
                    <div className='text-[20px] font-[bold] text-blue-950'>Arcade</div>
                    <div className='font-[medium] text-slate-400'>${props.plan == true ? `${arcadePrice}/mo` : `${arcadePrice*10}/yr`}</div>
                </button>
                <button onClick={()=> {props.setSelected(2); props.SetSelectedPlan("Advanced")}} ref={ref2} className='max-sm:w-full max-sm:h-[80px] max-sm:items-end max-sm:justify-center border-[1px] transition-all p-5 relative button2 h-full w-1/3 rounded-[15px] flex flex-col justify-end'>
                    <img className='w-[50px] absolute top-[10px] left-[10px]' src={props.IconAdvanced} alt="" />
                    <div className='text-[20px] font-[bold] text-blue-950'>Advanced</div>
                    <div className='font-[medium] text-slate-400'>${props.plan == true ? `${advancedPrice}/mo` : `${advancedPrice*10}/yr`}</div>
                </button>
                <button onClick={()=> {props.setSelected(3); props.SetSelectedPlan("Pro")}} ref={ref3} className=' max-sm:w-full max-sm:h-[80px] max-sm:items-end max-sm:justify-center border-[1px] transition-all p-5 relative button3 h-full w-1/3  rounded-[15px] flex flex-col justify-end'>
                    <img className='w-[50px] absolute top-[10px] left-[10px]' src={props.IconPro} alt="" />
                    <div className='text-[20px] font-[bold] text-blue-950'>Pro</div>
                    <div className='font-[medium] text-slate-400'>${props.plan == true ? `${proPrice}/mo` : `${proPrice*10}/yr`}</div>
                </button>

            </div>

            <div className='w-full h-[60px] bg-blue-50 mt-[30px] flex justify-evenly items-center rounded-[10px] max-sm:mt-[120px]'>
                <span className={` transition-all text-[18px] font-[medium] text-blue-950 ${props.plan == true? `opacity-100`: `opacity-20`}`}>Monthly</span>
                <button className='relative h-[25px] w-[50px] border-2 border-blue-950 rounded-full bg-blue-950' onClick={()=> props.setPlan(!props.plan)}>
                    <div className={`h-full aspect-square bg-white rounded-full absolute top-0 bottom-0 transition-all  ${props.plan == true ? `left-[0%]` : `left-[55%]`}`}></div>
                </button>
                <span className={`transition-all text-[18px] font-[medium] text-blue-950 ${props.plan == !true? `opacity-100`: `opacity-20`}`}>Yearly</span>
            </div>
        </div>
    );
}
export default SelectPlan;