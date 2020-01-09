function sendData(type) {
  const XHR = new XMLHttpRequest(),
    FD = new FormData();

  // Define what happens on successful data submission
  XHR.addEventListener('load', function (event) {
    alert('Yeah! Data sent and response loaded.');
  });
  // Define what happens in case of error
  XHR.addEventListener('error', function (event) {
    alert('Oops! Something went wrong.');
  });
  
  // Set up our request
  XHR.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/' + type);
  // Send our FormData object; HTTP headers are set automatically
  XHR.send(FD);
}

