import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, {loader as blogPostsLoader} from './pages/BlogPosts';
import NewPostPage, {action as newPostAction} from './pages/NewPost';
import PostDetailPage, {loader as blogPostLoader} from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: '/blog',
        element: <BlogLayout />,
        
        children: [
          {
            index: true,
            element: <BlogPostsPage />,
            loader: blogPostsLoader,
          },
          {
            path: ':id',
            element: <PostDetailPage />,
            loader: blogPostLoader,
          },
        ],
      },
      {
        path: '/blog/new',
        element: <NewPostPage />,
        action: newPostAction,
      },
    ],
  },
  // {
  //   path: '/newsletter',
  //   action: newsletterAction,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;