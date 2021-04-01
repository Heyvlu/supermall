import {request1} from './request'

export function getCategory(){
  return request1({
    url:"/recommend"
  })
}

