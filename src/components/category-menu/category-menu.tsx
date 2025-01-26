import * as styles from "./category-menu.module.css";

type CategoryItem = {
  name: string;
  menu: number;
  iconClass: string;
  href: string;
};

const categories: CategoryItem[] = [
  {
    name: "Used Cars",
    menu: 1,
    iconClass: "cate1",
    href: "/s/search?condition=C020",
  },
  {
    name: "New Cars",
    menu: 1,
    iconClass: "cate11",
    href: "/s/search?condition=C010",
  },
  {
    name: "SUVs",
    menu: 1,
    iconClass: "cate2",
    href: "/s/search?vehicleType=C020",
  },
  {
    name: "Trucks",
    menu: 1,
    iconClass: "cate3",
    href: "/s/search?type=trucks",
  },
  {
    name: "Parts",
    menu: 1,
    iconClass: "cate4",
    href: "/Parts/parts-search",
  },
  {
    name: "Auction",
    menu: 1,
    iconClass: "cate5",
    href: "https://m.auctionwini.com/main",
  },
  {
    name: "RHD",
    menu: 1,
    iconClass: "cate7",
    href: "/s/search?steering=C020",
  },
  {
    name: "Buses",
    menu: 1,
    iconClass: "cate8",
    href: "/s/search?type=buses",
  },
  {
    name: "Equipment",
    menu: 1,
    iconClass: "cate9",
    href: "/s/search?type=equipments",
  },
  {
    name: "AI",
    menu: 1,
    iconClass: "cate10",
    href: "/s/search",
  },
  {
    name: "Tucson",
    menu: 2,
    iconClass: "cate1",
    href: "/s/search?make=C0680&subModel=C0330",
  },
  {
    name: "SantaFe",
    menu: 2,
    iconClass: "cate2",
    href: "/s/search?make=C0680&subModel=C0040",
  },
  {
    name: "Sportage",
    menu: 2,
    iconClass: "cate3",
    href: "/s/search?make=C0810&subModel=C1060",
  },
  {
    name: "Sorrento",
    menu: 2,
    iconClass: "cate4",
    href: "/s/search?make=C0810&subModel=C1080",
  },
  {
    name: "Avante",
    menu: 2,
    iconClass: "cate5",
    href: "/s/search?make=C0680&subModel=C0030",
  },
  {
    name: "Morning",
    menu: 2,
    iconClass: "cate6",
    href: "/s/search?make=C0810&subModel=C1000",
  },
  {
    name: "Starex",
    menu: 2,
    iconClass: "cate7",
    href: "/s/search?make=C0680&subModel=C0050",
  },
  {
    name: "Carnival",
    menu: 2,
    iconClass: "cate8",
    href: "/s/search?make=C0810&subModel=C1150",
  },
  {
    name: "Accent",
    menu: 2,
    iconClass: "cate9",
    href: "/s/search?make=C0680&subModel=C0270",
  },
  {
    name: "K3",
    menu: 2,
    iconClass: "cate10",
    href: "/s/search?make=C0810&subModel=C0880",
  },
];

export default function CategoryMenu() {
  return (
    <div className={styles.mainCategory}>
      <ul>
        {categories.map((category) => (
          <li key={category.name} className={styles.category}>
            <a className={styles.categoryButton} href={category.href}>
              {category.menu === 1 ? (
                <span className={styles[`icCate-${category.iconClass}`]}></span>
              ) : (
                <span
                  className={styles[`icCate2-${category.iconClass}`]}
                ></span>
              )}
              <span>{category.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
