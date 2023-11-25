function fetchAPI(url, callback) {
  setTimeout(function () {
    var data = "Data from" + url;
    callback(data);
  }, 1000);

  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data));
}

function processData(data) {
  console.log("Processing data:" + data);
}

fetchAPI("http://example.com/api/data", processData);
