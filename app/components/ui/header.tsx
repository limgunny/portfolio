type HeaderProps = {
  children: React.ReactNode
  animateOpacity?: boolean
  className?: string
}

export default function Header({
  children,
  animateOpacity,
  className,
}: HeaderProps) {
  return (
    <h1 className={`text-3xl font-semibold mb-16 tracking-wider ${className}`}>
      {children}
    </h1>
  )
}
