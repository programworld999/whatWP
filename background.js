window.whatWP = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var url = "https://whatwpapi.herokuapp.com/api/?site=";
  var site = request.site;
  var api = url + site;
  // encodeURIComponent(request.site);
  console.log(api);
  fetch(api)
    .then((r) => r.text())
    .then((result) => {
      console.log("data: ", result);
      // Result now contains the response text, do what you want...
    });
  sendResponse({ res: window.site });
  return true; // Will respond asynchronously.
});
