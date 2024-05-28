import Icons from "../customIcons";
import { IButton } from "./interface";

const Button = ({ title, onClick, customClass,icon }: IButton) => {
  return (
    <button className={`${customClass || ""}`} onClick={onClick}>
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
