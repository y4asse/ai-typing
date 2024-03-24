import Navbar from '@/components/global/Navbar'
import './globals.css'
import { Kosugi } from 'next/font/google'
import Script from 'next/script'
import { Toaster as SonnerToaster } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { FirebaseAuthProvider } from '@/components/provider/FirebaseAuthProvider'
import { ThemeProvider } from '@/components/provider/theme-provider'
import QueryProvider from '@/components/provider/QueryClientProvider'
import { Metadata } from 'next'

const kosugi = Kosugi({ subsets: ['latin'], weight: ['400'], display: 'swap' })

export const metadata: Metadata = {
  title: 'AI Typing 🚀 新世代AIタイピングゲーム!!',
  description:
    '新世代AIタイピングゲーム!入力したテーマに応じてAIが文章を作ってくれます！あなただけの文でタイピングの練習！タイピング初心者の方や，楽しく練習したいという方におすすめです！',
  openGraph: {
    images:
      'https://firebasestorage.googleapis.com/v0/b/ai-typing-c06b9.appspot.com/o/ogImage.png?alt=media&token=cb7458bf-6d85-428a-a3bf-4c697648e265'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@y4isse'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
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
          </>
        )}
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/cafeteria-fa0bf.appspot.com/o/aikun_0811015123.png?alt=media&token=e1579c8d-400c-408d-8b33-b7ea3a8fb5f7"
        />

        {/* Google ad */}
        <meta name="google-adsense-account" content="ca-pub-8973148456811724" />
      </head>
      <FirebaseAuthProvider>
        <QueryProvider>
          {/* <ThemeProvider defaultTheme="system" attribute="class" enableSystem> */}
          <body className={kosugi.className}>
            <div className="">
              {/* <GlobalMenu /> */}
              {/* 200pxはフッター、70pxはヘッダー */}
              <main className="min-h-[calc(100vh-200px)] pt-[calc(70px+60px)]">{children}</main>
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
