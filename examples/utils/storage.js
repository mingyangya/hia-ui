export class Storage {
  constructor () {
    const nameList = ['yiyan', 'yiyan_author']
    const valueList = [
      {
        key: 'yiyan',
        value: '秦时明月汉时关，万里长征人未还。',
        time: 1691222069888
      },
      {
        key: 'yiyan_author',
        value: '王昌龄',
        time: 1691222069888
      }
    ]

    if (!this.storage) {
      this.nameList = nameList
      this.valueList = valueList
      this.initStorage()
    }
  }

  isString (value) {
    return typeof value === 'string'
  }

  add (key, value) {
    const val = { key, time: Date.now(), value }

    if (!this.nameList.includes(key)) {
      this.nameList.push(key)
    }

    if (!this.valueList.map(item => item.key).includes(key)) {
      this.valueList.push(val)
    } else {
      this.valueList = this.valueList.map(item => item.key === key ? val : item)
    }

    localStorage.setItem(key, JSON.stringify(val))
  }

  initStorage () {
    this.nameList.forEach(key => {
      const findItem = this.valueList.find(item => item.key === key) || {}

      this.add(key, findItem?.value)
    })
  }

  set (key, value) {
    this.add(key, value)
  }

  get (key) {
    return this.valueList.find(item => item.key === key)
  }
}

