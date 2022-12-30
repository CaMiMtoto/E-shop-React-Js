import {Link} from "react-router-dom";
import {IconChevronRight, IconLocation, IconMinus, IconPlus, IconTrash} from "@tabler/icons";
import {useState} from "react";
import {useStateValue} from "../States/StateProvider.jsx";
import Rating from "./Rating.jsx";
import {getBasketTotal} from "../States/reducer.js";


export default function ShoppingCart(props) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    }

    return (
        <div className="container my-4">
            <h2 className="mb-3">Shopping Cart</h2>
            <div className="row">
                <div className="col-md-8">
                    <div className="list-group w-auto tw-shadow-sm">
                        {basket.map(item => (
                            <div className="list-group-item list-group-item-action d-flex gap-3 py-3"
                                 aria-current="true" key={item.id}>
                                <img src={item.image} alt={item.description}
                                     className=" flex-shrink-0 tw-h-32 tw-w-32 tw-object-contain"/>


                                <div>
                                    <div className="d-flex flex-column flex-md-row gap-2 w-100 justify-content-between">
                                        <div>
                                            <h6 className="mb-0">{item.description}</h6>
                                            <p className="text-muted mt-1">
                                                <Rating rating={item.rating}/>
                                            </p>

                                        </div>
                                        <div className=" text-nowrap">
                                            <span className="fw-bold me-2 fs-5">$ {item.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <div
                                        className="d-flex flex-column flex-md-row gap-2 justify-content-between align-items-md-center">
                                        <div className="d-flex align-items-center gap-3">
                                            <button
                                                className="btn btn-sm btn-outline-secondary rounded-circle tw-w-10 tw-h-10"
                                                type="button">
                                                <IconMinus/>
                                            </button>
                                            <span className="px-2 fw-bold fs-5">1</span>
                                            <button
                                                className="btn btn-sm btn-outline-primary rounded-circle tw-w-10 tw-h-10"
                                                type="button">
                                                <IconPlus/>
                                            </button>
                                        </div>
                                        <button onClick={event => removeFromBasket(item.id)} type="button"
                                                className="btn btn-sm btn-outline-danger">
                                            <IconTrash/>
                                            Remove
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card position-sticky tw-top-24  tw-shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">
                                Subtotal
                            </h5>
                            <p className="card-text">
                                <span className="fw-bold">
                                    {basket.length}
                                </span> items in your cart <br/>
                                <span className="fw-bold">
                                    ${getBasketTotal(basket).toLocaleString()}
                                </span>
                            </p>

                            <Link to={'/checkout'} className="btn btn-warning">
                                Proceed to checkout
                                <IconChevronRight/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}