import { ajax } from '@/utils/request'

/**
 * 获取一言
 * @returns 
 */
export const getYiYan = () => {
  return ajax({
    type: 'get',
    url: 'https://v1.hitokoto.cn/?encode=json&c=d&c=j&c=k&c=k&c=i&lang=cn',
    withCredentials: false,
  }).then(res => {
    if (res.status === 200) {
      const { hitokoto: text, from_who, from, id } = res.data || {}
      return { text: text || '', author: from_who || from || '', id: id || 0 }
    }
  })
}