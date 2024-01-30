import Header from './components/header/Header'
import Form from './components/form-validation/Form'
import NavBar from './components/navbar/NavBar'
import Todo from './components/todo-app/Todo'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import './App.scss'
function App() {
  return (
    <>
    <Header/>
    <NavBar/>
    <Outlet/>
   
    </>
  )
}

export const AppRoute = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
   
    children:[
    {
      path:'/',
      element: <Form/>,
    },
    {
      path:'/Todo-app',
      element: <Todo/>
    }
  ]
  }
])

export default App
