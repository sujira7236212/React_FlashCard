import './Menu.css'

export default function Menu({open,setSelectSet,selectSet}){

    // category Array from A-Z
    const category = Array.from({ length: 26}, (_, i)=>
    String.fromCharCode(65+i));

    // if open === False render nothing
    if(!open){ return null;}
    // when open === True show list of cetegory
    return(
        <>
        <div className={`Menu ${open ? "open" : ""}`}>
            <ul className='list'>
                {category.map((letter) =>(
                    <li key={letter} 
                        className={`menu-item ${selectSet === letter ? "active" : ""}`}
                        onClick={ () => setSelectSet(letter)}>

                        {letter}

                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}