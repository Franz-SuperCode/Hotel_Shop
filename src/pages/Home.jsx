import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import flower1 from "../assets/img/flower1.svg";
import flower2 from "../assets/img/flower2.svg";
import flower3 from "../assets/img/flower3.svg";
import flower4 from "../assets/img/flower4.svg";
import flower5 from "../assets/img/flower5.svg";
import flower6 from "../assets/img/flower6.svg";

function Home() {




    return (
        <main className="main_home">
            <article>
                <h1>Products, 🪑👕👜 what our Visitors need</h1>
                <p>Browse between hundrets of Cool Stuff</p>
                <Link to="/shop"> <button>Explore</button> </Link>
            </article>
            <div className="flowers">
                <img src={flower1} />
                <img src={flower2} />
                <img src={flower3} />
                <img src={flower4} />
                <img src={flower5} />
                <img src={flower6} />
            </div>


        </main>
    )
}

export default Home;