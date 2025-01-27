import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";

export default function DearCustomer() {
  const t = useTranslations("MainPage");

  return (
    <div className="flex items-center justify-between p-10">
      <div className="gpa-3 flex flex-col gap-3">
        <span className="text-3xl font-bold">{t("dearCustomers")}</span>
        <span className="text-xl">{t("signInForSpecialOffers")}</span>
      </div>
      <Link
        href="/joinfree/login"
        className="flex items-center gap-2 text-[#00ab68]"
      >
        <span className="text-3xl font-bold">{t("signIn")}</span>
        <ChevronRight size={32} />
      </Link>
    </div>
  );
}
