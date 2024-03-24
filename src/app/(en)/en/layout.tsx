import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Typing 🚀 Next-Generation AI Typing Game!!',
  description:
    'Welcome to the next-generation AI typing game! Input a theme, and the AI will generate unique sentences for you to practice typing. Perfect for beginners looking to improve their typing skills or anyone who wants to make typing practice fun and engaging. Enjoy practicing with personalized sentences tailored to your interests!',
  twitter: {
    images:
      'https://firebasestorage.googleapis.com/v0/b/ai-typing-c06b9.appspot.com/o/ogImageEn.png?alt=media&token=5345ead9-c997-4006-b5c4-e90f8827fd84',
    site: '@y4isse',
    card: 'summary_large_image'
  },
  openGraph: {
    images:
      'https://firebasestorage.googleapis.com/v0/b/ai-typing-c06b9.appspot.com/o/ogImageEn.png?alt=media&token=5345ead9-c997-4006-b5c4-e90f8827fd84'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
