import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layouts/Sidebar'

const ProtectedLayout = () => {

    return (
        <main className='h-screen md:flex'>
            <Sidebar />
            <Outlet />
        </main>
    )
}

export default ProtectedLayout