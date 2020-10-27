

window.getDataSuccess = function () {
  console.log('我在background中调用了一个通知API');
  chrome.notifications.create(null, {
    type: "basic",
    iconUrl: "icons/128.png",
    title: "图片上传扩展",
    message: "调用百度识别API成功"
  });
}
