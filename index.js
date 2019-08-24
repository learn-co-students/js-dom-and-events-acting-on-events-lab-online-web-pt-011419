function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  const employee = retrieveEmployeeInformation();
  return document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employee}</li>`);
}

function addNewLiOnClick() {
  document.querySelector('input[type=submit]').addEventListener("click", addNewElementAsLi());
  return document.querySelector('input').value = ''; 
}

function clearEmployeeListOnLinkClick() {
  return document.querySelector('main a').addEventListener("click", function() {
    let ul = document.querySelector('.employee-list');
    while(ul.firstChild) ul.removeChild(ul.firstChild);
  });
}