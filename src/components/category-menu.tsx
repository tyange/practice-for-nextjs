type CategoryItem = {
  name: string;
  iconClass: string;
  href: string;
};

const categories: CategoryItem[] = [
  {
    name: "Used Cars",
    iconClass: "cate1",
    href: "/s/search?condition=C020",
  },
  {
    name: "New Cars",
    iconClass: "cate11",
    href: "/s/search?condition=C010",
  },
  {
    name: "SUVs",
    iconClass: "cate2",
    href: "/s/search?vehicleType=C020",
  },
  {
    name: "Trucks",
    iconClass: "cate3",
    href: "/s/search?type=trucks",
  },
  {
    name: "Parts",
    iconClass: "cate4",
    href: "/Parts/parts-search",
  },
  {
    name: "Auction",
    iconClass: "cate5",
    href: "https://m.auctionwini.com/main",
  },
  {
    name: "RHD",
    iconClass: "cate7",
    href: "/s/search?steering=C020",
  },
  {
    name: "Buses",
    iconClass: "cate8",
    href: "/s/search?type=buses",
  },
  {
    name: "Equipment",
    iconClass: "cate9",
    href: "/s/search?type=equipments",
  },
  {
    name: "AI",
    iconClass: "cate10",
    href: "/s/search",
  },
  {
    name: "Tucson",
    iconClass: "cate1",
    href: "/s/search?make=C0680&subModel=C0330",
  },
  {
    name: "SantaFe",
    iconClass: "cate2",
    href: "/s/search?make=C0680&subModel=C0040",
  },
  {
    name: "Sportage",
    iconClass: "cate3",
    href: "/s/search?make=C0810&subModel=C1060",
  },
  {
    name: "Sorrento",
    iconClass: "cate4",
    href: "/s/search?make=C0810&subModel=C1080",
  },
  {
    name: "Avante",
    iconClass: "cate5",
    href: "/s/search?make=C0680&subModel=C0030",
  },
  {
    name: "Morning",
    iconClass: "cate6",
    href: "/s/search?make=C0810&subModel=C1000",
  },
  {
    name: "Starex",
    iconClass: "cate7",
    href: "/s/search?make=C0680&subModel=C0050",
  },
  {
    name: "Carnival",
    iconClass: "cate8",
    href: "/s/search?make=C0810&subModel=C1150",
  },
  {
    name: "Accent",
    iconClass: "cate9",
    href: "/s/search?make=C0680&subModel=C0270",
  },
  {
    name: "K3",
    iconClass: "cate10",
    href: "/s/search?make=C0810&subModel=C0880",
  },
];

export default function CategoryMenu() {
  return (
    <div className="mainCategory">
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <a className="categoryBtn" href={category.name}>
              <span className={`icCate ${category.iconClass}`}></span>
              <span>{category.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
