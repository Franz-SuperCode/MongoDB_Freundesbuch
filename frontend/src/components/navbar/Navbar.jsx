import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/"><p>Home</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
            <Link to="/beitrag"><p>Beiträge</p></Link>
        </nav>
    );
};

export default Navbar;