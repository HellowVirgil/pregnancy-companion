import type { ReactNode, SVGProps } from 'react'

type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & { size?: number }

function Svg({ size = 17, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <Svg strokeWidth={2.4} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Svg>
  )
}

export function IconChevron(props: IconProps) {
  return (
    <Svg strokeWidth={2} {...props}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  )
}

export function IconHeart(props: IconProps) {
  return (
    <Svg fill="currentColor" stroke="none" {...props}>
      <path d="M12 20.5s-7.5-4.9-9.9-9.6C.4 7.4 2.5 4 6 4c2.2 0 4 1.2 5 3 1-1.8 2.8-3 5-3 3.5 0 5.6 3.4 3.9 6.9-2.4 4.7-7.9 9.6-7.9 9.6z" />
    </Svg>
  )
}

export function IconSprout(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21.5V11" />
      <path d="M12 11C12 7.3 9.4 4.8 5.8 4.8c0 3.7 2.6 6.2 6.2 6.2z" />
      <path d="M12 13.5c0-3.1 2.3-5.2 5.4-5.2 0 3.1-2.3 5.2-5.4 5.2z" />
    </Svg>
  )
}

export function IconCompass(props: IconProps) {
  return (
    <Svg strokeWidth={1.9} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-2.1 4.6-4.6 2.1 2.1-4.6z" />
    </Svg>
  )
}

export function IconCamera(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 7.5h3L9 5.5h6l1.5 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </Svg>
  )
}

export function IconActivity(props: IconProps) {
  return (
    <Svg strokeWidth={2} {...props}>
      <path d="M3 12h4l2.5-6.5 4.5 13L16.5 12H21" />
    </Svg>
  )
}

export function IconPrint(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 8V3.5h10V8" />
      <rect x="3.5" y="8" width="17" height="8.5" rx="2" />
      <path d="M7 13.5h10V21H7z" />
    </Svg>
  )
}

export function IconReset(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 5v4.5H8" />
      <path d="M4.1 14.5a8 8 0 1 0 .6-6.7L3.5 9.5" />
    </Svg>
  )
}

export function IconDots(props: IconProps) {
  return (
    <Svg fill="currentColor" stroke="none" {...props}>
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </Svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <Svg strokeWidth={2} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  )
}

export function IconHome(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.5V20a.8.8 0 0 0 .8.8h11.4a.8.8 0 0 0 .8-.8V9.5" />
      <path d="M9.5 20.5v-6h5v6" />
    </Svg>
  )
}

export function IconCalendar(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
      <path d="M12 17.2s-2.6-1.6-2.6-3.3c0-.9.7-1.5 1.5-1.5.5 0 .9.2 1.1.6.2-.4.6-.6 1.1-.6.8 0 1.5.6 1.5 1.5 0 1.7-2.6 3.3-2.6 3.3z" />
    </Svg>
  )
}

export function IconChecklist(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9.5 6.5h11M9.5 12h11M9.5 17.5h11" />
      <path d="m3.5 6 1.3 1.3L7.2 4.9M3.5 11.5 4.8 12.8 7.2 10.4M3.5 17l1.3 1.3 2.4-2.4" />
    </Svg>
  )
}

export function IconPlane(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 3.5 3.5 10.8l6 2.3 2.3 6L21 3.5z" />
      <path d="M9.5 13.1 21 3.5" />
    </Svg>
  )
}

export function IconBook(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v20H7.5A2.5 2.5 0 0 1 5 19.5z" />
      <path d="M5 19.5A2.5 2.5 0 0 1 7.5 17H19" />
    </Svg>
  )
}

export function IconDoc(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.5 2.5H15l5.5 5.5v12.5a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5z" />
      <path d="M15 2.5V8h5.5" />
      <path d="M9 13h6M9 17h4" />
    </Svg>
  )
}
