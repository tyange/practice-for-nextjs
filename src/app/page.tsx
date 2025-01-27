import MainHeader from "@/components/main-header";
import MainBanners from "@/components/main-banners";
import CategoryMenu from "@/components/category-menu/category-menu";
import DearCustomer from "@/components/dear-customer";
import MainInspectedVehicle from "@/components/main-inspected-vehicle";

export default function Main() {
  return (
    <>
      <div className="h-screen w-screen">
        <MainHeader />
        <main>
          <MainBanners />
          <CategoryMenu />
          <DearCustomer />
          <MainInspectedVehicle />
        </main>
      </div>
    </>
  );
}
