const contactInfo = [
    {
        id: 1,
        info: "javaprovider@java.com",
        infoType: "email"
    },
    {
        id: 2,
        info: "6145874456",
        infoType: "phone number"
    },
    {
        id: 3,
        info: "@javasip",
        infoType: "instagram handle"
    }
]

export const useContactInfo = () => {
    return contactInfo.slice()
}