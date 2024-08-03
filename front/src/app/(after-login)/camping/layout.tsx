import AdvertiseArea from '@/common/components/advertise-area'
export default function CampingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AdvertiseArea />
      {children}
    </>
  )
}
