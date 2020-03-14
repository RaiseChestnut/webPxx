import {request} from "./index";

//获取首页轮播图
export function getHomeSwiper() {
  return request({
    url: '/data/home/hotSwiper'
  })
}