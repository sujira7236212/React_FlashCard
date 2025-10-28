import "./Navbar.css"
import Hamburger from './Hamburger'
import Menu from './Menu'
import { useState } from "react";
function Navbar({ setSelectSet,selectSet }){

    const [open,setOpen] = useState(false);

    return(
        <div className="Nav">
            <div className="hamburger">
                <Hamburger open={open} setOpen={setOpen} />
            </div>
            
            <Menu open={open} setSelectSet = {setSelectSet} selectSet={selectSet}/>

            <div className="title">
                <h1>Flash Card</h1>
            </div>
            
        </div>

    );
}

export default Navbar;