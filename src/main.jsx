import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, { loader as postsLoader } from './router/Posts.jsx' 
import NewPost, { action as newPostAction } from './router/NewPost.jsx'
import PostDetails, { loader as postDetailsLoader } from './router/PostDetails.jsx'
import RouterLayout from './router/RootLayout.jsx'
import './index.css'

const router = createBrowserRouter([
  { path:'/', 
    element: <RouterLayout />, 
    children: [
      { path: '/', 
        element: <Posts />, 
        loader : postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader }
      ] },
    ], 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
