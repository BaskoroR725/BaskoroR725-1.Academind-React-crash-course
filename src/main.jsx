import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, { loader as postsLoader } from './router/Posts.jsx' 
import './index.css'
import NewPost from './router/NewPost.jsx'
import RouterLayout from './router/RootLayout.jsx'

const router = createBrowserRouter([
  { path:'/', element: <RouterLayout />, 
    children: [
      { path: '/', 
        element: <Posts />, 
        loader : postsLoader,
        children: [{ path : '/create-post', element: <NewPost/> },
      ] },
    ], 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
