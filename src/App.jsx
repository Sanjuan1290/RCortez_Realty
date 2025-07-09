import {RouterProvider, 
        createBrowserRouter, 
        createRoutesFromElements , 
        Route} from 'react-router-dom'

import Layout from './components/layout'

import Home from './pages/Home'

export default function App(){
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
        </Route>
    ))

    return <RouterProvider router={router} />
}


