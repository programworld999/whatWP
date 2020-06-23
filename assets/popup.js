const theme = "null";
$(document).ready(function () {
  const bg = chrome.extension.getBackgroundPage();
  let theme = bg.whatWP.theme;
  $("#wwp-theme").html(theme);
  // $("#wwp-theme").append(bg.whatWP.isWP);
  console.log(bg.whatWP.isWP);
  if (bg.whatWP.isWP == 2) {
    console.log("fuck");
  } else {
    console.log("duck");
  }
});
