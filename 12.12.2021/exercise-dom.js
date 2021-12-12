let firstChild = document.querySelector( "ul#list>li:first-child")
console.log(firstChild)
firstChild.innerHTML =  "U"
let ulDOM = document.querySelector( "ul#list")
let liDOM = document.createElement('li')
liDOM.innerHTML =  "new item"
ulDOM.append(liDOM)
console.log(ulDOM.lastChild)
ulDOM.prepend(liDOM)

let test = document.querySelector("#list")
test.classList.add( "text")
test.classList.add( "new-info", "second-class") //  birden fazla class ekleme
test.classList.remove( "new-info") // class silme
console.log(test.classList)

