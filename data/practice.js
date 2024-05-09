import practice from "./practice.json" assert { type: "json" };

console.log(practice.menu);

for (let i = 0; i < practice.menu.popup.menuitem.length; i++) {
  console.log(practice.menu.popup.menuitem[i]);
}
