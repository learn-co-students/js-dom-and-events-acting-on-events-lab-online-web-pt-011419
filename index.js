function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

// retrieveEmployeeInformation(): This retrieves the employee information from the input. It returns a string equal to the value in the input.
function retrieveEmployeeInformation() {
  let input = document.querySelector('input'); 
  return input.value
}

// addNewElementAsLi(): This function takes the value retrieved from the previous retrieveEmployeeInformation function and adds that string to a new list element which is appended to the ul with class "employee-list".
function addNewElementAsLi() {
  let employeeInfo = retrieveEmployeeInformation()
  let node = document.createElement('li')
  let textNode = document.createTextNode(employeeInfo)
  node.appendChild(textNode)
  document.querySelector('.employee-list').appendChild(node)
}
// addNewLiOnClick(): This adds the employee name as an li element on click and clears the input value.
function addNewLiOnClick() {
  document.addEventListener('click', addNewElementAsLi());
  document.querySelector('input').value = ''
}

// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button clicked.
function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(){
    document.querySelector('.employee-list').innerHTML = ''
  })
}