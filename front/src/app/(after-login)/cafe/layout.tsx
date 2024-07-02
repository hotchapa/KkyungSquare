export default function CafeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <>{children}</>
    </>
  )
}
