import styled from './Navbar.module.css'
import { Link } from "react-router-dom"

function Navbar(props) {
    return (
        <div className={styled.headerWrapper}>
            <div className="container">
                <div className={styled.header}>
                    <div className={styled.menu}>
                        <div><h3>{props.title}</h3></div>ِ
                        <div >
                            <ul>
                                {/* <li><a href="#"><Link>Home</Link></a></li> */}
                                <li><a href="#"><Link to="/home">Home</Link></a></li>
                                <li><a href="#"><Link to="/">Products</Link></a></li>
                                <li><a href="#"><Link to="/about">About Us</Link></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styled.search}>

                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Navbar;