function send(type) {
  const SERVER_IP = `${WAS_IP}:3000/${type}/`;
  let texts = document.querySelectorAll("div#input input[type='text']");
  let numbers = document.querySelectorAll("div#input input[type='number']");
  let selects = document.querySelectorAll("div#input select");
  let params = {};
  [texts, numbers, selects].map(input => input.forEach(key => {
    if (TYPE_INFO[type].params.indexOf(key.name) != -1)
      params[key.name] = key.value;
  }));
  httpRequest(
    SERVER_IP,
    TYPE_INFO[type].method,
    type,
    params
  );
}

function httpRequest(url, method, type, params) {
  var http = new XMLHttpRequest();
  var param = JSON.stringify({ params });
  console.log(param);
  http.open("GET", url + "?param=" + param, true);
  http.setRequestHeader("Content-type", "application/json; charset=utf-8");

  http.onreadystatechange = function () {
    if (http.status == 200) {
      if (http.readyState == 4) {
        const res = http.responseText === undefined ? '' : JSON.parse(http.responseText);
        if (type === 'insert')
          if (res.affectedRows > 0)
            alert('신청이 완료되었습니다.\n신청 번호: ' + res.insertId);
          else
            alert('신청이 정상적으로 완료되지 않았습니다.');
      }
    }
  }
  http.send();
}
