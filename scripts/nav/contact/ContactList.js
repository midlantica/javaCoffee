import { Contact } from './Contact.js'
import { useContactInfo } from './contactDataProvider.js'

export const ContactList = () => {
  const contacts = useContactInfo()

  let allContactsHTML = ""

  for (const contact of contacts) {
    allContactsHTML += Contact(contact)
  }

  return allContactsHTML
}
