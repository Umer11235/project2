import createAxiosInstance from "@/components/FetchApi";
import Button from "@/components/button";
import Txtbox from "@/components/inputs/txtbox";
import CustomLoader from "@/components/loader";
import TopNav from "@/components/topNav";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from 'js-cookie';


const Page = () => {
  
  const axiosInstance = createAxiosInstance(process.env.NEXT_PUBLIC_API_BASE_URL,"application/json"); 
  const [otpValues, setOtpValues] = useState(['', '', '']); 
  const [loading, setloading]=useState(false);
  const router=useRouter();


  const handleOtpChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  
  };

  const combinedOtp = otpValues.join('');


  const checkotpApi=async()=>{
    try {
   console.log(combinedOtp);

      const response = await axiosInstance.post('Auth/OtpCheck',combinedOtp).then((res)=>{

        Cookies.set('userData',JSON.stringify(res.data),{ expires: 1, path: '/' });
        alert('OTP Verified! User data stored in cookie.');


      });
      
    } catch (error) {
      return {
        props: {
          error: console.log(error),
        },
      };
    }
    finally{
      router.push("/manage");

      setloading(true); 

      router.push("/checkinbox");
    }


  }




  return (
    <>
      <TopNav />

{loading==true?
(<CustomLoader/>):
(  <div className="LoginCard">
        <p className="logincard_ci_P">Check Inbox</p>
        <p>
          We have sent you an email with your access link. Open the link or type
          in the Code.
        </p>

        <div className="OtpCard">


        <Txtbox
        class="Otp"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(0, e.target.value)}
        value={otpValues[0]}
        name="Otp"
      />


<Txtbox
        class="Otp"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(1, e.target.value)}
        value={otpValues[1]}
        name="Otp"
      />

<Txtbox
        class="Otp"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(2, e.target.value)}
        value={otpValues[2]}
        name="Otp"
      />

<Txtbox
        class="Otp"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(3, e.target.value)}
        value={otpValues[3]}
        name="Otp"
      />


<Txtbox
        class="Otp"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(4, e.target.value)}
        value={otpValues[4]}
        name="Otp"
      />

<Txtbox
        class="Otp"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(5, e.target.value)}
        value={otpValues[5]}
        name="Otp"
      />


  





        </div>

        <div></div>
        <Button
          title="Comfirm with captcha"
          customClass="btn btn-active btn-txt mx-468"
          onClick={
            checkotpApi
          }
        />

        <div className="my-5 w-100">
          <Button
            title="Resend email"
            customClass="btn btn-active btn-txt mx-468 my-3"
            onClick={() => {
              alert();
            }}
          />

          <Button
            title="Confirm with a different Email"
            customClass="btn btn-active btn-txt mx-468"
            onClick={() => {
              alert();
            }}
          />
        </div>
      </div>)}

    
    </>
  );
};

export default Page;
