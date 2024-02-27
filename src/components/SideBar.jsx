import React from 'react';

const SideBar = (props) => {
    return (
        <div className='sidebar w-[30%] max-md:w-full h-full max-md:h-[20%] max-md:p-4 bg-indigo-600 rounded-[15px] overflow-hidden pl-[50px] pt-[55px] flex flex-col max-md:flex-row max-md:justify-center gap-10 max-sm:h-[100px]'>

            <div className='step1 w-[70%] max-md:w-[15%] max-md:aspect-square flex items-center gap-5 max-md:gap-0 max-md:p-0 max-md:justify-center  max-md:flex-col'>
                <div className={`stepNbr h-full max-md:h-2/3 aspect-square flex justify-ce max-md:p-3 justify-center items-center rounded-full border-2 border-white font-[bold] text-[20px] text-white transition-all ${props.Page == 1 ? `bg-[rgba(115,190,248,0.64)]` : ``}`}>1</div>
                <div className='stepText'>
                    <div className='font-[regular] opacity-50 text-[13px] text-white max-md:hidden'>STEP 1</div>
                    <div className='font-[bold] text-[16px] text-white max-md:hidden'>YOUR INFO</div>
                </div>
            </div>
            <div className='step1 w-[70%] max-md:w-[15%] max-md:aspect-square flex items-center gap-5 max-md:gap-0 max-md:p-0 max-md:justify-center max-md:flex-col'>
            <div className={`stepNbr h-full max-md:h-2/3 aspect-square flex justify-center max-md:p-3 items-center rounded-full border-2 border-white font-[bold] text-[20px] text-white transition-all ${props.Page == 2 ? `bg-[rgba(115,190,248,0.64)]` : ``}`}>2</div>
                <div className='stepText'>
                    <div className='font-[regular] opacity-50 text-[13px] text-white max-md:hidden'>STEP 2</div>
                    <div className='font-[bold] text-[16px] text-white max-md:hidden'>SELECT PLAN</div>
                </div>
            </div>
            <div className='step1 w-[70%] max-md:w-[15%] max-md:aspect-square flex items-center gap-5 max-md:gap-0 max-md:p-0 max-md:justify-center max-md:flex-col'>
            <div className={`stepNbr h-full max-md:h-2/3 aspect-square flex justify-center max-md:p-3 items-center rounded-full border-2 border-white font-[bold] text-[20px] text-white transition-all ${props.Page == 3 ? `bg-[rgba(115,190,248,0.64)]` : ``}`}>3</div>
                <div className='stepText'>
                    <div className='font-[regular] opacity-50 text-[13px] text-white max-md:hidden'>STEP 3</div>
                    <div className='font-[bold] text-[16px] text-white max-md:hidden'>ADD-ONS</div>
                </div>
            </div>
            <div className='step1 w-[70%] max-md:w-[15%] max-md:aspect-square flex items-center gap-5 max-md:gap-0 max-md:p-0 max-md:justify-center max-md:flex-col'>
            <div className={`stepNbr h-full max-md:h-2/3 aspect-square flex justify-center max-md:p-3 items-center rounded-full border-2 border-white font-[bold] text-[20px] text-white transition-all ${props.Page == 4 ? `bg-[rgba(115,190,248,0.64)]` : ``}`}>4</div>
                <div className='stepText'>
                    <div className='font-[regular] opacity-50 text-[13px] text-white max-md:hidden'>STEP 4</div>
                    <div className='font-[bold] text-[16px] text-white max-md:hidden'>SUMMARY</div>
                </div>
            </div>

        </div>
    );
}
export default SideBar;