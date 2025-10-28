import "./Card.css"

function Card({flip,onFlip,children}){
    return(
        <div className={flip} onClick={onFlip}>
            <div className="Card">
                <div className="text">
                    {children} 
                </div>
            </div>
        </div>
    );
}

export default Card;