'use client';
import { useRouter } from 'next/navigation';

export default function Login({setIsLoggedIn} : {setIsLoggedIn: (value: boolean) => void}) {
    const router = useRouter()
    const handleSubmit = () => {
        setIsLoggedIn(true)
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
      <form  onClick={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
        //   value={username}
        //   onChange={(e) => setUsername(e.target.value)}
          className="block px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
          className="block px-4 py-2 border border-gray-300 rounded"
        />
        <button
            type="submit"
            className="block w-full px-4 py-2 bg-purple-600 text-white rounded cursor:pointer"
        >
          Submit
        </button>
      </form>
    </div>
    )
}