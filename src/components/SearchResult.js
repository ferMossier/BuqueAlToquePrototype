import React from 'react';
import Header from "./Header";
import card7 from '../img/img7.jpg';
import card8 from '../img/img8.jpg';

export default function Home() {

    return (
        <>
            <Header />
            <section className="py-5" id="sec-travel">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Product image*/}
                                <img className="card-img-top" src={card7} alt="..." />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">BS AS, Arg</h5>
                                        {/* Product price*/}
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="/#">Reservar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/* Product image*/}
                                <img className="card-img-top" src={card8} alt="..." />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">Puerto Madero, Arg</h5>
                                        {/* Product price*/}
                                        $40.00
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto" href="/#">Reservar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}