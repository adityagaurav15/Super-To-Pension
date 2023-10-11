import { CardBody, CardHeader } from "@nextui-org/react";
import { CFSCard } from "./Card";
import { CFSButton } from "./Button";
import {Image} from "@nextui-org/react";
import img from '../image/dooooooo.png'
//import { useNavigate } from "react-router-dom";

function StartApplication() {
    //const navigate = useNavigate();
    const cardClick = () => {
        alert("Hi.. You are an Adviser");
        //navigate("/eligible");
    };
  return (
    <>
    <div className="text-white text-2xl ml-10 w-40">
        <p className="bg-neutral-600">Colonial</p>
        <p className="bg-neutral-700">First State</p>
    </div>
    <div className="bg-gray-100 p-8">
      <p className="text-4xl">Open account -based position</p>
      <p>Welcome to the start of your retirements journey Aditya, you are about to open account-based pension.Bedore you start, please consider the following:</p>
      <div className="m-10 bg-white px-20 py-10 rounded-2xl">
        <CFSCard onPress={cardClick}>
          <CardHeader>
            <Image className="w-3/12"
              width={300}
              alt="NextUI hero Image"
              src={img}
            />
            <p>You have an adviser.</p>
            </CardHeader>
            <CardBody>
              <p>Our Record show that MR SMITH has been managing .. ajsghd hdhgetdf jue6tvhd jsy</p>
            </CardBody>        
        </CFSCard>
        <CFSCard type="cardStyle">
          <div className="flex">
          <CardHeader>
            <Image height="100" width="100"
              alt="NextUI hero Image"
              src={img}
            />
          </CardHeader>
          <CardBody>
            <p>Last chance to top up super</p>
            <br></br>
            <p>Welcome to the start of your retirements journey Aditya, you are about to open account-based pension.Bedore you start, please consider the following:</p>
          </CardBody>
          </div>
        </CFSCard>
        <div className="flex gap-20">
          <CFSCard type="cardStyle2" className="w-1/2">
            <div className="flex justify-center">
            <Image height="100" width="100" 
              alt="NextUI hero Image"
              src={img}
            />
            </div>
            <CardHeader>Consider your insurance needs</CardHeader>
            <CardBody>sdhdhdfhfdhfdhjhhjvh dhjv </CardBody>
          </CFSCard>
          <CFSCard className="w-1/2">
            <CardHeader>Have youer Id handy</CardHeader>
            <CardBody>123</CardBody>
          </CFSCard>
        </div>
        <div className="flex justify-center mt-10">
          <CFSButton type="primary" className="w-1/2 h-20" onClick={cardClick}>
            Start Application
          </CFSButton>
        </div>
      </div>
    </div>
    </>
  );
}

export default StartApplication;
