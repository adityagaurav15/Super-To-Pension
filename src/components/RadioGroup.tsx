import React, { useState } from "react";
import { CFSCard } from "./Card";

// import {RadioGroup, Radio} from "@nextui-org/react";

export default function App() {
  // const [cas, setCas] = useState("")
  // const retired = event => {
  //   const val = event.target.value
  //   setCas(val)
  //   alert(val)
  //   //alert("hi")
  // }
  const [status, setStatus] = useState(false)
  // const radioHandler = (status) => {
  //   const val = status.target.value
  //   alert(val)
  //   setStatus(val);
  // };
  return (
    <>
      {/* <RadioGroup>
        <Radio value="buenos-aires" onClick={ ()=>{alert("hi")}}>
          <CFSCard type="cardStyleRadio">
            Radio group 1
          </CFSCard>
        </Radio>
        <Radio value="aires" onClick={ ()=>{alert("hello")}}>
          <CFSCard type="cardStyleRadio">
            Radio group 2
          </CFSCard>
        </Radio>
      </RadioGroup> */}
      {/* <div className="w-1/2"> 
        <RadioGroup>
        <input type='radio' value='1' name='radio' id='radio1' className="opacity-0 "/>
        <label htmlFor='radio1' className=" cursor-pointer  bg-gray-200 justify-center items-center peer-checked:bg-rose-500 peer-checked:text-white text-[17px] text-sm font-medium text-gray-900 dark:text-gray-300">
          <CFSCard type="cardStyleRadio" >
            Radio group 1
          </CFSCard>
        </label>

        <Input type='radio' value='2' name='radio'  id='radio2' className="opacity-0"/>
        <label htmlFor='radio2'>
          <CFSCard type="cardStyleRadio" className="peer-checked:bg-red-600">
            Radio group 2
          </CFSCard>
        </label>
        </RadioGroup>
        
      </div> */}

            <div className="w-1/2">
              <div className="text-3xl">Are you still working</div>
                <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="retir"
                      name="default-radio"
                      className=" peer opacity-0"
                      onClick={() => setStatus(true)}
                      //checked={status === "retir"}
                    />
                    <label htmlFor="default-radio-1" className="px-8 py-6 flex cursor-pointer h-25 border-2 border-gray-600 rounded-2xl peer-checked:bg-gray-600 peer-checked:text-white text-2xl font-medium text-gray-700">
                      I have retired
                    </label>
                </div>
                <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="NotRetir"
                      name="default-radio"
                      className=" peer opacity-0"
                      onClick={() => setStatus(false)}
                      //checked={status === "retir"}
                    />
                    <label htmlFor="default-radio-1" className="px-8 py-6 flex cursor-pointer h-25 border-2 border-gray-600 rounded-2xl peer-checked:bg-gray-600 peer-checked:text-white text-2xl font-medium text-gray-700">
                      I have retired
                    </label>
                </div>
                {/* <div>
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="notRetir"
                      name="default-radio"
                      className="peer opacity-0"
                      onClick={radioHandler}
                      checked={status === "notRetir"}
                    />
                    <label htmlFor="default-radio-4" className="px-8 py-6 flex cursor-pointer h-25 border-2 border-gray-600 rounded-2xl peer-checked:bg-gray-600 peer-checked:text-white text-2xl font-medium text-gray-700">
                      I am still working
                    </label>
                </div> */}
                {status && <CFSCard type="cardStyleRadio">
                  You are eligible to open a pension account
                </CFSCard>}
                {/* {status && <CFSCard type="cardStyleRadio">
                  You are eligible to open a pension account 2nd option
                </CFSCard>} */}
                
            </div>
    </>
  );
}
