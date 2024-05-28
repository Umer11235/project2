import { ItextBox } from "./interface";

const TextInput = ({label,placeholder,customClass}:ItextBox) => {
  return (
    <>
      <div className={`${customClass || ""} form-group`}>
        <label>{label}</label>
        <input type="text" className="form-control" placeholder={placeholder} />
    
      </div>
    </>
  );
};

export default TextInput
