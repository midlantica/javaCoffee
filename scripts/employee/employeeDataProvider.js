/*
    Storing employee data, providing it for other modules
*/

const employees = [
    {
        id: 1,
        firstName: "Madi",
        lastName: "Peper",
        jobTitle: "I own this bish",
        hoursScheduled: 2
    },
    {
        id: 2,
        firstName: "Mo",
        lastName: "Silvera",
        jobTitle: "Co-own this bish",
        hoursScheduled: 2
    },
    {
        id: 3,
        firstName: "Steve",
        lastName: "Brownlee",
        jobTitle: "Dishwasher",
        hoursScheduled: 200
    },
    {
        id: 4,
        firstName: "Kitty",
        lastName: "Purry",
        jobTitle: "Greeter",
        hoursScheduled: 0
    },
    {
        id: 5,
        firstName: "White",
        lastName: "Board",
        jobTitle: "Barista",
        hoursScheduled: 10
    },
    {
        id: 6,
        firstName: "Adam",
        lastName: "Shhhhhhhheaffer",
        jobTitle: "Hipster Sweater Representative",
        hoursScheduled: 201
    }
]

// Function that returns a copy of the array of employees
export const useEmployee = () => {
    return employees.slice()
}