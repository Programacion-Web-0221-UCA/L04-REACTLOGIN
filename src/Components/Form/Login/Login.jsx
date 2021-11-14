import { useField } from '../../../hooks/useField';
import { useState, useEffect } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (e, save) => {
        save(e.target.value);
    }

    return (
    <div className="w-full">
        <form className="flex flex-col gap-4 items-center justify-center">
            <h2 className="uppercase text-gray-800 font-monserrat font-black text-4xl mb-4">Prograweb</h2>

            <input className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
                type='text'
                value={username}
                placeholder='e.g. username'
                onChange={(e) => onChange(e, setUsername)}
            />

            <input className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
                type="password"
                placeholder="e.g password"
                onChange={(e) => onChange(e, setPassword)}
                value={password}
            />

            <button className="mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out w-1/2 text-xl text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Log In</button>
            <button className="mt-2 transition w-full rounded border border-green-500 duration-300 ease-in-out w-1/2 text-xl text-bold uppercase bg-transparent hover:bg-green-400 py-2 px-4 text-gray-700 hover:text-gray-100">Sign Up</button>
        </form>
    </div>
    );
}