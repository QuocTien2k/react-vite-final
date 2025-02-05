import { Link } from 'react-router-dom';
import { UsergroupAddOutlined, HomeOutlined, BookOutlined, UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const Header = () => {

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        //console.log('click ', e);
        setCurrent(e.key);
    };

    // Menu bên trái
    const leftItems = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: "home",
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: "users",
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: "books",
            icon: <BookOutlined />,
        },
    ];

    // Menu bên phải
    const rightItems = [
        {
            label: <Link to={"/register"}>Register</Link>,
            key: "register",
            icon: <UserAddOutlined />,
            style: { marginLeft: "auto" }, // Đẩy sang phải
        },
        {
            label: <Link to={"/login"}>Login</Link>,
            key: "login",
            icon: <LoginOutlined />,
        },
    ];

    return (
        <Menu onclick={onClick} selectkeys={[current]} mode="horizontal">
            {leftItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>
            ))}

            {/* Khoảng trống đẩy bên phải */}
            <Menu.Item style={{ marginLeft: "auto" }} disabled></Menu.Item>

            {rightItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>
            ))}
        </Menu>
    );
}

export default Header;
/* 
- Thẻ Navlink: là một thẻ giúp chuyển hướng giữa các trang mà không cần load lại trang và thêm class active
- Thẻ Link: là một thẻ giúp chuyển hướng giữa các trang mà không cần load lại trang
*/