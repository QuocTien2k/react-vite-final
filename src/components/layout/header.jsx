import { Link } from 'react-router-dom';
import { UsergroupAddOutlined, HomeOutlined, AudioOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const Header = () => {

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        //console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <AudioOutlined />,

        }
    ];

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}

export default Header;
/* 
- Thẻ Navlink: là một thẻ giúp chuyển hướng giữa các trang mà không cần load lại trang và thêm class active
- Thẻ Link: là một thẻ giúp chuyển hướng giữa các trang mà không cần load lại trang
*/