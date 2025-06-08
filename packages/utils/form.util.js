export const isUndefined = (val) => {
  return typeof val === 'undefined' && val === undefined
}

export const isNull = (val) => {
  return typeof val === 'object' && val === null
}

export const isEmptyString = () => {
  return typeof val === 'string' && val === ''
}

export const isEmpty = function (val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
};

export const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};


// 获取vue元素
export const getVueElement = (ele) => {
  while (!ele['__vue__'] && ele != null) {
    ele = ele.parentNode
  }

  return ele ? ele['__vue__'] : ele
}

export const customDispatch = (vueEleRef, componentName, eventName, params) => {
  const thatRef = vueEleRef['$el'] ? vueEleRef : getVueElement(vueEleRef)

  let parent = thatRef;
  let name = parent.$options.componentName;
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;
    if (parent) {
      name = parent.$options.componentName;
    }
  }

  console.log('parent', parent, eventName)

  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params));
  }
}

// 自定义组件的检验
export const customValidateItem = (thatRef, type = 'change', val) => {
  const value = Array.isArray(val) ? val : [val]

  customDispatch(thatRef, 'ElFormItem', `el.form.${type}`, value)
}


export function noop() { };


export const isSupportGrid = () => window.CSS && window.CSS.supports('display', 'grid')

export const isInputSupported = () => {
  let el = document.createElement('input')
  const supported = 'oninput' in el

  el = null

  return supported
}