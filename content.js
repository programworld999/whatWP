// alert("content.js");
// chrome.runtime.sendMessage({
//   url: window.location.href,
//   theme: "Hello",
//   isWP: Math.floor(Math.random() * 2 + 1),
// });
console.log("content.js");
chrome.runtime.sendMessage(
  {
    url: window.location.href,
    theme: "Hello",
    isWP: Math.floor(Math.random() * 2 + 1),
  },
  function (response) {
    if (response) {
      console.log(response);
    } else {
      console.log("No Response Received");
    }
  }
);
