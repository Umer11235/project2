import Icons from "@/components/customIcons";


function LightBtn(props:lightbtn) {
    return ( 
     
<button className="lightbtn"><Icons icon={props.icon}/> {props.text}</button>

     );
}

export default LightBtn;