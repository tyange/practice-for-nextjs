import MainHeader from "@/components/main-header";
import MainBanners from "@/components/main-banners";

export default function Main() {
  return (
    <div className="h-screen w-screen">
      <MainHeader />
      <main>
        <MainBanners />
      </main>
    </div>
  );
}
