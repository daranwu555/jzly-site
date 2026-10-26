/* 網站共用設定：改這一個檔案，全站的聯絡信箱和更新日期就會一起更新 */
window.SITE = {
  email: "jzly0311@gmail.com",  /* 客服 Email：改這裡，全站一起更新 */
  updated: "2026-10-26"
};
document.addEventListener("DOMContentLoaded", function () {
  var e = window.SITE.email;
  [].forEach.call(document.querySelectorAll(".js-email"), function (el) {
    if (e) { el.innerHTML = '<a href="mailto:' + e + '">' + e + '</a>'; } else { el.textContent = "（客服信箱即將公布）"; }
  });
  [].forEach.call(document.querySelectorAll(".js-updated"), function (el) { el.textContent = window.SITE.updated; });
});
