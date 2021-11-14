import { useUserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import ADMIN from '../../assets/img/admin-img.png'

export default function Admin() {
    const navigate = useNavigate()
    const { logout } = useUserContext()

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return (
        <section className="flex gap-4 flex-col lg:flex-row justify-around items-center p-6 lg:p-10 min-h-screen">
            <div className="w-4/5 lg:w-1/2 gap-6 h-full flex flex-col justify-around items-center">
                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">Admin page</h2>
                <h3 className="text-lg font-medium text-gray-700 text-center">Only users with the admin role can view this page</h3>

                <p className="text-xl font-medium text-gray-400 text-center mt-6">If you want to see this page you have to ask permission from the administrators of the application</p>

                <button onClick={logoutHandler} className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Log out</button>
            </div>

            <div className="w-4/5 lg:w-1/2 flex justify-center items-center">
                <img className="w-4/5" src={ADMIN} />
            </div>
        </section>
    )

}