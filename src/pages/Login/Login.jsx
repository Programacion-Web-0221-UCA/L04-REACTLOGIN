import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

const Login = () => {
    const { login, token } = useUserContext();

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(false);

    const onChangeHandler = (e, save) => {
        save(e.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const logged = await login(usernameInput, passwordInput);
        setError(!logged);

        setUsernameInput("");
        setPasswordInput("");
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <main className="w-3/4 max-w-3xl bg-blue-100 rounded-md p-8 md:p-10 shadow-md">
                <form className="flex flex-col gap-4 items-center justify-center"
                    onSubmit= { onSubmitHandler }>
                    <h2 className="uppercase text-gray-800 font-monserrat font-black text-4xl mb-4">
                        Prograweb
                    </h2>
                    { error && !token && <p className="text-red-500 font-bold"> Ocurrió un error </p>}
                    <input
                        className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
                        type="text"
                        placeholder="e.g. username"
                        onChange = { e => onChangeHandler(e, setUsernameInput)}
                    />
                    <input
                        className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
                        type="password"
                        placeholder="e.g password"
                        onChange = { e => onChangeHandler(e, setPasswordInput)}
                    />
                    <button className="mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out text-xl text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">
                        Sign In{" "}
                    </button>
                </form>
            </main>
            { token && <p className="p-2 bg-green-700 text-white mt-6 rounded-md shadow-lg">Ya has iniciado sesión</p>}
        </div>
    );
}

export default Login