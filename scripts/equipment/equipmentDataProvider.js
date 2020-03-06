/*
    Store equipment data, providing it for other modules
*/

const equipment = [
    {
        id: 1,
        serialNumber: 123456,
        model: "The Coffee Maker 3000",
        isFunctional: true,
        isUnderWarranty: false
    },
    {
        id: 2,
        serialNumber: 654321,
        model: "Dishwasher",
        isFunctional: false,
        isUnderWarranty: false
    },
    {
        id: 3,
        serialNumber: 987653,
        model: "Coffee Grinder 9000",
        isFunctional: true,
        isUnderWarranty: true
    },
    {
        id: 4,
        serialNumber: 940365,
        model: "Espresso 8001",
        isFunctional: true,
        isUnderWarranty: true
    },
    {
        id: 5,
        serialNumber: 930254,
        model: "Milk Frother-matic",
        isFunctional: true,
        isUnderWarranty: false
    }
]

// Returns a copy of the array of equipment data
export const useEquipment = () => {
    return equipment.slice()
}