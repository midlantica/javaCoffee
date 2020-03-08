import { BusinessName } from "./BusinessName.js"
import { Byline } from "./Byline.js"
import { LogoPath } from "./LogoPath.js"

const contentTarget = document.querySelector("header")
export const Header = () => {
  contentTarget.innerHTML = `
    <div class="logoBox">
      <img class="logo" src="${LogoPath()}" alt="${BusinessName()}">
    </div>
    <div class="brandBox">
      <h1>${BusinessName()}</h1>
      <h4>${Byline()}</h4>
    </div>
  `
}
