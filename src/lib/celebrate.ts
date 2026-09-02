import { motionOK } from './date'

/** 在目标控件旁撒出三色小纸屑，尊重系统"减弱动态效果"设置 */
export function celebrate(anchor: Element | null): void {
  if (!anchor || !motionOK()) return
  const rect = anchor.getBoundingClientRect()
  const burst = document.createElement('span')
  burst.className = 'celebrate'
  burst.style.left = `${rect.left + rect.width / 2}px`
  burst.style.top = `${rect.top + rect.height / 2}px`
  const colors = ['#4d7d64', '#c99b3f', '#bf6b5d']
  for (let i = 0; i < 7; i += 1) {
    const petal = document.createElement('i')
    const angle = (Math.PI * 2 * i) / 7 - Math.PI / 2
    const dist = 26 + Math.random() * 18
    petal.style.setProperty('--tx', `${Math.cos(angle) * dist}px`)
    petal.style.setProperty('--ty', `${Math.sin(angle) * dist - 8}px`)
    petal.style.background = colors[i % colors.length]
    petal.style.animationDelay = `${i * 18}ms`
    burst.appendChild(petal)
  }
  document.body.appendChild(burst)
  window.setTimeout(() => burst.remove(), 900)
}
