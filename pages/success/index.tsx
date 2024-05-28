import Button from "@/components/button";
import Checkbox from "@/components/inputs/checkbox";
import TopNav from "@/components/topNav";

const Page = () => {
  return (
    <>
      <TopNav />
      <div className="LoginCard">
        <p>Success!</p>
        <p>Choose how you'd like to proceed</p>
   

<div className="mt-5">

<Checkbox label="Create a New Tribute Page"/>

<Checkbox label="Link to an Existing Tribute Page" checked={true}/>

</div>
<Button
          title="Save"
          customClass="btn btn-active btn-txt mx-151 mt-3"
          onClick={() => {
            alert();
          }}
          
        />

     
  
      </div>
    </>
  );
};

export default Page;
