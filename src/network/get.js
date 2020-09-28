import { request } from './request'

export function getHotNews() {
  return request({
    url: 'hot_news'
  })
}
