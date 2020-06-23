window.whatWP = { dasdas: "dasd" };
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request.theme);
//   window.whatWP["theme"] = request.theme;
//   console.log(request.theme);
// });
// console.log(window.whatWP);
console.log("Atleast reached background.js");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //   console.log("Reached Background.js");
  window.whatWP["theme"] = request.theme;
  window.whatWP["isWP"] = request.isWP;
  if (request.isWP == 1) {
    chrome.browserAction.setIcon({
      path: "assets/icons/wpsite/icon-144x144.png",
      tabId: sender.tab.id,
    });
  } else {
  }
  sendResponse({ res: window.whatWP });
});
