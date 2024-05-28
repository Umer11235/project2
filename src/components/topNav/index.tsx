import Image from "next/image";
import Icons from "../customIcons";
// import './style/style1.css'

function TopNav() {
    return (  

       <div className="topNav">

<div className="topNavTitle">
{/* <Image src={""} alt="Remember Well"/> */}
<Icons icon="rememberwell"/>
</div>
<div className="topNavMenu">
   <Icons icon="menu1"/>
</div>


       </div>
    );
}

export default TopNav;