import garminWatch from '../assets/products/garminWatch.jpg';
import watch1 from '../assets/products/watch1.jpg';
import amazfit1 from '../assets/products/amazfit1.jpg';
import macbookpro14 from '../assets/products/macbookpro14.jpg';
import dress from '../assets/products/dress.jpg';
import Product from "./Product.jsx";

function Home() {
    return (
        <div>
            {/*create a hero section*/}
            <div className=" bg-dark text-white ">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 col-md-6 ">
                            <h1 className="display-1 ">eShop</h1>
                            <p className="tw-text-lg tw-tracking-wider tw-leading-8">
                                Welcome to our shopping website! We are excited to offer you a wide selection of quality
                                products at affordable prices. Our mission is to provide you with an enjoyable and
                                hassle-free shopping experience. Our team is dedicated to ensuring that you find exactly
                                what you need, and we are always here to help you make informed decisions about your
                                purchases. Thank you for choosing us as your go-to shopping destination. We look forward
                                to serving you.
                            </p>
                            <button className="btn btn-outline-warning btn-lg rounded-1 px-4 fw-semibold">
                                Shop Now
                            </button>
                        </div>
                        <div className="col-12 col-md-6">
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4 ">
                <div className="row">
                    <div className="col-lg-6">
                        <Product image={garminWatch} price={99.99} rating={5} id={1}
                                 description='Garmins Forerunner 245 Music is a GPS running watch with music storage and  on-wrist playlists. '/>
                    </div>
                    <div className="col-lg-6">
                        <Product image={watch1} price={19.99} rating={2} id={2}
                                 description='Watch 245 Music is a GPS running watch with music storage and  on-wrist playlists. '/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 my-3">
                        <Product image={amazfit1} rating={3} id={3} price={29.99}
                                 description="Amazfit Band 5 Activity Fitness Tracker with Alexa Built-in, 15-Day Battery Life."/>
                    </div>
                    <div className="col-lg-4 my-3">
                        <Product image={dress} rating={4} id={4} price={39.99}
                                 description="Amazfit Band 5 Activity Fitness Tracker with Alexa Built-in, 15-Day Battery Life."
                        />
                    </div>
                    <div className="col-lg-4 my-3">
                        <Product image={macbookpro14} rating={3} id={5}
                                 description="Apple 2021 MacBook Pro (14-inch, M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Gray"
                                 price={1999.99}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Home;