import { BusinessName } from './BusinessName.js'
import { ContactList } from './contact/ContactList.js'
import { YearEstablished } from './YearEstablished.js'

const contentTarget = document.querySelector('footer')
export const Footer = () => {
  contentTarget.innerHTML = `
    <section>
      ${BusinessName()}
      ${YearEstablished()}
    </section>
    <section>
      ${ContactList()}
    </section>
  `
}
