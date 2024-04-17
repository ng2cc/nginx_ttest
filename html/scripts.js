function send() {
    let url = "http://192.168.111.21:3000/";
    let name = document.querySelector("input[name='name']").value;
    sendGet(url, name);
}

function sendGet(url, name) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        if (http.readyState === XMLHttpRequest.DONE) {
            if (http.status === 200) {
                var result = http.response;
                alert(result);
            } else {
                alert('뭔가 문제가 있어요.');
            }
        }
    }
    http.open("GET", url + "?name=" + name);
    http.setRequestHeader("Content-type", "multipart/form-data");
    http.send();
}

addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        send();
    }
});
