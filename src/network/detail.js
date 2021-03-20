import {request1} from './request'

export function getDetail(iid){
  return request1({
    url:'/detail',
    params:{
      iid
    }
  })
}