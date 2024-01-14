import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Admin: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    console.log(username, password);
    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            console.log(JSON.stringify({ username, password }));
            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                router.push('/admin/dashboard'); // Navigate to the dashboard page
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username:
                    <input
                        className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password:
                    <input
                        className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <div className="mb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
            {error && <div className="text-red-500">{error}</div>}
        </div>
    );
};

export default Admin;
