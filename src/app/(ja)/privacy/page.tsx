import WidthContainer from '@/components/global/WitdthContainer'
import React from 'react'

const Page = () => {
  return (
    <WidthContainer>
      <h1 className="text-4xl font-bold my-10">Google Analyticsの使用について</h1>
      <p className="text-xl my-5">
        当サイトはウェブサイトのトラフィックと利用状況を把握するために、Google Analyticsを使用しております。Google
        Analyticsは、匿名のユーザーデータを収集し、アクセス解析やレポート作成に利用されます。このデータは、ウェブサイトの改善やコンテンツの最適化に役立てるために使用されます。また、この情報は第三者と共有されることはありません。私たちはユーザーのプライバシーとデータのセキュリティを非常に重視しており、適切な対策を講じています。詳細については、プライバシーポリシーをご確認いただくか、お問い合わせください。ご利用いただく際には、本サイトのプライバシーポリシーに同意されたものとみなされます。
      </p>
      <h1 className="text-4xl font-bold my-10">プライバシーポリシー</h1>
      <p className="text-xl my-5">
        このプライバシーポリシーは、当サイトのウェブサイト/サービスの利用者のプライバシーを尊重し、提供された情報を保護するために作成されました。当サイトは、個人情報の収集、使用、開示、および保管に関して透明性と信頼性を提供することを目指しています。当サイトは、以下に示す方針に従い、第三者に情報を提供しないことを約束いたします。
      </p>
      <h1 className="text-3xl">1. 収集される情報</h1>
      <p className="text-xl my-5">
        当サイトは、利用者から直接提供された情報を収集する場合があります。これには、名前、連絡先情報、メールアドレス、その他の識別情報が含まれます。また、利用者がウェブサイト/サービスを使用する際に自動的に生成される情報（IPアドレス、Cookie情報、ブラウザの種類、使用言語など）も収集する場合があります。
      </p>
      <h1 className="text-3xl">2. 情報の使用</h1>
      <p className="text-xl my-5">収集した情報は、以下の目的のために使用される場合があります。</p>
      <ul className="mb-3">
        <li className=" list-disc list-inside">ウェブサイト/サービスの提供および運営</li>
        <li className=" list-disc list-inside">利用者とのコミュニケーション</li>
        <li className=" list-disc list-inside">サービス改善のための統計データの収集</li>
        <li className=" list-disc list-inside">法的要件や規制への適合</li>
      </ul>
      <h1 className="text-3xl">3. 情報の開示</h1>
      <p className="text-xl my-5">
        当サイトは、利用者の同意なしに個人情報を第三者と共有しません。ただし、以下の場合には情報を開示することがあります。
      </p>
      <ul className="mb-3">
        <li className=" list-disc list-inside">利用者から明示的な同意が得られた場合</li>
        <li className=" list-disc list-inside">法的要件や規制に従う必要がある場合</li>
        <li className=" list-disc list-inside">利用者や他の個人の安全を保護する必要がある場合</li>
      </ul>
      <h1 className="text-3xl">4. セキュリティ</h1>
      <p className="text-xl my-5">
        当サイトは、利用者の情報を適切に保護するために技術的、物理的、組織的なセキュリティ対策を講じています。ただし、インターネット上での情報の送信は完全に安全であることを保証することはできません。
      </p>
      <h1 className="text-3xl">5. Cookieの使用</h1>
      <p className="text-xl my-5">
        当サイトは、一部の場合にCookieを使用して利用者のウェブサイト/サービスの利用状況を追跡し、より良いユーザーエクスペリエンスを提供するために使用することがあります。
      </p>
      <h1 className="text-3xl">6. 法令遵守</h1>
      <p className="text-xl my-5">
        当サイトは、個人情報の収集、使用、開示、および保管に関して、適用される法律、規制、および業界のベストプラクティスに準拠します。個人情報の処理に関する法的権利を尊重し、利用者に対して以下の権利を保証します。
      </p>
      <ul className="mb-3">
        <li className=" list-disc list-inside">個人情報へのアクセス</li>
        <li className=" list-disc list-inside">選択の権利</li>
        <li className=" list-disc list-inside">コンテンツの制御</li>
        <li className=" list-disc list-inside">プライバシーへの配慮</li>
      </ul>
      <p className="text-xl my-5">
        当サイトは、プライバシーポリシーを定期的に見直し、必要な改訂を行います。プライバシーポリシーの変更がある場合には、ウェブサイト上で通知を行います。
      </p>
      <p className="text-xl my-5">
        ご不明な点や個人情報に関するお問い合わせがある場合は、X（旧Twitter）にご連絡ください：
        <a className="underline" href="https://twitter.com/y4isse" target="_blank" rel="noopener noreferrer">
          (y4isse)
        </a>
      </p>
      <p className="text-xl my-5">
        ご提供いただく個人情報は、当サイトのプライバシーポリシーに従って使用されます。プライバシーに関するご質問や懸念がある場合は、お気軽にお問い合わせください。
      </p>
      <br />
    </WidthContainer>
  )
}

export default Page
