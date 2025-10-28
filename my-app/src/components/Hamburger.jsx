import './Hamburger.css'

//  For animation and icom
// 'Hamburger' open={open}
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