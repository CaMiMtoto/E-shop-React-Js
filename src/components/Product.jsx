import {IconStar} from "@tabler/icons";
import {StarIcon} from '@heroicons/react/24/solid';
import {StarIcon as StarIconOutline} from '@heroicons/react/24/outline';
import {useStateValue} from "../States/StateProvider.jsx";
import Rating from "./Rating.jsx";


export default function Product({id, image, description, price, rating = 0}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                image,
                description,
                price,
                rating
            }
        })
    }

    return (
        <figure
            className="bg-white pt-3 rounded-1 text-center dark:tw-bg-slate-800 h-100">
            <img
                className="tw-w-52 tw-h-52  tw-mx-auto tw-object-contain  tw-object-left"
                src={image} alt=""/>
            <div className="tw-pt-6  tw-p-8  tw-text-center tw-space-y-4">
                <blockquote className="text-start text-muted">
                    <p className="tw-text-base tw-font-medium " title={description}>
                        {description.length > 100 ? description.substring(0, 100) + '...' : description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-primary fw-bold">
                            ${price}
                        </div>
                        <Rating rating={rating}/>
                    </div>
                </blockquote>
                <figcaption
                    className="tw-font-medium d-flex align-items-center justify-content-between flex-row-reverse mt-2">
                    <a href="" className="tw-text-primary dark:tw-text-sky-400 text-decoration-none">
                        More Info
                        <i className="bu bi-chevron-right ms-2"></i>
                    </a>
                    <button className="btn btn-warning d-block rounded-1" onClick={addToBasket}>
                        Add to Cart
                    </button>
                </figcaption>
            </div>
        </figure>
    );
}