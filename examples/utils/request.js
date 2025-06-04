import axios from 'axios'

export const ajax = function (option) {
  const defaultOpt = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const opt = Object.assign({}, defaultOpt, option)

  opt.method = option.type || 'post'

  if (opt.method.toLocaleLowerCase() === 'get') {
    opt.params = Object.assign({
      v_t: Date.now()
    }, option.data)
  } else {
    opt.data = option.data
  }

  return axios(opt).then(res => {
    return res
  }).catch(err => {
    return err
  })
}


export default axios