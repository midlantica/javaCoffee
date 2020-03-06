/*
    Store data about the product, providing it for other modules
*/

const products = [
    {
        id: 1,
        name: "The best",
        beanType: "Ethiopian",
        roastType: "dark",
        price: "4.99"
    },
    {
        id: 2,
        name: "The Second Best",
        beanType: "Cuban",
        roastType: "dark",
        price: "3.99"
    },
    {
        id: 3,
        name: "The Third Best",
        beanType: "Cat Poop Beans",
        roastType: "light",
        price: "9.99"
    }
]

export const useProducts = () => {
    return products.slice()
}