import Navbar from '@/components/global/Navbar'
import './globals.css'
import { Kosugi } from 'next/font/google'
import Script from 'next/script'
import Footer from '@/components/global/Footer'
import { Toaster as SonnerToaster } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { FirebaseAuthProvider } from '@/components/provider/FirebaseAuthProvider'
import { ThemeProvider } from '@/components/provider/theme-provider'
import QueryProvider from '@/components/provider/QueryClientProvider'

const kosugi = Kosugi({ subsets: ['latin'], weight: ['400'], display: 'swap' })

export const metadata = {
  title: 'AI Typing 🚀 新世代AIタイピングゲーム!!',
  description:
    '新世代AIタイピングゲーム!入力したテーマに応じてAIが文章を作ってくれます！あなただけの文でタイピングの練習！タイピング初心者の方や，楽しく練習したいという方におすすめです！'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GA_ID && (
        <head>
          <Script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
           `
            }}
          />
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973148456811724"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          ></Script>
          <link
            rel="icon"
            href="https://firebasestorage.googleapis.com/v0/b/cafeteria-fa0bf.appspot.com/o/aikun_0811015123.png?alt=media&token=e1579c8d-400c-408d-8b33-b7ea3a8fb5f7"
          />
          <meta property="og:type" content="(1)ページタイプ" />
          <meta property="og:title" content="AI Typing 🚀 新世代タイピングゲーム " />
          <meta
            property="og:description"
            content="AIが文を作成する新世代タイピングゲーム.あなただけの文でタイピングをしよう！"
          />
          <meta property="og:url" content="https://ai-typing.app" />
          <meta property="og:site_name" content="AI Typing" />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/cafeteria-fa0bf.appspot.com/o/ai-typin.png?alt=media&token=d29bd47b-d5ba-46bb-bb18-5ab20c255010"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yAisse" />

          {/* Google ad */}
          <meta name="google-adsense-account" content="ca-pub-8973148456811724" />
        </head>
      )}
      <FirebaseAuthProvider>
        <QueryProvider>
          {/* <ThemeProvider defaultTheme="system" attribute="class" enableSystem> */}
          <body className={kosugi.className}>
            <div className="">
              {/* <GlobalMenu /> */}
              <Navbar />
              {/* 200pxはフッター、70pxはヘッダー */}
              <main className="min-h-[calc(100vh-200px)] pt-[calc(70px+60px)]">
                <p className="text-center text-red-500 pb-10 text-lg font-bold block md:hidden">
                  このアプリはPCでの利用を想定しています。
                </p>

                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
            <SonnerToaster />
          </body>
          {/* </ThemeProvider> */}
        </QueryProvider>
      </FirebaseAuthProvider>
    </html>
  )
}
