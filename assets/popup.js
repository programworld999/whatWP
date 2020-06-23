// const theme = "null";
// $(document).ready(function () {
//   const bg = chrome.extension.getBackgroundPage();
//   let theme = bg.whatWP.theme;
//   $("#wwp-theme").html(theme);
//   // $("#wwp-theme").append(bg.whatWP.isWP);
//   console.log(bg.whatWP.isWP);
//   if (bg.whatWP.isWP == 2) {
//     console.log("fuck");
//   } else {
//     console.log("duck");
//   }
// });

$(document).ready(function () {
  const bg = chrome.extension.getBackgroundPage();
  let isWPSite = bg.whatWP.isWPSite;
  let theme = bg.whatWP.theme;
  let plugins = bg.whatWP.plugins;
  $("#wwp-theme").html(theme);
  console.log(isWPSite, theme);
  if (isWPSite) {
    $("#isWPSite-btn").html(
      "This Site Is Powered by WordPress <i class='fa fa-wordpress'></i>."
    );
    $("#isWPSite-btn").removeClass("positive").addClass("positive");
    $(".wwp-theme-container").show();
    $(".wwp-plugins-container").show();
    $("#wwp-theme").html(theme);
  } else {
    $("#isWPSite-btn").html("This Site Is Not Powered by WordPress!");
    $("#isWPSite-btn").removeClass("positive");
    $(".wwp-theme-container").hide();
    $(".wwp-plugins-container").hide();
  }
});

// function getWhatWPData() {
//   $("#testapi").html("res");
//   const bg = chrome.extension.getBackgroundPage();
//   let api = "https://whatwpapi.herokuapp.com/api/?site=";
//   let site = bg.site;
//   let apiRequestRoute = api + site;
//   $("#testapi").html(apiRequestRoute);
//   const data = [];
//   if (site != "") {
//     console.log(apiRequestRoute);
//     $.ajax({
//       url: apiRequestRoute,
//       type: "GET",
//       success: function (res) {
//         console.log(res);
//         let isWPSite = false;
//         let theme = "";
//         let plugins = "";
//         if (res == "") {
//           // console.log("fuck u");
//         } else {
//           isWPSite = res[0]["isWPSite"];
//           theme = res[1]["theme"];
//           plugins = res[2]["plugins"];
//           console.log(isWPSite, theme, plugins);
//         }
//         if (isWPSite) {
//           $("#isWPSite-btn").html(
//             "This Site Is Powered by WordPress <i class='fa fa-wordpress'></i>."
//           );
//           $("#isWPSite-btn").removeClass("positive").addClass("positive");
//           $(".wwp-theme-container").show();
//           $(".wwp-plugins-container").show();
//           $("#wwp-theme").html(theme);
//         } else {
//           $("#isWPSite-btn").html("This Site Is Not Powered by WordPress!");
//           $("#isWPSite-btn").removeClass("positive");
//           $(".wwp-theme-container").hide();
//           $(".wwp-plugins-container").hide();
//         }
//         $("#testapi").html("theme: " + theme);
//       },
//       error: function (jqXHR, exception) {
//         $("#testapi").html("error");
//         console.log(jqXHR, exception);
//       },
//     });
//   }
// }
