console.log('working')
// Constructor
function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}
//Display Constructor
function Display() {

}

//Adding methods to display prototypes
Display.prototype.add = function(book){
    console.log('adding to the UI');
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>@${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
}
Display.prototype.validate = function(book){
    if(book.name.lenght<2 || book.author.lenght<3){
        return false;
    }
    else{
        return true ;
    }
}
Display.prototype.show = function(type, displayMessage){
     let message = document.getElementById('message');
     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message!</strong>
                            ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

    setTimeout(() => {
        message.innerHTML = ``;
    }, 2000);
}


//Adding submit event listener to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e){
    console.log('submittion working'); 
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    let type;
    if(fiction.checked){
        type = fiction.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    let book = new Book(name, author, type)

    let display = new Display()
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has been added ');
    }
    else{
        //show error to the user
        console.log('validate working')
        display.show('danger', 'Sorry You cannot add this book');
    }
    console.log(book);
    e.preventDefault();
}