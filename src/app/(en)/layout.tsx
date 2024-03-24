import FooterEn from '@/components/global/FooterEn'
import NavbarEn from '@/components/global/NavbarEn'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarEn />
      <p className="text-center text-red-500 pb-10 text-lg font-bold block md:hidden">
        This app is intended for use on a PC.
      </p>
      {children}
      <FooterEn />
    </>
  )
}
