import "./ProductCard.css";

function ProductCard(props) {
    return (
        <section className="productCard">
            <img src="https://unsplash.it/300/300" />
            <p>Title</p>
            <div >
                <p>5€</p>
                <p>Add to Basket</p>
            </div>
        </section>
    )
}

export default ProductCard;