import throttle from "./throttle"
const utils = {
  /**
   * Parse second to time string
   *
   * @param {Number} second
   * @return {String} 00:00 or 00:00:00
   */
  secondToTime: second => {
    if (typeof second !== 'number' || isNaN(second)) { second = 0 }
    const add0 = num => (num < 10 ? '0' + num : '' + num)
    const hour = Math.floor(second / 3600)
    const min = Math.floor((second - hour * 3600) / 60)
    const sec = Math.floor(second - hour * 3600 - min * 60)
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':')
  },


  isFirefox: /firefox/i.test(window.navigator.userAgent),

  isChrome: /chrome/i.test(window.navigator.userAgent),

  storage: {
    set: (key, value) => {
      localStorage.setItem(key, value)
    },

    get: key => localStorage.getItem(key)
  },

  /**
   * 节流函数
   * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/scroll_event
   * @param {Function} callback 执行函数
   * @param {Number}   time     间隔时间
   */
  throttle (callback) {
    let ticking = false
    return function () {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(function () {
          callback && callback()
          ticking = false
        })
      }
    }
  },
}

export default {
  ...utils,
  ...throttle
}
