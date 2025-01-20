import { NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
        </ul>

    )
}

export default Header;
/* 
- Thẻ Navlink: là một thẻ giúp chuyển hướng giữa các trang mà không cần load lại trang và thêm class active
- Thẻ Link: là một thẻ giúp chuyển hướng giữa các trang mà không cần load lại trang
*/