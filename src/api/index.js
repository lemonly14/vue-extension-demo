import request from "@/utils/request";

//百度识别需要的access_token
const access_token = '24.14b8606577e23dafac747a383fcddb18.2592000.1605947310.282335-22855611'

export function getInfo(data) {
  return request({
    url: `/advanced_general?access_token=${access_token}`,
    method: "post",
    data,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
  });
}
