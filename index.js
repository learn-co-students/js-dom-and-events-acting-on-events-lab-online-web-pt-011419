function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()

    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
  let list = document.querySelector('.employee-list')
  let employee = retrieveEmployeeInformation()
  let li = document.createElement('li')
  li.innerHTML = employee

  return list.appendChild(li)
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event) {
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  let button = document.querySelector('a')
  button.addEventListener('click', function(event) {
    return document.querySelector('ul').innerHTML = ""
  })
}