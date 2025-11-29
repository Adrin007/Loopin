"use client";
import { useState } from "react";
import { Shell, Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#f9f8f6] flex items-center justify-center relative px-4 font-geist overflow-hidden">
      <div className="absolute top-6 left-6 flex items-center gap-2 z-20">
        <a href="/">
        <div className="flex items-center justify-center gap-1 group">
          <Shell className="transition-transform duration-500 group-hover:rotate-360 w-7 h-7" />
          <h1 className="font-logo font-semibold text-3xl text-gray-900 flex items-center leading-none">
            loop
          </h1>
        </div>
        </a>
      </div>

      <Image
        src="/bottomflower-1.avif"
        alt="decor-left"
        width={300}
        height={300}
        className="absolute left-0 bottom-0 pointer-events-none select-none opacity-95"
        priority
      />

      <Image
        src="/bottomflower-2.avif"
        alt="decor-right"
        width={300}
        height={300}
        className="absolute right-0 top-0 rotate-180 pointer-events-none select-none opacity-95 transform scale-x-[-1]"
        priority
      />

      <div className="bg-white flex-col items-center justify-center rounded-[2.5rem] shadow-xl p-8 w-full max-w-md border-4 border-b-[1rem] border-black relative z-10">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="text-3xl text-center font-semibold text-slate-900 mb-3">
            Join the loop, begin <span className='font-logo italic'>Building</span>
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Create your account and start automating your workflows.
          </p>
        </div>

        <div className="mb-3 w-full">
          <div className="flex items-center border-2 border-black rounded-xl mt-1 p-3 bg-white">
            <Mail className="w-5 h-5 text-black/50" />
            <input
              type="email"
              placeholder="Email address"
              className="ml-3 flex-1 outline-none text-sm text-black/60 font-medium bg-transparent placeholder:text-black/50 placeholder:font-medium"
            />
          </div>
        </div>

        <div className="mb-3 w-full">
          <div className="flex items-center border-2 border-black rounded-xl mt-1 p-3 bg-white">
            <Lock className="w-5 h-5 text-black/50" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="ml-3 flex-1 outline-none text-sm text-black/60 font-medium bg-transparent placeholder:text-black/50 placeholder:font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="toggle password"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-black/50" />
              ) : (
                <Eye className="w-5 h-5 text-black/50" />
              )}
            </button>
          </div>
        </div>

        <div className="mb-4 w-full">
          <div className="flex items-center border-2 border-black rounded-xl mt-1 p-3 bg-white">
            <Lock className="w-5 h-5 text-black/50" />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className="ml-3 flex-1 outline-none text-sm text-black/60 font-medium bg-transparent placeholder:text-black/50 placeholder:font-medium"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              aria-label="toggle confirm"
            >
              {showConfirm ? (
                <EyeOff className="w-5 h-5 text-black/50" />
              ) : (
                <Eye className="w-5 h-5 text-black/50" />
              )}
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2 text-xs text-slate-700 mb-4">
          <input type="checkbox" className="w-4 h-4 border-black rounded-sm" />
          <span>
            I agree to the{" "}
            <a href="#" className="underline text-slate-900">
              Terms & Privacy
            </a>
          </span>
        </label>

        <button className="w-full bg-black text-white py-4 rounded-full text-sm font-medium">
          Create account
        </button>

        <div className="flex items-center gap-3 my-4 w-full">
          <div className="flex-1 border-t border-slate-200" />
          <span className="text-xs text-slate-500">OR</span>
          <div className="flex-1 border-t border-slate-200" />
        </div>

        <button className="w-full border-1 border-slate-300 py-3 rounded-full text-sm flex items-center justify-center gap-2 mb-2 bg-white">
          <FcGoogle className="w-5 h-5" /> Continue with Google
        </button>

        <button className="w-full border-1 border-slate-300 py-3 rounded-full text-sm flex items-center justify-center gap-2 bg-white">
          <BsGithub className="w-5 h-5" /> Continue with GitHub
        </button>

        <p className="text-xs text-slate-500 mt-5 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-slate-900 font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
