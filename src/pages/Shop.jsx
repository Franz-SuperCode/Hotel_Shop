import filter from "../assets/img/filter.svg"
import ProductCard from "../components/productCard/ProductCard";

function Shop() {


    return (
        <main>
            SHOP SEITE
            <form>
                <div>
                    <img src={`${filter}`} />
                </div>
                <input id="searchInput" placeholder="Search..."></input>
            </form>

            <ProductCard />
        </main>
    )
}

export default Shop;