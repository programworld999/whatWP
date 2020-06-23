chrome.runtime.sendMessage(
  {
    site: window.location.href,
  },
  function (response) {
    if (response) {
      console.log(response);
    } else {
      console.log("No Response Received");
    }
  }
);
