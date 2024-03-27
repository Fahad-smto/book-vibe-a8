 
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ListedBooks from './Pages/ListedBooks.jsx'
import PagesToRead from './Pages/PagesToRead.jsx'
import Layout from './Layouts/Layout.jsx'
import BookDetails from './Pages/BookDetails.jsx'


const router = createBrowserRouter([
  {
  
 path :'/',
 element: <Layout/>,
children :[
  {
    path :'/',
    element :<Home/>,
  },
  {
    path:'/list-book',
    element: <ListedBooks/>
  },
  {
    path:'/page-to-read',
    element: <PagesToRead/>
  },
 
  {
    path :'/book/:id',
    element :<BookDetails/>,
    loader:()=>fetch(`/books.json`),
  },

]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

  <RouterProvider router={router} />
  
  </>
)
