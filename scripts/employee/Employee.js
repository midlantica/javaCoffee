export const EmployeeHtml = employeeObject => {
  return `
    <div class="panel">
      <h6>${employeeObject.firstName} ${employeeObject.lastName}</h6>
      <p>Title: ${employeeObject.jobTitle}</p>
      <p>Hours: ${employeeObject.hoursScheduled}</p>
    </div>
  `
}
