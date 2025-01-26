import MainHeader from "@/components/main-header";
import MainBanners from "@/components/main-banners";
import CategoryMenu from "@/components/category-menu";

export default function Main() {
  return (
    <div className="h-screen w-screen">
      <MainHeader />
      <main>
        <MainBanners />
        <CategoryMenu />
      </main>
    </div>
  );
}
