function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  let list = document.createElement('li')
  list.innerHTML = retrieveEmployeeInformation()
  return document.querySelector('.employee-list').appendChild(list)
}

function addNewLiOnClick(){
  let click = document.querySelector('input')
  click.addEventListener("click", addNewElementAsLi())
  click.value = ''
}

function clearEmployeeListOnLinkClick(){
  let a = document.querySelector('a')
  let ul = document.querySelector('ul')
  a.addEventListener('click', function(){
    ul.innerHTML = ''
  })
}
