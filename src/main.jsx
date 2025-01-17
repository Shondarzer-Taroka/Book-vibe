import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import Root from './components/Root/Root.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'
import PagesToRead from './components/PagesToRead/PagesToRead.jsx'
import Error from './components/Error/Error.jsx'
import BestSeller from './components/BestSeller/BestSeller.jsx'
import NewBooks from './components/NewBooks/NewBooks.jsx'

let router=createBrowserRouter([
  {
    path:'/',
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },

      {
       path:'/listed',
       loader:()=> fetch('/books.json'),
       element: <ListedBooks></ListedBooks>
      },

      {
        path:'/book/:id',
        element: <BookDetails></BookDetails>,
        loader:()=> fetch('/books.json')
      },
      {
        path:'/pages',
        element: <PagesToRead></PagesToRead>,
        loader:()=>fetch('/books.json')
      },
      {
        path: '/best',
        element: <BestSeller></BestSeller>,
        loader: ()=> fetch('/medicalBooks.json')
      },
      {
        path:'/newbooks',
        element: <NewBooks></NewBooks>,
        loader: ()=>fetch('newbooks.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
