import { Card } from "@nextui-org/react";
import { useState } from "react";
import { CFSCard } from "./Card";
//import { CFSCard } from "./Card";

function EligiblePage() {
  const [handleRadio, setHandleRadio] = useState()
  const [working, setWorking] = useState()
  return (
    <>
    <div className="text-white text-2xl ml-10 p-5 w-44">
        <p className="bg-neutral-600">Colonial</p>
        <p className="bg-neutral-700">First State</p>
    </div>
    <div className="bg-gray-100">
      <div className="mx-28 py-24">
        <p className="text-4xl">Find out if you're eligible</p>
        <Card className="grid grid-cols-2 mt-14">
          <div className=" p-12">
            <p className="text-2xl">Are you still working?</p>
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value="1"
                name="default-radio"
                className=" peer opacity-0"
                onClick={e => setHandleRadio(e.target.value)}
                //checked={status === "retir"}
              />
              <label htmlFor="default-radio-1" className="px-8 py-6 flex cursor-pointer h-25 border-2 border-gray-600 rounded-2xl peer-checked:bg-gray-600 peer-checked:text-white text-2xl font-medium text-gray-700">
                I have retired
              </label>
            </div>
            <div>
              <input
                id="default-radio-2"
                type="radio"
                value="0"
                name="default-radio"
                className=" peer opacity-0"
                onClick={e => setHandleRadio(e.target.value)}
                //checked={status === "retir"}
              />
              <label htmlFor="default-radio-2" className="px-8 py-6 flex cursor-pointer h-25 border-2 border-gray-600 rounded-2xl peer-checked:bg-gray-600 peer-checked:text-white text-2xl font-medium text-gray-700">
                I have retired
              </label>
            </div>
            { handleRadio === "1" &&
            <CFSCard type="cardStyleRadio">You are eligible to open a pension account</CFSCard>
            }
            { handleRadio === "0" &&
              <div className="">
              <p className="text-2xl mt-10">Since turning 60, have you changed employers or at any point stopped working?</p>
              <div>
                <input
                  id="default-radio-3"
                  type="radio"
                  value="Yes"
                  name="default-radio2"
                  className=" peer opacity-0"
                  onClick={e => setWorking(e.target.value)}
                  //checked={status === "retir"}
                />
                <label htmlFor="default-radio-3" className="px-8 py-6 flex cursor-pointer h-25 border-2 border-gray-600 rounded-2xl peer-checked:bg-gray-600 peer-checked:text-white text-2xl font-medium text-gray-700">
                  Yes
                </label>
              </div>
              <div>
                <input
                  id="default-radio-4"
                  type="radio"
                  value="No"
                  name="default-radio2"
                  className=" peer opacity-0"
                  onClick={e => setWorking(e.target.value)}
                  //checked={status === "retir"}
                />
                <label htmlFor="default-radio-4" className="px-8 py-6 flex cursor-pointer h-25 border-2 border-gray-600 rounded-2xl peer-checked:bg-gray-600 peer-checked:text-white text-2xl font-medium text-gray-700">
                  No
                </label>
              </div>
              { working === "Yes" &&
              <CFSCard type="cardStyleRadio">You are eligible to open a pension account</CFSCard>
              }
              { working === "No" &&
              <CFSCard type="cardStyleRadio">You do not meet eligiblity criteria You do not meet eligiblity criteria You do not meet eligiblity criteria You do not meet eligiblity criteria</CFSCard>
              }
            </div>
            }
          </div>
          <div className="bg-red-200"></div>
        </Card>
      </div>
    </div>
    </>
  );
}
export default EligiblePage;
