import { useEffect, useRef, useState } from 'react'
import { IconDots, IconPrint, IconReset, IconSprout } from './icons'

interface HeaderProps {
  weekLabel: string
  onPrint: () => void
  onReset: () => void
  onOpenSos: () => void
}

export default function Header({ weekLabel, onPrint, onReset, onOpenSos }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const moreWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onDocClick = (event: MouseEvent) => {
      if (!moreWrapRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [menuOpen])

  return (
    <header className="app-header">
      <div className="shell header-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true"><IconSprout size={21} /></div>
          <div className="brand-text"><strong>孕期同行手册</strong><span>{weekLabel}</span></div>
        </div>
        <div className="header-actions">
          <button className="sos-button" type="button" onClick={onOpenSos}>
            <span className="sos-dot" aria-hidden="true" />
            <span className="sos-full">紧急就医信号</span>
            <span className="sos-short">SOS</span>
          </button>
          <div className="header-menu">
            <button className="ghost-button" type="button" onClick={onPrint}>
              <IconPrint size={15} />
              打印清单
            </button>
            <button className="ghost-button danger" type="button" onClick={onReset}>
              <IconReset size={15} />
              重置进度
            </button>
          </div>
          <div className="more-wrap" ref={moreWrapRef}>
            <button
              className="ghost-button"
              id="more-button"
              type="button"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              aria-label="更多操作"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <IconDots size={17} />
            </button>
            <div className="more-menu" id="more-menu" hidden={!menuOpen}>
              <button type="button" onClick={() => { setMenuOpen(false); onPrint() }}>打印清单</button>
              <button type="button" className="danger" onClick={() => { setMenuOpen(false); onReset() }}>重置进度</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
