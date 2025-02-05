 
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ListedBooks from './Pages/ListedBooks.jsx'
import PagesToRead from './Pages/PagesToRead.jsx'
import Layout from './Layouts/Layout.jsx'
import BookDetails from './Pages/BookDetails.jsx'
import ReadBooks from './Components/ReadBooks.jsx'
import WishList from './Components/WishList.jsx'
import About from './Pages/About.jsx'
import Comics from './Pages/Comics.jsx'
import NoMatch from './Components/NoMatch.jsx'


const router = createBrowserRouter([

  {
    path: '*',
    element:<NoMatch/>,
  
  },
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
    element: <ListedBooks/>,
    children :[
      {
         path :'read-book',
        element :<ReadBooks/>,
        loader:()=>fetch(`/books.json`)
      },
      {
        path:'wishList',
        element:<WishList/>
      }
    ]
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

  {
    path :'/about',
    element :<About/>
  },
  {
    path : '/comics',
    element:<Comics/>
  }

]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

  <RouterProvider router={router} />
  
  </>
)
