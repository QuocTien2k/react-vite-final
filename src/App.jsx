import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
const App = () => {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

/* 
-props: là một object chứa các thuộc tính của component được truyền vào từ component cha sang component con
vd: <TodoData age={age} todoList={todoList} /> : truyền 2 props age và todoList vào component TodoData

-useState: là một hook của react giúp chúng ta quản lý state trong functional component
-usesState trả về một mảng gồm 2 phần tử, phần tử đầu tiên là giá trị của state, 
phần tử thứ 2 là hàm để thay đổi giá trị của state
*/