import { Contact } from './Contact.js'
import { useContactInfo } from './contactDataProvider.js'

export const ContactList = () => {
  const contacts = useContactInfo()

  let allContactsHTML = ""

  for (const contactItem of contacts) {
    allContactsHTML += Contact(contactItem)
  }

  return allContactsHTML
}
