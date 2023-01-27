import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {




    return (
        <main>
            <p>HOME SEITE</p>
            <Link to="/shop"> <p>Go to our Shop</p> </Link>
        </main>
    )
}

export default Home;