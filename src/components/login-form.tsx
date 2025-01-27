"use client";

import { useState, ChangeEvent, useActionState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserRound,
  Lock,
  Square,
  SquareCheckBig,
  LoaderCircle,
} from "lucide-react";

import { login } from "@/actions/auth.actions";

export default function LoginForm() {
  const [isRemember, setIsRemember] = useState(false);
  const [state, formAction, pending] = useActionState(login, {
    status: "idle",
    message: "",
  });

  function handleRemember(e: ChangeEvent<HTMLInputElement>) {
    setIsRemember(e.target.checked);
    // TODO: remember logic
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <div className="flex w-full flex-col items-center">
        <div>
          <Link className="relative block h-20 w-80" href="/">
            <Image
              fill
              src="https://image.autowini.com/IMG/mobile/common/logo.svg"
              alt="autowini logo"
            />
          </Link>
        </div>
        <div className="flex w-80 flex-col items-center justify-center">
          <span className="text-xl">Sign in to Autowini.com</span>
          <span className="text-xl">No. 1 Auto Trading Platform in Korea.</span>
        </div>
      </div>
      <form
        action={formAction}
        className="flex w-96 flex-col items-center justify-center gap-3"
      >
        <label className="flex w-full rounded-lg border border-gray-300 p-3">
          <UserRound size={32} className="flex-shrink-0" color="#8d8b8b" />
          <input type="text" name="username" className="w-full flex-shrink" />
        </label>
        <label
          className={`flex w-full rounded-lg border p-3 ${state.status === "error" ? "border-red-500" : "border-gray-300"}`}
        >
          <Lock size={32} className="flex-shrink-0" color="#8d8b8b" />
          <input
            type="password"
            name="password"
            className="w-full flex-shrink"
          />
          {state.message && (
            <p
              className={`mt-1 text-sm ${state.status === "error" ? "text-red-500" : "text-gray-500"}`}
            >
              {state.message}
            </p>
          )}
        </label>
        <div className="flex w-full justify-start">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="hidden appearance-none"
              onChange={handleRemember}
            />
            {isRemember ? (
              <SquareCheckBig size={32} color="#00ab68" />
            ) : (
              <Square size={32} color="#8d8b8b" />
            )}
            <span>Remember Me</span>
          </label>
        </div>
        <div className="h-14 w-full">
          <button
            className={`h-full w-full rounded-lg ${!pending ? "bg-[#00ab68]" : "bg-gray-400"} flex items-center justify-center text-lg font-medium text-white`}
            disabled={pending}
          >
            {pending ? (
              <LoaderCircle size={32} color="#fff" className="animate-spin" />
            ) : (
              <span>Sign in</span>
            )}
          </button>
        </div>
      </form>
      <div className="h-14 w-96">
        <button className="h-full w-full rounded-lg border border-[#D8DDE1] bg-[#F7F9FA] text-lg font-medium text-[#45484B]">
          Sign up
        </button>
      </div>
    </div>
  );
}
