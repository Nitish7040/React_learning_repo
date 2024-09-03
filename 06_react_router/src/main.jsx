import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import About from './About/About.jsx';
import Layout from './Layout.jsx';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';

import './index.css';
import User from './User/User.jsx';
import Github ,{githubinfo} from './Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,  
//     children: [
//       {
//         path: '',
//         element: <Home /> 
//       },
//       {
//         path: 'about',  
//         element: <About /> 
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]);


// 2nd method


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />

      // using of loader to fetch data in easy way
      <Route 
      // loader={() =>{}}
      loader={githubinfo}
      path='github' 
      element={<Github />} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
