"use client"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useState, useEffect } from 'react';
import { Check, Languages, ChevronDown, Shell, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const languageMap = {
  EN: "English",
  DT: "German",
  JP: "Japanese",
};

const COOKIE_NAME: string = "loop_access_token"; 

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter(); 

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const response = await fetch('/api/auth/status');
        const data = await response.json();
        setIsLoggedIn(data.loggedIn);
      } catch (error) {
        console.error("Failed to fetch login status:", error);
        setIsLoggedIn(false);
      }
    }
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { 
        method: 'POST',
    });
    setIsLoggedIn(false);
    router.push('/');
  };
  if (isLoggedIn === null) {
      return null; 
  }

  return (
    <nav className="w-full flex items-center justify-between px-3 md:px-8 py-2.5 font-geist bg-white">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center gap-1 group">
          <Shell className="transition-transform duration-500 group-hover:rotate-360" />
          <h1 className="font-logo font-semibold text-2xl text-gray-900 flex items-center leading-none">
            loop
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-1 text-gray-700 text-xs font-medium mt-1">
          <button className="hover:bg-slate-600/5 transition-all duration-300 text-[0.8rem] px-3 py-1.5 rounded-md">
            Features
          </button>
          <button className="hover:bg-slate-600/5 transition-all duration-300 text-[0.8rem] px-3 py-1.5 rounded-md">
            Integrations
          </button>
          <button className="hover:bg-slate-600/5 transition-all duration-300 text-[0.8rem] px-3 py-1.5 rounded-md">
            How it Works
          </button>
          <button className="hover:bg-slate-600/5 transition-all duration-300 text-[0.8rem] px-3 py-1.5 rounded-md">
            Pricing
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:bg-slate-600/5 transition-all duration-300 text-[0.8rem] px-3 py-1.5 rounded-sm border-1 border-gray-600/30 focus:outline-none cursor-pointer">
                <Languages className="w-3 h-3" />
                {selectedLanguage}
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-28 bg-white border border-gray-200 rounded-md shadow-lg">
              {Object.entries(languageMap).map(([key, label]) => (
                <DropdownMenuItem
                  key={key}
                  className="flex items-center justify-between px-3 py-1 text-[0.8rem] hover:bg-gray-100"
                  onClick={() => setSelectedLanguage(key)}
                >
                  {key} - {label}
                  {selectedLanguage === key && (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {isLoggedIn ? (
          <a href="/login">
              <button className="bg-black hover:opacity-90 transition-all duration-300 text-white text-[0.8rem] font-medium px-3 py-1.5 rounded-sm flex items-center justify-center cursor-pointer" onClick={handleLogout}>
                Log out
              </button>
            </a>
        ) : (
          <>
            <a href="/login">
              <button className="text-gray-700 font-medium hover:bg-slate-600/5 transition-all duration-300 text-[0.8rem] px-3 py-1.5 rounded-sm border-1 border-gray-600/30 cursor-pointer">
                Log in
              </button>
            </a>
            <a href="/signup">
              <button className="bg-black hover:opacity-90 transition-all duration-300 text-white text-[0.8rem] font-medium px-3 py-1.5 rounded-sm flex items-center justify-center cursor-pointer">
                Sign up
              </button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
}