import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Main Page</Link></li>
                <li><Link to="/browse">Browse Inventory</Link></li>
            </ul>
        </nav>
    );
}