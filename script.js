function nextPage() {
    location.href = './list.html';
}

function prevPage() {
    location.href = './index.html';
}

window.onload = function(){
    var listItems = document.getElementsByTagName("li"); // or document.querySelectorAll("li");
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].onclick = function () {
            this.parentNode.removeChild(this);
        }
    }
}