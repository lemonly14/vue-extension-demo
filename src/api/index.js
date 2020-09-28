import request from "@/utils/request";

export function getMovie() {
  return request({
    url: `/movie/subject/34670642`,
    method: "get"
  });
}
