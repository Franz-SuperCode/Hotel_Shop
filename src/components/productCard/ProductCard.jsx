import "./ProductCard.css";

function ProductCard(props) {
    // console.log(props.img);
    return (
        <article className="productCard">
            <img src={props.img} />
            <p>{props.title}</p>
            <div >
                <p>{`${props.price} €`}</p>
                <p>Add to Basket</p>
            </div>
        </article>
    )
}

export default ProductCard;