import { style, styleVariants } from "@vanilla-extract/css";

export const mainCategory = style({
  display: "flex",
  flexWrap: "nowrap",
  padding: "2rem",
  gap: "2.315rem",
  overflow: "auto",
  scrollbarWidth: "none",
});

export const category = style({
  flex: "0 0 auto",
  width: "auto",
  whiteSpace: "nowrap",
});

export const categoryButton = style({
  textDecoration: "none",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "5rem",
});

const baseIcon = style({
  display: "block",
  margin: "0 auto",
  width: "4rem",
  height: "4.125rem",
  background:
    "url(https://image.autowini.com/resources/IMG/markup/main_sprite.webp) no-repeat",
});

export const icCate = styleVariants({
  cate1: [baseIcon, { backgroundPosition: "-6px -90px" }],
  cate2: [baseIcon, { backgroundPosition: "-88px -90px" }],
  cate3: [baseIcon, { backgroundPosition: "-168px -90px" }],
  cate4: [baseIcon, { backgroundPosition: "-406px -90px" }],
  cate5: [baseIcon, { backgroundPosition: "-568px -90px" }],
  cate6: [baseIcon, { backgroundPosition: "-490px -90px" }],
  cate7: [baseIcon, { backgroundPosition: "-648px -90px" }],
  cate8: [baseIcon, { backgroundPosition: "-246px -90px" }],
  cate9: [baseIcon, { backgroundPosition: "-328px -90px" }],
  cate10: [baseIcon, { backgroundPosition: "-728px -90px" }],
  cate11: [baseIcon, { backgroundPosition: "-808px -90px" }],
});

const baseIcon2 = style({
  display: "block",
  margin: "0 -10px",
  width: "8rem",
  height: "4.125rem",
  background: "url(...) no-repeat",
  transform: "scale(0.7)",
});

export const icCate2 = styleVariants({
  cate1: [baseIcon2, { backgroundPosition: "-1367px -25px" }],
  cate2: [baseIcon2, { backgroundPosition: "-1367px -146px" }],
  cate3: [baseIcon2, { backgroundPosition: "-1367px -266px" }],
  cate4: [baseIcon2, { backgroundPosition: "-1367px -390px" }],
  cate5: [baseIcon2, { backgroundPosition: "-1367px -515px" }],
  cate6: [baseIcon2, { backgroundPosition: "-1367px -634px" }],
  cate7: [baseIcon2, { backgroundPosition: "-1367px -756px" }],
  cate8: [baseIcon2, { backgroundPosition: "-1367px -878px" }],
  cate9: [baseIcon2, { backgroundPosition: "-1367px -998px" }],
  cate10: [baseIcon2, { backgroundPosition: "-1367px -1124px" }],
});
