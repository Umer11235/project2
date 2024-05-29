import ImageCard from "@/components/ImageCard";
import Button from "@/components/button";
import Icons from "@/components/customIcons";
import Dropdown from "@/components/inputs/dropdown";
import TextInput from "@/components/inputs/textbox";
import TopNav from "@/components/topNav";
import Image from "next/image";
import { useState } from "react";

const Page = () => {




  const [activeSection, setActiveSection] = useState<string>("SoulStars");

  const [activeSection1, setActiveSection1] = useState<string>("About");



  const onItemClick = (activeState: string) => {
    setActiveSection(activeState);
  
  };

  const ProfileState=(activeState:string)=>{
    
    setActiveSection1(activeState)

  


  }




  return (
    <>
      <TopNav />
      <div className="ProfileContainer">
    

<div className="profileCard">

<span>
<Icons icon="pen"/>
</span>

<div className="ManageCard_profile Profileposition ">
            <p>A</p>
            <span>
              <Icons icon="pen" />
            </span>
          </div>

</div>





          <div className="profileDetails">

<p>In memory of</p>
<p>Anonymous</p>
<p>+24898842002</p>
</div>



        <div className="ManageCardbtn">



          <Button
            title="Page Setting"
            customClass={
              activeSection == "SoulStars"
                ? " profileBtn"
                : "btn btn-bord txt-cst-1 w-100  mx-1"
            }
            onClick={() => {
              onItemClick("SoulStars");
            }}
          />
          <Button
            title="Preview profile"
            customClass={
              activeSection == "Settings"
                ? "profileBtn"
                : "profileBtn "
            }
            onClick={() => {
              onItemClick("Settings");
            }}
          />
        </div>

        <div className="d-cst-flex">
      
          <div className="w-100">
            {activeSection == "SoulStars" ? (
              <>
                <div className="manageForm w-100">

  <div className="ProfileNav">
<ul>
  <li className={activeSection1=="About"?"ProfileNav_Active":""} onClick={()=>{ ProfileState("About")}}>About me</li>
  <li  className={activeSection1=="Media"?"ProfileNav_Active":""}  onClick={()=>{ ProfileState("Media")}}>Media</li>
  <li className={activeSection1=="Tributes"?"ProfileNav_Active":""}  onClick={()=>{ ProfileState("Tributes")}}>Tributes</li>
</ul>
</div> 


  <div className="profile_Setting">
{

  activeSection1=="About"? (<>

<div className="profile_about">
<div>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....</p>
</div>

<div>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
</div>
</div>
  
  </>)
  :activeSection1=="Media"?(<>
  <div className="profile_media">
 
<ImageCard icon="upload"/>
<ImageCard/>
<ImageCard/>
<ImageCard/>


</div>
  
  </>)
  :activeSection1=="Tributes"?(<>
  <div className="profile_Tributes">

<div>
  <Icons icon="chat"/>
  <p>0 Tributes posted</p>
</div>


</div>
  
  </>):null

}
  </div>



                </div>
              </>
            ) : (
              <>
        <div>
          <h2>nothing</h2>
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
