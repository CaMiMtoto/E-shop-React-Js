import { IconCherry, IconSearch, IconShoppingBag} from '@tabler/icons';
import {Link} from "react-router-dom";
import {useStateValue} from "../States/StateProvider.jsx";

export function Header() {
    const [{basket}, dispatch] = useStateValue();
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container">
            <Link to={'/'} className="navbar-brand text-warning">
                <IconCherry width={40} height={40}/>
                <span className="ms-1 fw-bold">eShop</span>
            </Link>
            <button className="navbar-toggler rounded-0 shadow-none border-0" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                    </li>

                </ul>
                <form className="d-flex flex-grow-1 mx-lg-3" role="search">
                    <div className="input-group">
                        <input className="form-control" type="search" placeholder="Search products ... "/>
                        <button className="btn btn-warning " type="submit">
                            <IconSearch/>
                        </button>
                    </div>
                </form>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <div className="nav-link d-flex flex-column justify-content-center ">
                            <span className="small text-muted">Hello Guest</span>
                            <a href="" className="fw-bold text-decoration-none text-white fs-6">
                                Sign in
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link d-flex flex-column justify-content-center ">
                            <span className="small text-muted">Your</span>
                            <a href="" className="fw-bold text-decoration-none text-white fs-6">
                                Shop
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to={'/shopping-cart'} className="nav-link">
                            <span className="position-relative">
                            <IconShoppingBag width={40} height={40}/>
                            <span className="badge bg-primary rounded-pill small  position-absolute">
                                {basket.length}
                            </span>
                            </span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>;
}