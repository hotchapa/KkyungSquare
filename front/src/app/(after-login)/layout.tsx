import ClientRootLayout from '@/common/components/client-root-layout'
export default function AfterLoginlayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
