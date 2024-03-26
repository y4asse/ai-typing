import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <div className="mt-20">
        <p className="text-center text-red-500 pb-10 text-lg font-bold block md:hidden">
          このアプリはPCでの利用を想定しています。
        </p>
        {children}
      </div>
      <Footer />
    </>
  )
}
