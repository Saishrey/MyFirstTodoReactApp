import SearchBox from './components/SearchBox.jsx'
import './App.css'
import Todo from './components/Todo.jsx'
import Products from './components/Products.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Test from './components/Test.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/MyFirstTodoReactApp/' element={<Home />} />
        <Route path='/MyFirstTodoReactApp/todo' element={<Todo />} />
        <Route path='/MyFirstTodoReactApp/products' element={<Products />} />
        <Route path='/MyFirstTodoReactApp/searchbox' element={<SearchBox />} />
        <Route path='/MyFirstTodoReactApp/test' element={<Test />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
