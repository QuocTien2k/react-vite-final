import { Modal, Button, Divider, Typography } from "antd";

const { Title, Text } = Typography;

const ViewUserDetail = ({ dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen }) => {
    return (
        <Modal
            title="User Detail"
            open={isDetailOpen} // Hiển thị modal nếu isDetailOpen = true
            onCancel={() => {
                setIsDetailOpen(false)
                setDataDetail(null)
            }}
            onOk={() => setIsDetailOpen(false)}
            footer={
                [
                    <Button key="ok" type="primary" onClick={() => setIsDetailOpen(false)}>
                        OK
                    </Button>,
                ]} // Chỉ hiển thị nút OK
        >
            <div>
                {/* Đường kẻ ngăn cách */}
                <Divider style={{ background: "#000000", height: "2px" }} />

                {/* Nội dung hiển thị chi tiết */}
                {dataDetail ? (
                    <div style={{ padding: "16px", lineHeight: "1.6", background: "#f9f9f9", borderRadius: "8px" }}>
                        <Title level={5} style={{ marginBottom: "16px" }}>
                            Thông Tin Chi Tiết
                        </Title>
                        <p>
                            <Text strong>ID:</Text> {dataDetail._id}
                        </p>
                        <p>
                            <Text strong>Họ và Tên:</Text> {dataDetail.fullName}
                        </p>
                        <p>
                            <Text strong>Email:</Text> {dataDetail.email}
                        </p>
                        <p>
                            <Text strong>Số điện thoại:</Text> {dataDetail.phone}
                        </p>
                        <p>
                            <Text strong>Avatar:</Text>
                        </p>
                        <div>
                            <img
                                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}
                                alt=""
                            />
                        </div>
                        <div>
                            <label htmlFor="btnUpload" style={{
                                display: "block",
                                width: "fit-content",
                                marginTop: "15px",
                                padding: "5px 10px",
                                cursor: "pointer",
                                borderRadius: "5px",
                                background: "orange"
                            }}
                            >Upload Avatar</label>
                            <input type="file" hidden id="btnUpload" />
                        </div>
                    </div>
                ) : (
                    <p style={{ textAlign: "center", fontSize: "16px", marginTop: "16px" }}>
                        Không có dữ liệu
                    </p>
                )}
            </div>
        </Modal >
    );
};

export default ViewUserDetail;
