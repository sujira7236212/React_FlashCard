import './Hamburger.css'

//  For animation and icon
// 'Hamburger' open={open}

// if open === True css class will be Hamburger.open
// else css class will be Hamburger
export default function Hamburger({open,setOpen}){
    return(
        <>  
            <div className={`Hamburger ${open ? "open" : ""}`}
                                       onClick={() => setOpen(!open)}>
                <div className='burger burger1' />
                <div className='burger burger2' />
                <div className='burger burger3' />
            </div>
        </>
    )
}