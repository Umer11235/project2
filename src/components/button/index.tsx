import { useRouter } from "next/navigation";
import Icons from "../customIcons";
import { IButton } from "./interface";

const Button = ({ title, onClick, customClass,icon }: IButton) => {
  
  
  
  return (
    <button  type="submit" className={`${customClass || ""}`} onClick={onClick}  name="onSubmit" >
      {

      
        icon?<span className="mx-1">
        <Icons icon={icon}/>
        </span>:<></>
      }
      {title}
    </button>
  );
};

export default Button;
