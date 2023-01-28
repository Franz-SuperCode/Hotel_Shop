import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard/ProductCard";

function Detail() {

    const [newData, setNewData] = useState();
    const params = useParams(); //Hole die ID von der URL
    let theID = params.id;  //Speichere diese in die Variable theID
    let theIDNumber = Number(theID);
    console.log(theIDNumber);



    useEffect(() => {
        async function getData() {
            const data = await fetch(`https://fakestoreapi.com/products`);
            const dataJS = await data.json();
            setNewData(dataJS)
        }
        getData();
    }, [])

    //TODO---  Objekt mit der ID aus URL finden
    let foundRightObject = newData?.find((object) => {
        console.log("ObjectID: ", object.id);
        console.log("ParamsID: ", theIDNumber);
        return object.id === theIDNumber;
    });

    console.log("Found: ", foundRightObject);


    return (
        <>
            {
                foundRightObject && <ProductCard
                    title={foundRightObject.title}
                    price={foundRightObject.price}
                    description={foundRightObject.description}
                    category={foundRightObject.category}
                    img={foundRightObject.image}
                    id={foundRightObject.id}
                />
            }
        </>
    )
}

export default Detail;