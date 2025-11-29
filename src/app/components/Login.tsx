"use client";
import { useState } from "react";
import {
  Shell,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CircleCheckBig,
  Loader2,
  Ban,
  X
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        toast.custom(
          (t) => (
            <div
              className={`flex items-start justify-center px-4 py-5 rounded-xl shadow-lg w-full max-w-md 
                    bg-black text-white font-geist
                    transform transition-all duration-500
                    ${t.visible ? 'animate-toast-enter' : 'animate-toast-leave'}`}
            >
              <div className="flex-shrink-0 mt-1 rounded-full text-green-400 flex items-center justify-center mr-3">
               <CircleCheckBig className="w-7 h-7"/>
              </div>
              <div className="flex-grow">
                <p className="font-bold text-base">Congratulations</p>
                <p className="text-xs">You have logged in successfully!</p>
              </div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="ml-4 p-1 mt-1 rounded-full text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ),
          {
            duration: 5000,
            position: 'top-right',
          }
        );
        router.push("/");
      } else {
        toast.custom(
          (t) => (
            <div
              className={`flex font-geist items-start justify-center px-4 py-5 rounded-xl shadow-lg w-full max-w-md 
                    bg-black text-white
                    transform transition-all duration-500
                    ${t.visible ? 'animate-toast-enter' : 'animate-toast-leave'}`}
            >
              <div className="flex-shrink-0 mt-1 rounded-full text-red-400 flex items-center justify-center mr-3">
               <Ban className="w-7 h-7"/>
              </div>
              <div className="flex-grow">
                <p className="font-bold text-base">Sorry Unable to Login!</p>
                <p className="text-xs">Invalid email or password</p>
              </div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="ml-4 p-1 mt-1 rounded-full text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ),
          {
            duration: 5000,
            position: 'top-right',
          }
        );
      }

    } catch (err) {
      console.error("Login error:", err);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#f9f8f6] flex items-center justify-center relative px-4 font-geist overflow-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="flex items-center justify-center gap-1 group">
          <Shell className="transition-transform duration-500 group-hover:rotate-360 w-7 h-7" />
          <h1 className="font-logo font-semibold text-3xl text-gray-900 flex items-center leading-none">
            loop
          </h1>
        </div>
      </div>

      <Image
        src="/bottomflower-1.avif"
        alt="green cord"
        width={300}
        height={300}
        className="absolute left-0 bottom-0 pointer-events-none select-none"
        priority
      />

      <Image
        src="/bottomflower-2.avif"
        alt="multi cord"
        width={300}
        height={300}
        className="absolute right-0 top-0 rotate-180 pointer-events-none select-none transform scale-x-[-1]"
        priority
      />

      <form
        onSubmit={handleLogin}
        className="bg-white flex-col items-center justify-center rounded-[2.5rem] shadow-xl p-8 w-full max-w-md border-4 border-b-[1rem] border-black"
      >

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl text-center font-semibold text-slate-900 mb-2">
            <span className='font-logo italic font-bold'>Welcome</span> back to your workspace
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Sign in to continue to your dashboard.
          </p>
        </div>

        {/* Display Status Message */}
        {/* {statusMessage && (
          <div className={`p-3 mb-4 rounded-xl border-2 ${statusMessage.type === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700'} flex items-center`}>
            {statusMessage.type === 'success' ? (
              <CheckCircle className="w-5 h-5 mr-3" />
            ) : (
              <XCircle className="w-5 h-5 mr-3" />
            )}
            <p className="text-sm font-medium">{statusMessage.message}</p>
          </div>
        )} */}

        <div className="mb-4">
          <div className="flex items-center border-2 border-black rounded-xl mt-1 p-3 bg-white">
            <Mail className="w-5 h-5 text-black/50" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="ml-3 flex-1 outline-none text-sm text-black/60 font-medium bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center border-2 border-black rounded-xl mt-1 p-3 bg-white">
            <Lock className="w-5 h-5 text-black/50" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="ml-3 flex-1 outline-none text-sm text-black/60 font-medium bg-transparent"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={isLoading}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} disabled={isLoading}>
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-black/50" />
              ) : (
                <Eye className="w-5 h-5 text-black/50" />
              )}
            </button>
          </div>

          <div className="text-right mt-2">
            <a className="text-xs text-slate-500 hover:underline" href="#">
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full cursor-pointer text-white py-4 rounded-full text-sm font-medium transition duration-150 ease-in-out 
            ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Logging in...
            </span>
          ) : (
            "Login with Email"
          )}
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 border-t border-slate-200" />
          <span className="text-xs text-slate-500">OR</span>
          <div className="flex-1 border-t border-slate-200" />
        </div>

        <button type="button" className="w-full border-1 border-slate-300 py-3 rounded-full text-sm flex items-center justify-center gap-2 mb-2 bg-white" disabled={isLoading}>
          <FcGoogle className="w-5 h-5" /> Continue with Google
        </button>

        <button type="button" className="w-full border-1 border-slate-300 py-3 rounded-full text-sm flex items-center justify-center gap-2 bg-white" disabled={isLoading}>
          <BsGithub className="w-5 h-5" /> Continue with GitHub
        </button>

        <p className="text-xs text-slate-500 mt-5 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-slate-900 font-medium">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}