import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { fetchAllBookAPI } from "../components/services/api.service";
import CreateBookControl from "../components/book/create.book.control";

const BookPage = () => {
    const [dataBooks, setDataBooks] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    useEffect(() => {
        loadBook();
    }, [current, pageSize]);

    const loadBook = async () => {
        const res = await fetchAllBookAPI(current, pageSize);
        //console.log(res.data.result);
        if (res.data) {
            setDataBooks(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
    }
    return (
        <div style={{ padding: "20px" }}>
            <CreateBookControl loadBook={loadBook} isCreateOpen={isCreateOpen} setIsCreateOpen={setIsCreateOpen} />
            <BookTable
                dataBooks={dataBooks}
                current={current}
                setCurrent={setCurrent}
                pageSize={pageSize}
                setPageSize={setPageSize}
                total={total}
                loadBook={loadBook}
            />
        </div>
    )
}

export default BookPage;