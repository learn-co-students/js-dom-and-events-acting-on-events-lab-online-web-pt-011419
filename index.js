function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
    return document.querySelector('input').value
}

function addNewElementAsLi() {
  let element = document.createElement('li');
  element.innerHTML = retrieveEmployeeInformation()
  return document.querySelector('.employee-list').appendChild(element);
}

function addNewLiOnClick() {
  let element = document.querySelector('input')
  element.addEventListener("click", addNewElementAsLi());
  element.value = ''

}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}
