import Button from "@/components/button";
import Icons from "@/components/customIcons";
import Dropdown from "@/components/inputs/dropdown";
import TextInput from "@/components/inputs/textbox";
import TopNav from "@/components/topNav";
import { useState } from "react";

const Page = () => {





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
                  <form className="w-100">
                    <TextInput
                      label="Title"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="First Name"
                      customClass="txt-input "
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Last Name"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Introductory Note"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Date of Birth"
                      customClass="txt-input widfixed"
                      placeholder="Jhon Doe"
                    />

                    <TextInput
                      label="Date of Passing"
                      customClass="txt-input widfixed"
                      placeholder="Jhon Doe"
                    />


                    <Button
                      title="Save Changes And Proceed"
                      customClass={"btn btn-active btn-txt w-100 my-4"}
                      onClick={() => {
                        onItemClick("SoulStars");
                      }}
                    />
      
                    
                  </form>
                </div>
              </>
            ) : (
              <>
            <div className="manageForm w-100">
                  <form className="w-100">
                    <TextInput
                      label="Title"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="First Name"
                      customClass="txt-input "
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Last Name"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Introductory Note"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Date of Birth"
                      customClass="txt-input widfixed"
                      placeholder="Jhon Doe"
                    />

                    <TextInput
                      label="Date of Passing"
                      customClass="txt-input widfixed"
                      placeholder="Jhon Doe"
                    />


                    <Button
                      title="Save Changes And Proceed"
                      customClass={"btn btn-active btn-txt w-100 my-4"}
                      onClick={() => {
                        onItemClick("SoulStars");
                      }}
                    />
      
                    
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
