import Logo from '@/components/global/Logo'
import { TypingAnimation } from '@/components/lottie-animation/TypingAnimation'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pb-16">
        <div className="flex justify-center items-center">
          <div>
            <Logo className="mx-auto" />
            <p className="text-xl my-12 md:max-w-3xl">
              AI
              Typingは、文章作成AIを駆使した革新的なタイピングゲームです。ユーザーが入力したテーマに基づいて、AIが唯一無二の文章を生成。あなただけのオリジナル文章でタイピング練習ができます。初心者から上級者まで、楽しみながらスキルアップを目指せる、新世代のタイピングアプリです。
            </p>
          </div>
          <TypingAnimation className="w-[500px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">特徴</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>AIによるオリジナル文章生成</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>ランキング機能</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>タイピングスピードと正確性の測定</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>どんなテーマにも対応</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">AIによる文章生成の利点</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>常に新鮮で多様な文章</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>ユーザーの興味に合わせたパーソナライズ</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>語彙力と文章力の向上</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>飽きずに長期的な練習が可能</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/play"
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-indigo-50 transition duration-300"
          >
            今すぐ始める
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
