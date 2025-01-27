"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleX } from "lucide-react";
import { getLang, setLang } from "@/actions/lang.actions";

export default function Modal() {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const router = useRouter();

  function handleClose() {
    router.back();
  }

  function handleSelectLang(lang: string) {
    setSelectedLang(lang);
    setLang(lang);
  }

  useEffect(() => {
    async function getByLangInCookie() {
      const lang = await getLang();
      if (!lang) {
        setSelectedLang("en");
        return;
      }
      setSelectedLang(lang.value);
    }
    getByLangInCookie();
  }, []);

  return (
    <dialog
      open
      className="fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-slate-200 bg-opacity-70"
      onClose={handleClose}
    >
      <div className="h-42 relative w-2/3 rounded-md bg-white px-5 py-20">
        <button className="absolute right-5 top-5" onClick={handleClose}>
          <CircleX />
        </button>
        <ul className="flex-col items-center justify-center gap-5">
          <li
            className={`flex w-full items-center justify-center rounded-lg p-3 ${selectedLang === "en" ? "bg-slate-300" : "bg-slate-100"}`}
          >
            <button
              className="h-full w-full"
              onClick={() => handleSelectLang("en")}
            >
              <span>EN</span>
            </button>
          </li>
          <li
            className={`mt-3 flex w-full items-center justify-center rounded-lg p-3 ${selectedLang === "ko" ? "bg-slate-300" : "bg-slate-100"}`}
          >
            <button
              className="h-full w-full"
              onClick={() => handleSelectLang("ko")}
            >
              <span>KO</span>
            </button>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
