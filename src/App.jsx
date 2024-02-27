import { useState, useEffect } from 'react'
import './App.css'

//! COMPONENTS IMPORT
import SideBar from './components/SideBar'
import YourInfo from './components/YourInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Thanks from './components/Thanks'
import Buttons from './components/Buttons'


//! IMG IMPORT
import IconAdvanced from './assets/Form_project/img_form/icon-advanced.svg'
import IconArcade from './assets/Form_project/img_form/icon-arcade.svg'
import IconPro from './assets/Form_project/img_form/icon-pro.svg'
import ThankYou from './assets/Form_project/img_form/icon-thank-you.svg'

function App() {

  const [page, setPage] = useState(1)

  const [selected, setSelected] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState("Arcade")
  
  const [monthYear, setMonthYear] = useState("")
  const [plan, setPlan] = useState(true)
  const [finalPlan, setFinalPlan] = useState([])
  const [planPrice, setPlanPrice] = useState(0)

  const [addOn1, setAddOn1] = useState(false)
  const [addOn2, setAddOn2] = useState(false)
  const [addOn3, setAddOn3] = useState(false)
  const [addOnPrice1, setAddOnPrice1] = useState(0)
  const [addOnPrice2, setAddOnPrice2] = useState(0)
  const [addOnPrice3, setAddOnPrice3] = useState(0)

  const [finalAddOns, setFinalAddOns] = useState([])
  const [addOnsPrice, setAddOnsPrice] = useState(0)

  useEffect(() => {

    setFinalPlan(`${selectedPlan}(${monthYear}ly)`)
    let newArray = []
    if (addOn1) { newArray.push("Online service")}
    if (addOn2) { newArray.push("Larger storage")}
    if (addOn3) { newArray.push("Customizable profile")}
    setFinalAddOns(newArray)

    if (addOn1 == true) {
      monthYear == "Month" ? setAddOnPrice1(1) : setAddOnPrice1(1*10)
    } else {
      setAddOnPrice1(0)
    }
    if (addOn2 == true) {
      monthYear == "Month" ? setAddOnPrice2(2) : setAddOnPrice2(2*10)
    } else {
      setAddOnPrice2(0)
    }
    if (addOn3 == true) {
      monthYear == "Month" ? setAddOnPrice3(2) : setAddOnPrice3(2*10)
    } else {
      setAddOnPrice3(0)
    }
  }, [addOn1, addOn2, addOn3, monthYear, selectedPlan]);

  return (
    <div className='App w-screen h-screen max-md:h-[950px] bg-[#f2f2f2]'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[65%] max-md:w-[80%] max-sm:w-full h-[70%] max-md:h-[80%] bg-white rounded-[30px] overflow-hidden p-4 max-sm:p-4'>
          <div className='w-full h-full rounded-[15px] flex max-md:flex-col max-md:p-4'>
            <SideBar Page={page}/>
            <div className='w-[70%] h-[100%] pl-4 relative max-md:w-full max-md:h-[80%] max-md:px-0 max-sm:h-[90%]'>
              <div className='h-[80%] w-full'>
                {page == 1 ? <YourInfo/> : ""}
                {page == 2 ? <SelectPlan plan={plan} setPlan={setPlan} setSelected={setSelected} selected={selected} IconAdvanced={IconAdvanced} IconArcade={IconArcade} IconPro={IconPro} SetSelectedPlan={setSelectedPlan} SetMonthYear={setMonthYear} MonthYear={monthYear} SetPlanPrice={setPlanPrice}/> : ""}
                {page == 3 ? <AddOns SetAddOn1={setAddOn1} SetAddOn2={setAddOn2} SetAddOn3={setAddOn3} AddOn1={addOn1} AddOn2={addOn2} AddOn3={addOn3} SetAddOnPrice1={setAddOnPrice1} SetAddOnPrice2={setAddOnPrice2} SetAddOnPrice3={setAddOnPrice3} MonthYear={monthYear}/> : ""}
                {page == 4 ? <Summary SetPage={setPage} FinalPlan={finalPlan} FinalAddOns={finalAddOns} MonthYear={monthYear} PlanPrice={planPrice} AddOnPrice1={addOnPrice1} AddOnPrice2={addOnPrice2} AddOnPrice3={addOnPrice3}/> : ""}
                {page == 5 ? <Thanks ThankYou={ThankYou}/> : ""} 
              </div>
              <div className='buttons h-[20%] max-md:h-[20%] max-md:pb-4 max-sm:h-[10%]'>
                <Buttons Page={page} SetPage={setPage}/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App