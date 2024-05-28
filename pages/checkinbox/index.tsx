import Button from "@/components/button";
import TopNav from "@/components/topNav";

const Page = () => {
  return (
    <>
      <TopNav />

      <div className="LoginCard">
        <p className="logincard_ci_P">Check Inbox</p>
        <p>
          We have sent you an email with your access link. Open the link or type
          in the Code.
        </p>

        <div className="OtpCard">
          <input type="text" className="Otp" />
          <input type="text" className="Otp" />
          <input type="text" className="Otp" />
          <input type="text" className="Otp" />
          <input type="text" className="Otp" />
        </div>

        <div></div>
        <Button
          title="Comfirm with captcha"
          customClass="btn btn-active btn-txt mx-468"
          onClick={() => {
            alert();
          }}
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
      </div>
    </>
  );
};

export default Page;
