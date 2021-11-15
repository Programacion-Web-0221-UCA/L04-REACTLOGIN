import { useState } from "react";
import { useUserContext } from "../../Contexts/UserContext";

export default function Login(){
    const context = useUserContext() 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChange = (e, save) => {
        save(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try{
            const response = await context.login(username, password)

            console.log( response )
            setPassword('')
            setUsername('')

        }catch(error){
            console.error(error)
        }
    }

    return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <main className="w-3/4 max-w-3xl bg-blue-100 rounded-md p-8 md:p-10 shadow-md">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <h2 className="uppercase text-gray-800 font-monserrat font-black text-4xl mb-4">
            Prograweb
          </h2>

          <input
            className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
            type="text"
            placeholder="e.g. username"
            value={username}
            onChange={(e) => onChange(e, setUsername)}
          />

          <input
            className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
            type="password"
            placeholder="e.g password"
            value={password}
            onChange={(e) => onChange(e, setPassword)}
          />

          <button className="mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out text-xl text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}