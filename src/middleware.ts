import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

function isBot(request: NextRequest): boolean {
  const userAgent = request.headers.get('User-Agent')
  return userAgent?.toLowerCase().includes('bot') || false
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/ads.txt',
      '/images/icon.png',
      '/images/logo.png',
      '/sound/type.mp3',
      '/sound/miss.mp3',
      '/sound/correct.mp3'
      // Your other files in `public`
    ].includes(pathname)
  )
    return

  const locale = getLocale(request)

  // Check if the request is from Japan
  const isFromJapan = locale === 'ja'
  // const isFromEn = locale === 'en'

  if (isBot(request)) {
    return
  }

  // Redirect to /en if the request is not from Japan
  if (!isFromJapan && !pathname.startsWith('/en')) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
