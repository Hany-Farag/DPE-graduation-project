// import Header from "../../componants/header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../../componants/header";
import "./showProductStyle.css"
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
    // console.log(arr);

    const [size, setsize] = useState('xs')
    const [addConfirmation, setaddConfirmation] = useState('')
    
    return (
        <>
            {/* navbar section */}
            <Header />
            {/* display products section */}

            <div className="container productContainer">
                {arr != null ? (
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xl-6 productShowImg ">
                            <img src={arr?.thumbnail} className="img-fluid productShowImg" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-xl-6 ProductDesc">
                            <span class="badge bg-secondary">New ! </span>
                            <h1 className="productTitle">{arr?.title} <br /> $ {arr?.price} </h1>
                            <p style={{ color: '#6E7C87' }}> Brand : {arr?.brand}</p>
                            <p className="productText">{arr?.description}</p>
                            <p className="productText">Size</p>

                            <div className="sizeBtnContainer">
                                <button className={`sizeBtn  ${size === 'xs' ? 'active' : ''} `} onClick={() => setsize('xs')}>xs</button>
                                <button className={`sizeBtn  ${size === 'sm' ? 'active' : ''} `} onClick={() => setsize('sm')}>sm</button>
                                <button className={`sizeBtn  ${size === 'md' ? 'active' : ''} `} onClick={() => setsize('md')}>md</button>
                                <button className={`sizeBtn  ${size === 'lg' ? 'active' : ''} `} onClick={() => setsize('lg')}>lg</button>
                                <button className={`sizeBtn  ${size === 'xl' ? 'active' : ''} `} onClick={() => setsize('xl')}>xl</button>
                            </div>

                            <div className="addBtnContainer">
                                <button className="addBtn" type="button" onClick={()=>{setaddConfirmation('Added To Card')}}>Add to Card</button>
                            </div>
                                <p className="addConfirm" style={ {textAlign: 'center'}}>{addConfirmation}</p>
                        </div>
                    </div>
                ) : <div>404 Page not Found</div>}

            </div>

        </>
    );

};
export default Productshow;