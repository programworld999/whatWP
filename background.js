window.whatWP = {};
window.whatWP["isWPSite"] = false;
window.whatWP["theme"] = "Unknown";
window.whatWP["plugins"] = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var url = "https://whatwpapi.herokuapp.com/api/?site=";
  var site = request.site;
  var api = url + site;
  // encodeURIComponent(request.site);
  console.log(api);
  fetch(api)
    .then((r) => r.text())
    .then((result) => {
      var data = JSON.parse(result);
      console.log(data[0].isWPSite);
      console.log(data[1].theme);
      console.log(data[2].plugins);
      window.whatWP["isWPSite"] = data[0].isWPSite;
      window.whatWP["theme"] = data[1].theme;
      window.whatWP["plugins"] = data[2].plugins;
      if (window.whatWP["isWPSite"]) {
        chrome.browserAction.setIcon({
          path: "assets/icons/wpsite/icon-144x144.png",
          tabId: sender.tab.id,
        });
      } else {
      }
    });
  sendResponse({ res: window.site });
  return true; // Will respond asynchronously.
});
