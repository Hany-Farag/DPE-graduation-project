// import Header from "../../componants/header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../../componants/header";

const Productshow = () => {
    const { id } = useParams();
    // console.log(id);

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
    arr = arr.find((product) => product.id == id);
    console.log(arr);

    const [size, setsize] = useState('xs')

    return (
        <>
            {/* navbar section */}
            <Header />
            {/* display products section */}

            <div className="container">
                {arr != null ? (
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xl-6 ">
                            <img src={arr?.thumbnail} className="img-fluid" alt="" />
                        </div>
                        <div className="col">
                            <span class="badge bg-secondary">New</span>
                            <h1>{arr?.title}</h1>
                            <h1>$ {arr?.price}</h1>
                            <p> Prand : {arr?.brand}</p>
                            <p>
                                {arr?.description}
                            </p>
                            <p>Size</p>
                            <button className={size === 'xs' ? 'active' : ''} onClick={() => setsize('xs')}>xm</button>
                            <button onClick={() => setsize('sm')}>sm</button>
                            <button onClick={() => setsize('md')}>md</button>
                            <button onClick={() => setsize('lg')}>lg</button>
                            <button onClick={() => setsize('xl')}>xl</button>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Add to Card</button>
                            </div>
                        </div>
                    </div>
                ) : <div>404 Page not Found</div>}

            </div>

        </>
    );

};
export default Productshow;