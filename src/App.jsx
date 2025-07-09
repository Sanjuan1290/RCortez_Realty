import {RouterProvider, 
        createBrowserRouter, 
        createRoutesFromElements , 
        Route} from 'react-router-dom'

import Layout from './components/layout'

export default function App(){
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />}>
    
        </Route>
    ))

    return <RouterProvider router={router} />
}


