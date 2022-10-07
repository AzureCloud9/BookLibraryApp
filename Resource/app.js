let myLibrary = [];

function Book(book, author, pages ) {
    this.book = book;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    books = new Book(document.getElementById('book').value,document.getElementById('author').value, document.getElementById('pages').value )
    myLibrary.push(books);
}       



bookinfo = document.getElementById('book').value
authorinfo = document.getElementById('author').value
pages = document.getElementById('pages').value
submit = document.getElementById('submit');
rightSide = document.getElementById('rightSide')



submit.addEventListener('click', e => {
    if(document.getElementById('book').value === '' || document.getElementById('author').value === ''
        || document.getElementById('pages').value === '' ){
            alert('add more information')
        } else {
            addBookToLibrary()
            addcard()
            document.getElementById('book').value = ''
            document.getElementById('author').value = ''
            document.getElementById('pages').value = ''
        }
})

function addcard() {


    // making a new div class for cards
    const newcard = document.createElement('div')

    // giving the new class attributs from my css style
    newcard.setAttribute('class', 'div')

    // adding the newly created div to parent element
    document.getElementById('rightSide').appendChild(newcard)

    //  form infomation into the cards h1's
    newcard.setAttribute('id', 'cardDetails');
    const bookTitle = document.createElement('h1')
    bookTitle.setAttribute('class', 'h1Style')
    const authorTitle = document.createElement('h1')
    authorTitle.setAttribute('class', 'h1Style')
    const pagesTitle = document.createElement('h1')
    pagesTitle.setAttribute('class', 'h1Style')

    // info from myLibrary array to created h1's
    for(i = 0; i < myLibrary.length; i++){
        bookTitle.innerHTML = `Book: ${myLibrary[i].book}`
        authorTitle.innerHTML = `Author: ${myLibrary[i].author} `
        pagesTitle.innerHTML = `${myLibrary[i].pages} pages`
    }
    


    // adding the h1's to the created div "cardDetails" with the value from my library
    newcard.appendChild(bookTitle)
    newcard.appendChild(authorTitle)
    newcard.appendChild(pagesTitle)

    // CREATING DELETE BUTTON
    const verwijderen = document.createElement('button')
    verwijderen.setAttribute('class', 'deleted')
    verwijderen.setAttribute('id', 'deleted')

    verwijderen.innerHTML = 'Delete Card'

    newcard.appendChild(verwijderen)

    /// CARD DELETE BUTTON
    verwijderen.addEventListener('click', e => {
        newcard.style.display = 'none'
    })
}





