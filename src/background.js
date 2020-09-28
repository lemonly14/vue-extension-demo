chrome.contextMenus.create({
  title: "使用百度搜索：%s", // %s表示选中的文字
  contexts: ["selection"], // 只有当选中文字时才会出现此右键菜单
  onclick: function(params) {
    // 注意不能使用 location.href ，因为 location 是属于 background 的 window对象
    chrome.tabs.create({
      url:
        "https://www.baidu.com/s?ie=utf-8&wd=" + encodeURI(params.selectionText)
    });
  }
});

export function testBackground() {
  // console.log("Popup 调用成功");
}

export function getDataSuccess() {
  chrome.notifications.create(null, {
    type: "basic",
    iconUrl: "icons/128.png",
    title: "图片上传扩展",
    message: "豆瓣数据获取成功"
  });
}

/**
 * 关于消息通信
 * https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
 * @param {*} request
 * @param {*} sender
 * @param {*} sendResponse
 */
function handleMessage(request, sender, sendResponse) {
  if (request.type === "upload") {
    // sendResponse({
    //   response: "response from background script"
    // });

    chrome.notifications.create(null, {
      type: "basic",
      iconUrl: "icons/128.png",
      title: "图片上传扩展",
      message: request.content
    });

    return Promise.resolve({ response: "response from background script" });
  }
}

browser.runtime.onMessage.addListener(handleMessage);
