import { EmployeeHtml } from './Employee.js'
import { useEmployee } from './EmployeeDataProvider.js'

const contentTarget = document.querySelector('.employeesContent')
export const EmployeeList = () => {
  const EmployeeItems = useEmployee()

  for (const employeeItem of EmployeeItems) {
    contentTarget.innerHTML += EmployeeHtml(employeeItem)
  }
}
