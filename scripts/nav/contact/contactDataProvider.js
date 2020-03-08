const contactInfo = [
  {
    id: 1,
    infoType: "email",
    info: "javaprovider@java.com"
  },
  {
    id: 2,
    infoType: "phone number",
    info: "6145874456"
  },
  {
    id: 3,
    infoType: "instagram handle",
    info: "@javasip"
  }
]

export const useContactInfo = () => {
  return contactInfo.slice()
}
