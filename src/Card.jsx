import './index.css'

function Card(props){
    return(
            <div className="card">
                <img className="card-image" src={props.image} alt="AC"></img>
                <h2 className="card-title">{props.productName}</h2>
                <p className="card-text">Price:{props.productPrice}</p>
                <button type="button">Checkout🛒</button>
            </div>
    )
}

export default Card;