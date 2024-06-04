import { Itxtbox } from "./interface";


function Txtbox(props:Itxtbox) {
    return (  

        <input type="text" className={props.class} onClick={props.onClick} onChange={props.onChange} name={props.name} value={props.value} />

        
    );
}

export default Txtbox;