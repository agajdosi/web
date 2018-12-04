window.onload = getPosts()

function getPosts() {
    var i;
    for (i = 1; i < 100; i++) {        
        var post = 'src/gallery/' + String(i) + '/post.html';
        var req = new XMLHttpRequest();

        req.open('GET', post, true);
        req.onreadystatechange = function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return;
            console.log("YES!", this.response);
            
            var div = document.createElement('div');
            div.innerHTML = this.responseText;
            document.getElementById('right').appendChild(div);
        
        };

        req.send();
    }
}