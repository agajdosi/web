window.onload = getPosts()

function showMore() {    
    this.parentElement.getElementsByClassName("more")[0].style.display = "block"
    this.textContent = "↓"
    this.onclick = showLess
};

function showLess() {
    this.textContent = "→"
    this.onclick = showMore
    this.parentElement.getElementsByClassName("more")[0].style.display = "none"
}

function getPosts() {
    var i;
    var max = 100;
    for (i = 1; i < max; i++) {        
        var post = 'src/gallery/' + String(i) + '/post.html';
        var req = new XMLHttpRequest();

        req.open('GET', post, true);
        req.postNumber = i
        req.onreadystatechange = function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;

            //LOAD POST
            var post = document.createElement('div');
            post.className = "post"
            post.style.order = this.postNumber;
            post.innerHTML = this.responseText;

            //ADD MORE BUTTON
            var moreButton = document.createElement('p')
            moreButton.textContent = "→"
            moreButton.onclick = showMore
            moreButton.className = "moreButton"
            post.insertBefore(moreButton, post.lastElementChild)

            //ADD FINAL POST TO DOCUMENT
            document.getElementById('right').appendChild(post);
        };

        req.send();
    }
}

