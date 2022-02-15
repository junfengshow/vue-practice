// 标签
import Tag from './Tag/Tag'
// 导航列表
export { default as ListItemArrow } from './ListView/ListItemArrow'
// 标签
export { default as Tag } from './Tag/Tag'

// 全局注入
export const injection = (Vue) => {
  if (!Vue) {
    console.error('参数不能为空')
    return;
  }
  ([
    { key: Tag.name, component: Tag },
  ]).forEach(item => Vue.component(item.key, item.component))
}
