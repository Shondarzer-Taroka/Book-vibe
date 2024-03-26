import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import Root from './components/Root/Root.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'

let router=createBrowserRouter([
  {
    path:'/',
    // element: <Home></Home>,
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
