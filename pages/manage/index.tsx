import Button from "@/components/button";
import Icons from "@/components/customIcons";
import Dropdown from "@/components/inputs/dropdown";
import TextInput from "@/components/inputs/textbox";
import TopNav from "@/components/topNav";
import { useState } from "react";

const Page = () => {


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
                  <form className="w-100">
                    <TextInput
                      label="First Name"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Last Name"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="City"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Country"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />
                    <TextInput
                      label="Zip/Postal Code"
                      customClass="txt-input"
                      placeholder="Jhon Doe"
                    />

<Dropdown select="Select" options={options} placeholder="select" />

                    <Button
                      title="Save"
                      customClass={"btn btn-active btn-txt w-100 my-4"}
                      onClick={() => {
                        onItemClick("SoulStars");
                      }}
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
