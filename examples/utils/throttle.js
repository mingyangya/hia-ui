/**
 * 节流函数
 * @param {Function} callback 执行函数
 * @param {Number}   time     间隔时间
 */
function throttle (callback, time = 60) {
  let running = false

  return () => {
    if (running) return

    running = true

    return setTimeout(() => {
      callback()

      running = false
    }, time)
  }
}

export default throttle
