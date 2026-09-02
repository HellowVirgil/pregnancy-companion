import { useEffect, useRef } from 'react'
import { IconClose } from './icons'

interface SosModalProps {
  open: boolean
  onClose: () => void
}

export default function SosModal({ open, onClose }: SosModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    lastFocusedRef.current = document.activeElement as HTMLElement | null
    document.body.classList.add('modal-open')
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('modal-open')
      lastFocusedRef.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal" id="sos-modal">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="sos-title">
        <div className="modal-head">
          <h2 id="sos-title">立即就医信号</h2>
          <button className="icon-button modal-close" type="button" onClick={onClose} aria-label="关闭" ref={closeRef}>
            <IconClose size={16} />
          </button>
        </div>
        <p className="modal-lead">出现以下任何信号，不要等待下一次预约或计划节点，立即联系医院或就近急诊。</p>
        <ul className="sos-list">
          <li>明显出血、持续或单侧剧烈腹痛、肩痛、晕厥</li>
          <li>发热38℃以上、胸痛、呼吸困难或单侧小腿肿痛</li>
          <li>孕中晚期破水、37周前规律宫缩</li>
          <li>严重头痛、视物异常或胎动明显减少</li>
          <li>严重呕吐脱水</li>
        </ul>
        <div className="sos-extra">旅行期间急症：澳大利亚急救电话 000；香港待产期按医院指引前往急症室，并随身携带孕期摘要与证件。</div>
      </div>
    </div>
  )
}
