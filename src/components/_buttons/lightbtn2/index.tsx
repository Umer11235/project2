import Icons from "@/components/customIcons";

function LightBtn2({ onClick, text,isActive }: lightbtn2) {
  return (
    <button onClick={onClick} className={`${isActive==true?"":""}`}>
      {text}
    </button>
  );
}

export default LightBtn2;
