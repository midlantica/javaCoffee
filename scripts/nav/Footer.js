import { BusinessName } from './BusinessName.js'
import { ContactList } from './contact/ContactList.js'
import { LogoPath } from './LogoPath.js'
import { YearEstablished } from './YearEstablished.js'

const contentTarget = document.querySelector('footer')
export const Footer = () => {
  contentTarget.innerHTML = `
    <section>
      <div>
        <img class="logo" src="${LogoPath()}" alt="${BusinessName()}">
      </div>  
      <h4>${BusinessName()}</h4>
      <p>${YearEstablished()}</p>
    </section>
    <section>
      ${ContactList()}
    </section>
  `
}
