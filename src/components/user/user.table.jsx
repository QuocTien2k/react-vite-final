import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './user.update';
import { useState } from 'react';
import ViewUserDetail from './user.view.detail';

const UserTable = (props) => {

    const { dataUsers, loadUser } = props;

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        href='#'
                        onClick={() => {
                            setDataDetail(record)
                            setIsDetailOpen(true)
                        }}
                    >
                        {record._id}
                    </a >
                )
            }
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
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "20px", fontSize: "18px" }}>
                        <EditOutlined
                            style={{ cursor: "pointer", color: "orange" }}
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true);
                            }}
                        />
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </div>
                )
            }
        }
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
            />
        </>
    )
}

export default UserTable;

/* 
- useEffect: là một hook của react dùng để thực thi một hàm nào đó sau mỗi lần render của component
- useEffect: nhận vào 2 tham số là function callbacks và mảng rỗng
- React Lifecycle: gồm Mounting - Updating - Unmounting
*/