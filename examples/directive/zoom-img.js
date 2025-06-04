import Vue from 'vue'

function mouseover (e) {
  console.log(e)
  const target = e.currentTarget
  const img = target.querySelector('img')

  img.style.display = 'block'

  const x = e.clientX
  const y = e.clientY

  const { naturalWidth: width, naturalHeight: height } = img

  img.style.left = Math.max(x - parseFloat(width) / 2, 0) + 'px'
  img.style.top = Math.max(y - parseFloat(height) / 2, 0) + 'px'

}

function mouseout (e) {
  const target = e.currentTarget
  const img = target.querySelector('img')
  img.style.display = 'none'
}

Vue.directive('zoom-img', {
  bind: function (el, binding, vnode) {
    el.style.position = 'relative'

    const img = document.createElement('img')

    // img.innerHTML = `<img src="${binding.value}" style="width: auto; height: auto; max-width: unset"/>`
    img.src = binding.value
    // img.classList.add('img')
    img.style.display = 'none'

    // img.style.background = 'rgba(0,0,0,.7)'
    // img.style.alignItems = 'center'
    // img.style.justifyContent = 'center'
    img.style.position = 'fixed'
    img.style.zIndex = 99
    img.style.width = 'auto'
    img.style.height = 'auto'
    img.style.maxHeight = 'unset'

    el.appendChild(img)

    el.addEventListener('mouseover', mouseover)
    el.addEventListener('mouseout', mouseout)
  },


  unbind: function (el, binding, vnode) {
    el.removeEventListener('mouseover', mouseover)
    el.removeEventListener('mouseout', mouseout)
  }
})