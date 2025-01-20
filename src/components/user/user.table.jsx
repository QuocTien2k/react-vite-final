import { Table } from 'antd';

const UserTable = (props) => {

    const { dataUsers } = props;

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            // key: 'name',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            //key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            //key: 'address',
        }
    ];

    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}

export default UserTable;

/* 
- useEffect: là một hook của react dùng để thực thi một hàm nào đó sau mỗi lần render của component
- useEffect: nhận vào 2 tham số là function callbacks và mảng rỗng
- React Lifecycle: gồm Mounting - Updating - Unmounting
*/