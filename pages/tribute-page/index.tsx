import createAxiosInstance from "@/components/FetchApi";
import Button from "@/components/button";
import Icons from "@/components/customIcons";
import Dropdown from "@/components/inputs/dropdown";
import TextInput from "@/components/inputs/textbox";
import TopNav from "@/components/topNav";
import { useFormik } from "formik";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IFormAttributes } from "../manage/Interface";
import { IFormSoulStar } from "./Interface";
import "react-toastify/ReactToastify.css";


const Page = () => {



  
  const axiosInstance = createAxiosInstance(process.env.NEXT_PUBLIC_API_BASE_URL,"application/json"); 

  
  const initialValues: IFormSoulStar = {

    First_Name: "",
    Last_Name: "",
    Middle_Name: "",
    Type: "",
    Title: "",
    Introductory_Note: "",
    Date_of_Birth: "",
    Date_of_Passing: "",
    Contact: "", // Optional field
    Profile: "",
    Banner: "",
    Note: "",
    User_Id: ""
  };

  







  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: ValidationSchema,
    onSubmit:async(value) => {
     
      

      const notify = () => {
        toast.success("This is a success notification!");
      };

      const formData = new FormData();


      formData.append("First_Name", value.First_Name);
      formData.append("Last_Name", value.Last_Name);
      formData.append("Middle_Name", value.Middle_Name);
      formData.append("Type", value.Type);
      formData.append("Title", value.Title);
      formData.append("Introductory_Note", value.Introductory_Note);
      formData.append("Date_of_Birth", value.Date_of_Birth);
      formData.append("Date_of_Passing", value.Date_of_Passing);
      formData.append("Contact", value.Contact); // Optional field
      formData.append("Profile", value.Profile);
      formData.append("Banner", value.Banner);
      formData.append("Note", value.Note);
      // formData.append("User_Id", value.User_Id);
  
    
   


      // //@ts-ignore
      // formdata.append("Image", value.Pic);

      
      console.log(value);

 

      const data =await axiosInstance.post('SoulStar',formData, {
     
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
            title="Human"
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
            title="Animal"
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

        <div className="d-cst-flex mt-3">
         
          <div className="w-100">
            {activeSection == "SoulStars" ? (
              <>
                <div className="manageForm w-100">
                <form className="w-100" onSubmit={formik.handleSubmit}>
                    <TextInput
                      label="Title"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                   name="Title"
                   onchange={formik.handleChange}
                   />
                    <TextInput
                      label="First Name"
                      customClass="txt-input "
                      placeholder="Jhon Doe"
                      name="First_Name"
                      onchange={formik.handleChange}
                   />
                    <TextInput
                      label="Last Name"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      name="Last_Name"
                      onchange={formik.handleChange}
                   />
                    <TextInput
                      label="Introductory Note"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      name="Introductory_Note"
                      onchange={formik.handleChange}
                   />
                    <TextInput
                      label="Date of Birth"
                      customClass="txt-input widfixed"
                      placeholder="Jhon Doe"
                      name="Date_of_Birth"
                   onchange={formik.handleChange}
                    />

                    <TextInput
                      label="Date of Passing"
                      customClass="txt-input widfixed"
                      placeholder="Jhon Doe"
                      name="Date_of_Passing"
                   onchange={formik.handleChange}
                    />



                    
                   
                   

                    <Button
                      title="Save Changes And Proceed"
                      customClass={"btn btn-active btn-txt w-100 my-4"}
                      onClick={formik.handleChange }
                      />
  
      
      <ToastContainer />
           
                  </form>
                </div>
              </>
            ) : (
              <>
            <div className="manageForm w-100">
                  <form className="w-100" onSubmit={formik.handleSubmit}>
                    <TextInput
                      label="Title"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                   name="Title"
                   onchange={formik.handleChange}
                   />
                    <TextInput
                      label="First Name"
                      customClass="txt-input "
                      placeholder="Jhon Doe"
                      name="First_Name"
                      onchange={formik.handleChange}
                   />
                    <TextInput
                      label="Last Name"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      name="Last_Name"
                      onchange={formik.handleChange}
                   />
                    <TextInput
                      label="Introductory Note"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                      name="Introductory_Note"
                      onchange={formik.handleChange}
                   />
                    <TextInput
                      label="Date of Birth"
                      customClass="txt-input widfixed"
                      placeholder="Jhon Doe"
                      name="Date_of_Birth"
                   onchange={formik.handleChange}
                    />

                    <TextInput
                      label="Date of Passing"
                      customClass="txt-input widfixed"
                      placeholder="Jhon Doe"
                      name="Date_of_Passing"
                   onchange={formik.handleChange}
                    />



                    
                   
                   

                    <Button
                      title="Save Changes And Proceed"
                      customClass={"btn btn-active btn-txt w-100 my-4"}
                      onClick={formik.handleChange }
                      />
  
      
      <ToastContainer />
           
                  </form>
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
