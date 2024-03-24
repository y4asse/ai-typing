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
              AI Typing is an innovative typing game that harnesses the power of AI-driven text generation. Based on the
              theme provided by the user, the AI creates unique, one-of-a-kind passages. Practice typing with your own
              original content, tailored just for you. From beginners to advanced typists, this next-generation typing
              app offers an enjoyable way to improve your skills.
            </p>
          </div>
          <TypingAnimation className="w-[500px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Features</h2>
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
                <span>AI-generated original passages</span>
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
                <span>Ranking system</span>
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
                <span>Typing speed and accuracy measurement</span>
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
                <span>Adaptable to any theme</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Benefits of AI-generated content</h2>
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
                <span>Always fresh and diverse passages</span>
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
                <span>Personalized to the user&apos;s interests</span>
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
                <span>Improves vocabulary and writing skills</span>
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
                <span>Enables long-term practice without boredom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/play"
            className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-indigo-50 transition duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
