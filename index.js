let myLinks = [];

let saveBtn = document.getElementById('save-btn');
let inputField = document.getElementById('input-field');
let uiLink = document.getElementById('ol');
let DeleteBtn = document.getElementById('delete-btn');
let tabBtn = document.getElementById('tab-btn');




let linksInLocalstorge = JSON.parse(localStorage.getItem("links"));


if (linksInLocalstorge) {
    myLinks = linksInLocalstorge
    linkRender();
}


// delete button
DeleteBtn.addEventListener('dblclick', function () {
    localStorage.clear();
    myLinks = [];
    linkRender();
})

// tab save button
const tabs = [
    { url: "hello" }
]
tabBtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLinks.push(tabs[0].url);
        localStorage.setItem("links", JSON.stringify(myLinks));
        linkRender(myLinks);

    })


})




saveBtn.addEventListener('click', function () {



    myLinks.push(inputField.value);
    inputField.value = "";
    localStorage.setItem("links", JSON.stringify(myLinks));
    let array = JSON.parse(localStorage.links);

    linkRender();

})



function linkRender() {

    let links = "";
    for (let i = 0; i < myLinks.length; i++) {
        links += `<li><a herf="#">${myLinks[i]}</a></li>`
    }



    uiLink.innerHTML = links;

}