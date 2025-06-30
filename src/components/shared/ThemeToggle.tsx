'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Load theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                }`}
        >
            <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
                    }`}
            />
        </button>



    );
}
