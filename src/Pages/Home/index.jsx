import Header from "../../componants/header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./homeStyle.css"
const Home = () => {
    const [data, setdata] = useState([0]);
    //get data from api 
    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const json = await response.json();
        setdata(json);
    }
    useEffect(
        () => {
            getProducts();
        }, []);

    // make new array to store just products data in array and using it with map function to display data
    var arr = Array.from(Object.values(data)[0]);
    arr = arr.filter((arr) => arr.id < 9)
    console.log(arr);
    return (
        <>
            {/* navbar section */}
            <Header />

            {/* header panner section */}
            <div className="head_panner">
                <img src="header_imgs/person-removebg-preview.png" className="img-fluid" alt="person" />
                <span class="panner_text">
                    Get 50% Off on<br /> selected Categories
                </span>
                <img src="header_imgs/icons.svg" className="head_ic img-fluid" alt="" />
            </div>
            <div>
                
            </div>
            {/* display products section */}
            <div class="prod_sec">
                <h2>Products</h2>
                <div className="container">
                    <div className="row">
                        {arr.map((product) => (
                            <div key={product.id} class="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-6 product_card">
                                <div class="card">
                                    <a href onClick={function (e) {
                                       console.log(e.target.getAttribute("src")); 
                                       e.target.getAttribute("src")==="header_imgs/favorite-svgrepo-com.svg"
                                       ?e.target.setAttribute('src', "header_imgs/heart_fill.svg")
                                       :e.target.setAttribute('src', "header_imgs/favorite-svgrepo-com.svg");
                                    }}>
                                        <img src="header_imgs/favorite-svgrepo-com.svg" className="heart_btn" alt="AddToCard" />
                                    </a>

                                    <Link to={`/show/${product.id}`}><img src={product.thumbnail} className="img-fluid img_card" alt="product img" /></Link>
                                    <div className="card_tit">
                                        <span>{product.title} </span>
                                        <span className="right">{product.price}$</span>
                                    </div>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <Link to={'/products'} className="products_link"> See More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;