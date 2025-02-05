import { Link } from 'react-router-dom';
import { UsergroupAddOutlined, HomeOutlined, BookOutlined, UserAddOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.Context';
const Header = () => {

    const [current, setCurrent] = useState('');
    const { user } = useContext(AuthContext);
    console.log("check user: ", user);

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
        ...(!user.id ? [
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
        ] : [
            {
                label: `Hello, ${user.fullName}`,
                key: "setting",
                icon: <AliwangwangOutlined />,
                style: { marginLeft: "auto" }, // Đẩy sang phải
                children: [
                    {
                        label: "Đăng xuất",
                        key: "logout"
                    }
                ]
            }
        ]),
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={[
                ...leftItems,
                { type: "divider" }, // Tạo khoảng trống (nếu cần)
                ...rightItems,
            ]}
        />
    );
}

export default Header;
/* 
- Thẻ Navlink: là một thẻ giúp chuyển hướng giữa các trang mà không cần load lại trang và thêm class active
- Thẻ Link: là một thẻ giúp chuyển hướng giữa các trang mà không cần load lại trang
- ...leftItems/...rightItems: là cú pháp spread operator giúp nối mảng leftItems/rightItems vào mảng items của Menu
*/