import React from 'react';
import Button from "@/components/button";
import Txtbox from "@/components/inputs/txtbox";
import TopNav from "@/components/topNav";
import { useEffect, useState } from "react";
import axios from 'axios';  
import createAxiosInstance from "@/components/FetchApi";
import { useRouter } from "next/navigation";
import CustomLoader from '@/components/loader';
const Page = () => {
  
  const router=useRouter();


const [email ,setemail]=useState<string>("")
const [loading, setloading]=useState(false);

const axiosInstance = createAxiosInstance(process.env.NEXT_PUBLIC_API_BASE_URL,"application/json"); 


  const checkEmailApi= async()=>{
    setloading(true); 

    try {
      const response = await axiosInstance.post('Auth/login',email);
      
    } catch (error) {
      return {
        props: {
          error: console.log(error),
        },
      };
    }
    finally{
      setloading(false); 

      router.push("/checkinbox");
    }


  }
  
  
  return (
    <>
      <TopNav />

{
  loading==true?
  (<div>
<CustomLoader/>
  </div>

):
  (
    <div className="LoginCard">
    <p>Login</p>
    <p>For login, no registration is necessary.</p>
    {/* <input type="text" className="LoginCardtext" /> */}
    <Txtbox class="LoginCardtext" onChange={(e:any)=>{
setemail(e.target.value);

    }} name="loginemail"/>
   
    <Button
      title="Sign in"
      customClass="btn btn-active btn-txt mx-468"
      onClick={
        checkEmailApi 
        }
    />
    <Button
      title="Login with Google"
      customClass="btn btn-bord btn-txt mx-468"
      onClick={() => {
        alert();
      }}
      icon="google"
    />
  </div>
  )
}

    
    </>
  );
};

export default Page;
