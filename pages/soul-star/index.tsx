import Button from "@/components/button";
import TopNav from "@/components/topNav";

const Page = () => {
  return (
    <>
      <TopNav />
      <div className="LoginCard1">
        <p>Your Soul Star has</p>
        <p >not been linked yet.</p>
        <p>Please scan the QR-Code to link your account to the Soul Star.</p>
        <Button
          title="Connect Now"
          customClass="btn btn-active btn-txt mx-151"
          onClick={() => {
            alert();
          }}
          icon="camera"
        />

        <div className="LoginCard1">
        <p>Don't have a</p>
        <p>Soul Star yet?</p>
        <p >Order now and link it to your account to create a memorial page.</p>

        <Button
          title="Buy Now"
          customClass="btn btn-active btn-txt mx-151"
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
