import Button from "@/components/button";
import Icons from "@/components/customIcons";
import { getUserData } from "@/components/getuserData_cookie";
import Dropdown from "@/components/inputs/dropdown";
import TextInput from "@/components/inputs/textbox";
import TopNav from "@/components/topNav";
import { useState } from "react";
import { IFormAttributes } from "./Interface";
import { useFormik } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import { ToastContainer, toast } from "react-toastify";
import createAxiosInstance from "@/components/FetchApi";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/ReactToastify.css";




const Page = () => {

  const axiosInstance = createAxiosInstance(process.env.NEXT_PUBLIC_API_BASE_URL,"application/json"); 

  
  const initialValues: IFormAttributes = {
  Email: "",
  First_Name: "",
   Last_Name : "",
  Middle_Name:  "",
  City:  "",
  Country: "",
  Zip:  "",
  Language:  "",
  Id:""
  

  };

  







  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: ValidationSchema,
    onSubmit:async(value) => {
     

      const notify = () => {
        toast.success("This is a success notification!");
      };

      const formdata = new FormData();

      formdata.append("Email", value.Email);
      formdata.append("First_Name", value.First_Name);
      formdata.append("Last_Name",value.Last_Name);
      formdata.append("Middle_Name ", value.Middle_Name);
formdata.append("City ",value.City);
      formdata.append("Country", value.Country);
      formdata.append("Zip", value.Zip);
      formdata.append("Language", value.Language);
      // formdata.append("Id",value.Id);

      // formdata.append("Id", value.Id === null ? "" : value.Id.toString());

      

      





      // //@ts-ignore
      // formdata.append("Image", value.Pic);

      
      console.log(value);

 

      const data =await axiosInstance.post('User',formdata, {
     
      }).then((resp:any)=>{
       
      
notify();

      }).catch((err:string)=>{
      toast.error("network issue// you should pass uniqe id");
      });


    },
  });



  const notify = () => {
    toast.success("This is a success notification!");
    
  };








const options=
  [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' }
  
  ]



  const [activeSection, setActiveSection] = useState<string>("SoulStars");

  const onItemClick = (activeState: string) => {
    setActiveSection(activeState);
  };

  return (
    <>
      <TopNav />
      <div className="ManageCard container">
        <p className="m-0">Manage</p>
        <p className="m-0">Set up your account and manage your information.</p>

        <div className="ManageCardbtn">
          <Button
            title="Soul Stars"
            customClass={
              activeSection == "SoulStars"
                ? "btn btn-active btn-txt w-100 mx-1"
                : "btn btn-bord txt-cst-1 w-100  mx-1"
            }
            onClick={() => {
              onItemClick("SoulStars");
            }}
          />
          <Button
            title="Settings"
            customClass={
              activeSection == "Settings"
                ? "btn btn-active btn-txt  w-100 mx-1"
                : "btn btn-bord txt-cst-1   w-100 mx-1 "
            }
            onClick={() => {
              onItemClick("Settings");
            }}
          />
        </div>

        <div className="d-cst-flex">
          <div className="ManageCard_profile">
            <p>A</p>
            <span>
              <Icons icon="pen" />
            </span>
          </div>

          <div className="w-100">
            {activeSection == "SoulStars" ? (
              <>
                <div className="manageForm w-100">
                  <form className="w-100" onSubmit={formik.handleSubmit}>
                

                    <TextInput
                      label="First Name"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      onchange={formik.handleChange}
                    name="First_Name"
                    />     
                    
                    
                    
                    
                 
                    <TextInput
                      label="Last Name"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      onchange={formik.handleChange}
                      name="Last_Name"
                    />


<TextInput
                      label="Email"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      onchange={formik.handleChange}
                  name="Email"
                  />


                    <TextInput
                      label="City"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      onchange={formik.handleChange}
                  name="City"
                  />
                    <TextInput
                      label="Country"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      onchange={formik.handleChange}
                    name="Country"/>
                    <TextInput
                      label="Zip/Postal Code"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      onchange={formik.handleChange}
                    name="Zip "/>

<Dropdown select="Select" options={options} placeholder="select" onchange={formik.handleChange} name="Language"/>

                    <Button
                      title="Save"
                      customClass={"btn btn-active btn-txt w-100 my-4"}
                      // onClick={() => {
                      //   onItemClick("SoulStars");
                     
                      // }}
                      onClick={formik.handleChange }
                    />
                    {/* <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Language</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select> */}

<ToastContainer />
                  </form>
                </div>
              </>
            ) : (
              <>
                <div className="manageSeting">
                  <p>No Soul Star</p>
                  <p>created</p>
                  <Button
                      title="Create New"
                      customClass={"btn btn-active btn-txt mx-151 my-4"}
                      onClick={() => {
                      
                      }}
                    />

                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
