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
    if(book.name.lenght<3 || book,author.lenght<3){
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.show = function(){
     
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
        display.show('Success');
    }
    else{
        //show error to the user
        display.show('Error');
    }
    console.log(book);
    e.preventDefault();
}