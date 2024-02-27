import React from 'react';

const Buttons = (props) => {
    return (
        <div className='px-[100px] w-full h-full flex flex-row-reverse justify-between items-end max-md:justify-center max-md:p-0 max-md:mt-5 max-sm:mt-[80px]'>
            <button onClick={()=> props.SetPage((page) => page + 1)} className={`text-[15px] font-[bold] bg-blue-700 text-white py-4 px-6 rounded-[10px] ${props.Page == 5 ? `hidden` : ``}`}>
                {
                    props.Page == 4 ? "CONFIRM" : "NEXT PAGE"
                }
            </button>
            <button onClick={()=> props.SetPage((page) => page - 1)} className={`text-[15px] text-blue-950 font-[bold] py-4 px-6 rounded-[10px] ${props.Page == 1 ? `hidden`:``} ${props.Page == 5 ? `hidden` : ``}`}>GO BACK</button>
        </div>
    );
}

export default Buttons;