$(document).ready(function () {
  const bg = chrome.extension.getBackgroundPage();
  var isWPSite = bg.whatWP.isWPSite;
  let theme = bg.whatWP.theme;
  let plugins = bg.whatWP.plugins;
  // $("#wwp-theme").html(theme);
  // $("#wwp-theme").append(bg.whatWP.isWP);
  console.log(bg.whatWP.isWPSite);
  console.log(plugins);
  if (isWPSite) {
    $("#isWPSite-btn").html(
      "This Page Is Powered by WordPress <i class='fa fa-wordpress'></i>."
    );
    $("#isWPSite-btn").removeClass("positive").addClass("positive");
    $(".wwp-theme-container").show();
    $(".wwp-plugins-container").show();
    $("#wwp-theme").html(theme);
    console.log(plugins.length);
    $("#wwp-plugins-number").html(plugins.length);
    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i];
      // console.log(plugin);
      $("#wwp-plugins").append(
        '<a class="item" target="_blank" href="https://google.com">' +
          plugin +
          "</a>"
      );
    }
    // $("#wwp-plugins").append(
    //   '<a class="item" target="_blank" href="https://google.com">Fooo</a>'
    // );
  } else {
    $("#isWPSite-btn").html("This Page Is Not Powered by WordPress!");
    $("#isWPSite-btn").removeClass("positive");
    $(".wwp-theme-container").hide();
    $(".wwp-plugins-container").hide();
  }
});
