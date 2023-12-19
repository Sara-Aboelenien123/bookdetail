
var siteNameInput = document.getElementById('sitename');
var siteUrlInput = document.getElementById('SiteURL');
var bookmarks = [];

function userInfo() {
    var siteName = siteNameInput.value;
    var siteUrl = siteUrlInput.value;

    if (validateUrl(siteUrl)) {
        var endUserInformation = {
            name: siteName,
            URL: siteUrl
        };

        bookmarks.push(endUserInformation);
        console.log(bookmarks);
        displayInfo();
        clearForm();
    } else {
        alert('Invalid URL. Please enter a valid URL.');
    }
}

function clearForm() {
    siteNameInput.value = "";
    siteUrlInput.value = "";
}

function displayInfo() {
    var tableContent = "";

    for (var i = 0; i < bookmarks.length; i++) {
        tableContent += `
            <tr>
                <td>${i}</td>
                <td>${bookmarks[i].name}</td>
                <td><button onclick="visitURL('${bookmarks[i].URL}')" class="btn btn-warning text-white"><i class="fa-regular fa-share-from-square pe-2"></i>Visit</button></td>
                <td><button onclick="deleteInfo(${i})" class="btn btn-danger"><i class="fa-regular fa-trash-can pe-2"></i>Delete</button></td>
            </tr>
        `;
    }
    document.getElementById('tablecontent').innerHTML = tableContent;
}

function deleteInfo(bookmarkIndex) {
    bookmarks.splice(bookmarkIndex, 1);
    displayInfo();
}

function visitURL(url) {
    window.open(url, '_blank');
}

function validateUrl(url) {
    
    var urlPattern = /^(http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
}