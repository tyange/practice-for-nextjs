import { getBanner } from "@/actions/main.actions";

import Banners from "@/components/banners";

export default async function MainBanners() {
  const data = await getBanner();
  const banners = data.data;

  return <Banners banners={banners} />;
}
