import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import card1 from '../img/img1.jpg';
import card2 from '../img/img2.jpg';
import card3 from '../img/img3.jpg';
import card4 from '../img/img4.jpeg';
import card5 from '../img/img5.jpeg';
import card6 from '../img/img6.jpg';
import card7 from '../img/img7.jpg';
import card8 from '../img/img8.jpg';
import cal from './datepicker.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SignUpStyles.css";

export default function Home() {

    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();

    const handleCheckInDate = (checkInDate) => {
        setCheckInDate(checkInDate);
    };

    const handleCheckOutDate = (checkOutDate) => {
        setCheckOutDate(checkOutDate);
    };

    return (
        <>
            <link rel="stylesheet" type="text/css" href={cal} />
            <div className="tm-main-content" id="top">
                <div className="tm-top-bar-bg"></div>
                <div className="tm-top-bar" id="tm-top-bar">
                    <div className="container">
                        <div className="row">

                            <nav className="navbar navbar-expand-lg narbar-light">
                                <a className="navbar-brand mr-auto" href="/#">
                                    <img src={logo} alt="Site logo" />
                                    Buque Al Toque
                                </a>
                                <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse"
                                    data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#sec-subs">Subscripcion</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#sec-travel">Viajes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#sec-contact">Contactanos</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/SignUp" className="nav-link">Registrate</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Login" className="nav-link">Login</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="tm-section tm-bg-img" id="tm-section-1">
                    <div className="tm-bg-white ie-container-width-fix-2">
                        <div className="container ie-h-align-center-fix">
                            <div className="row">
                                <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                                    <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
                                        <div className="form-row tm-search-form-row">
                                            <div className="form-group tm-form-element tm-form-element-100">
                                                <i className="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                                                <select name="adult" className="form-control tm-select" id="adult">
                                                    <option value="">Seleccione su destino</option>
                                                    <option value="1">Buenos Aires</option>
                                                    <option value="2">Uruguay</option>
                                                </select>
                                            </div>
                                            <div className="form-group tm-form-element tm-form-element-50">
                                                {/* <i className="fa fa-calendar fa-2x tm-form-element-icon"></i> */}
                                                <DatePicker autoComplete='off' selected={checkInDate} onChange={handleCheckInDate} dateFormat="dd-MM-yyyy" name="check-in" type="text" className="form-control" id="inputCheckIn"
                                                    placeholderText="Check In"/>
                                            </div>

                                            <div className="form-group tm-form-element tm-form-element-50">
                                                {/* <i className="fa fa-calendar fa-2x tm-form-element-icon"></i> */}
                                                <DatePicker autoComplete='off' selected={checkOutDate} onChange={handleCheckOutDate} dateFormat="dd-MM-yyyy" name="check-out" type="text" className="form-control" id="inputCheckOut"
                                                    placeholderText="Check Out" />
                                            </div>
                                        </div>
                                        <div className="form-row tm-search-form-row">
                                            <div className="form-group tm-form-element tm-form-element-2">
                                                <select name="adult" className="form-control tm-select" id="adult">
                                                    <option value="">Adulto</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                                <i className="fa fa-2x fa-user tm-form-element-icon"></i>
                                            </div>
                                            <div className="form-group tm-form-element tm-form-element-2">
                                                <select name="children" className="form-control tm-select" id="children">
                                                    <option value="">Chicos</option>
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                                <i className="fa fa-user tm-form-element-icon tm-form-element-icon-small"></i>
                                            </div>
                                            <div className="form-group tm-form-element tm-form-element-2">

                                            </div>
                                            <div className="form-group tm-form-element tm-form-element-2">
                                                <button type="submit" className="btn btn-primary tm-btn-search">Chequear
                                                    Disponibilidad</button>
                                            </div>
                                        </div>
                                        <div className="form-row clearfix pl-2 pr-2 tm-fx-col-xs">

                                            <a href="/#"
                                                className="ie-10-ml-auto ml-auto mt-1 tm-font-semibold tm-color-primary">Necesitas
                                                Ayuda?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tm-section-2" id="sec-subs">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="tm-section-title">Quieres ser cliente premium?</h2>
                                <p className="tm-color-white tm-section-subtitle">Subscribete y accede a los beneficios y
                                    promociones que tenemos para ti </p>
                                <a href="/#" className="tm-color-white tm-btn-white-bordered">Subscribirse</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tm-section tm-position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
                        className="tm-section-down-arrow">
                        <polygon fill="#ee5057" points="0,0  100,0  50,60"></polygon>
                    </svg>

                    <section className="py-5" id="sec-travel">
                        <div className="container px-4 px-lg-5 mt-5">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* Product image*/}
                                        <img className="card-img-top" src={card1} alt="..." />
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">Colonia, Ur</h5>
                                                {/* Product price*/}
                                                $40.00 - $80.00
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
                                        {/* Sale badge*/}
                                        <div className="badge bg-dark text-white position-absolute"
                                            style={{ top: '0.5rem', right: '0.5rem' }}>
                                            Agotado
                                        </div>
                                        {/* Product image*/}
                                        <img className="card-img-top" src={card2} alt="..." />
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">Punta del Este, Ur</h5>
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
                                        {/* Sale badge*/}
                                        <div className="badge bg-dark text-white position-absolute"
                                            style={{ top: '0.5rem', right: '0.5rem' }}>
                                            Agotado
                                        </div>
                                        {/* Product image*/}
                                        <img className="card-img-top" src={card3} alt="..." />
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">Montevideo, Ur</h5>
                                                {/* Product price*/}
                                                <span className="text-muted text-decoration-line-through">$50.00</span>
                                                $25.00
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
                                        <img className="card-img-top" src={card4} alt="..." />
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">Montevideo, Ur</h5>
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
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        {/* Sale badge*/}
                                        <div className="badge bg-dark text-white position-absolute"
                                            style={{ top: '0.5rem', right: '0.5rem' }}>
                                            Agotado
                                        </div>
                                        {/* Product image*/}
                                        <img className="card-img-top" src={card5} alt="..." />
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">Congreso, Bs As</h5>
                                                {/* Product price*/}
                                                <span className="text-muted text-decoration-line-through">$50.00</span>
                                                $25.00
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
                                        <img className="card-img-top" src={card6} alt="..." />
                                        {/* Product details*/}
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                {/* Product name*/}
                                                <h5 className="fw-bolder">La Boca, Bs As</h5>
                                                {/* Product price*/}
                                                $120.00 - $280.00
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
                                        {/* Sale badge*/}
                                        <div className="badge bg-dark text-white position-absolute"
                                            style={{ top: '0.5rem', right: '0.5rem' }}>
                                            Agotado
                                        </div>
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
                </div>
            </div>





            <footer className="tm-bg-dark-blue">
                <div className="container" id="sec-contact">
                    <div className="row">
                        <p className="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
                            Copyright &copy; <span className="tm-current-year">2022</span> Buque Al Toque</p>
                    </div>
                </div>
            </footer>


        </>
    );
}