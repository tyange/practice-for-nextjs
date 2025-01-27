"use client";

import { ChangeEvent } from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "next/form";
import { UserRound, Lock, Square, SquareCheckBig } from "lucide-react";

import { login } from "@/actions/auth.actions";

export default function LoginForm() {
  const [isRemember, setIsRemember] = useState(false);

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
      <Form
        action={login}
        className="flex w-96 flex-col items-center justify-center gap-3"
      >
        <label className="flex w-full rounded-lg border border-gray-300 p-3">
          <UserRound size={32} className="flex-shrink-0" color="#8d8b8b" />
          <input type="text" name="username" className="w-full flex-shrink" />
        </label>
        <label className="flex w-full rounded-lg border border-gray-300 p-3">
          <Lock size={32} className="flex-shrink-0" color="#8d8b8b" />
          <input
            type="password"
            name="password"
            className="w-full flex-shrink"
          />
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
          <button className="h-full w-full rounded-lg bg-[#00ab68] text-lg font-medium text-white">
            Sign in
          </button>
        </div>
      </Form>
      <div className="h-14 w-96">
        <button className="h-full w-full rounded-lg border border-[#D8DDE1] bg-[#F7F9FA] text-lg font-medium text-[#45484B]">
          Sign up
        </button>
      </div>
    </div>
  );
}
