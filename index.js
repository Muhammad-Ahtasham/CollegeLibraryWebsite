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
Display.prototype.add = function(){}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
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
    display.add(book);
    display.clear()
    console.log(book);
    e.preventDefault();
}