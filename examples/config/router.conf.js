const viewPath = 'views/'
const routerPath = (path, root = viewPath) => `${root}${path}`

const config = [
  {
    name: 'home',
    nickname: '首页',
    isNotMenu: true,
    path: '/',
    componentPath: routerPath('Home'),
    mata: {},
  },
  {
    name: 'form',
    nickname: '首页',
    isNotMenu: true,
    path: '/form',
    componentPath: routerPath('Form'),
    mata: {},
  }
]

export const routerConf = config.map(item => {
  const { name, path, componentPath, meta } = item

  return { name, path, componentPath, meta }
})

// 默认cover
const defaultCover = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

// 菜单
export const routerMenuList = config.filter(item => !item?.isNotMenu).map(item => {

  const { name, nickname, desc, cover, path } = item

  return {
    nickname,
    name,
    desc: desc || name,
    path,
    cover: cover || defaultCover
  }
})