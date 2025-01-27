import MainHeader from "@/components/main-header";
import MainBanners from "@/components/main-banners";
import CategoryMenu from "@/components/category-menu/category-menu";
import DearCustomer from "@/components/dear-customer";
import MainInspectedVehicle from "@/components/main-inspected-vehicle";
import { cookies } from "next/headers";

export default async function Main() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const isLoggedIn = !!token;

  return (
    <>
      <div className="h-screen w-screen">
        <MainHeader />
        <main>
          <MainBanners />
          <CategoryMenu />
          {!isLoggedIn && <DearCustomer />}
          <MainInspectedVehicle />
        </main>
      </div>
    </>
  );
}
