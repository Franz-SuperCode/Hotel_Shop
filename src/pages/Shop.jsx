import { useEffect } from "react";
import { useState } from "react";
import filter from "../assets/img/filter.svg"
import ProductCard from "../components/productCard/ProductCard";

function Shop() {

    const [newData, setNewData] = useState();
    //! Fetch einbauen und an ProductCard übergeben
    useEffect(() => {
        async function getData() {
            const data = await fetch(`https://fakestoreapi.com/products`);
            const dataJS = await data.json();
            setNewData(dataJS)

            console.log(dataJS);
        }
        getData();
    }, [])

    return (
        <main className="main_shop">
            <form>
                <div>
                    <img src={filter} />
                </div>
                <input id="searchInput" placeholder="Search..."></input>
            </form>

            <section>
                {
                    newData?.map((object, index) => {
                        // console.log(object.image);
                        return <ProductCard
                            key={index}
                            title={object.title}
                            price={object.price}
                            category={object.category}
                            img={object.image}
                            id={object.id}
                        />
                    })
                }
            </section>
        </main>
    )
}

export default Shop;