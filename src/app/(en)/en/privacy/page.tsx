import WidthContainer from '@/components/global/WitdthContainer'
import React from 'react'

const Page = () => {
  return (
    <WidthContainer>
      <h1 className="text-4xl font-bold my-10">Use of Google Analytics</h1>{' '}
      <p className="text-xl my-5">
        This website uses Google Analytics to track website traffic and usage. Google Analytics collects anonymous user
        data, which is used for access analysis and report generation. This data is used to improve the website and
        optimize content. This information is not shared with third parties. We take user privacy and data security very
        seriously and have implemented appropriate measures. For more details, please review our Privacy Policy or
        contact us. By using this site, you agree to our Privacy Policy.
      </p>{' '}
      <h1 className="text-4xl font-bold my-10">Privacy Policy</h1>{' '}
      <p className="text-xl my-5">
        This Privacy Policy is designed to respect the privacy of users of our website/service and protect the
        information provided. We aim to provide transparency and reliability in the collection, use, disclosure, and
        storage of personal information. We promise not to provide information to third parties in accordance with the
        policies outlined below.
      </p>{' '}
      <h1 className="text-3xl">1. Information Collected</h1>{' '}
      <p className="text-xl my-5">
        We may collect information directly provided by users, including names, contact information, email addresses,
        and other identifying information. We may also collect information automatically generated when users use our
        website/service, such as IP addresses, cookie information, browser type, language used, etc.
      </p>{' '}
      <h1 className="text-3xl">2. Use of Information</h1>{' '}
      <p className="text-xl my-5">The information collected may be used for the following purposes:</p>{' '}
      <ul className="mb-3">
        {' '}
        <li className=" list-disc list-inside">Providing and operating the website/service</li>{' '}
        <li className=" list-disc list-inside">Communicating with users</li>{' '}
        <li className=" list-disc list-inside">Collecting statistical data for service improvement</li>{' '}
        <li className=" list-disc list-inside">Complying with legal requirements and regulations</li>{' '}
      </ul>{' '}
      <h1 className="text-3xl">3. Disclosure of Information</h1>{' '}
      <p className="text-xl my-5">
        We do not share personal information with third parties without the user's consent. However, we may disclose
        information in the following cases:
      </p>{' '}
      <ul className="mb-3">
        {' '}
        <li className=" list-disc list-inside">When explicit consent is obtained from the user</li>{' '}
        <li className=" list-disc list-inside">When required to comply with legal requirements or regulations</li>{' '}
        <li className=" list-disc list-inside">When necessary to protect the safety of users or other individuals</li>{' '}
      </ul>{' '}
      <h1 className="text-3xl">4. Security</h1>{' '}
      <p className="text-xl my-5">
        We take technical, physical, and organizational security measures to properly protect user information. However,
        we cannot guarantee that information transmission over the internet is completely secure.
      </p>{' '}
      <h1 className="text-3xl">5. Use of Cookies</h1>{' '}
      <p className="text-xl my-5">
        In some cases, we may use cookies to track user usage of our website/service and to provide a better user
        experience.
      </p>{' '}
      <h1 className="text-3xl">6. Legal Compliance</h1>{' '}
      <p className="text-xl my-5">
        We comply with applicable laws, regulations, and industry best practices regarding the collection, use,
        disclosure, and storage of personal information. We respect the legal rights of users regarding the processing
        of personal information and guarantee the following rights:
      </p>{' '}
      <ul className="mb-3">
        {' '}
        <li className=" list-disc list-inside">Access to personal information</li>{' '}
        <li className=" list-disc list-inside">Right to choose</li>{' '}
        <li className=" list-disc list-inside">Control over content</li>{' '}
        <li className=" list-disc list-inside">Consideration for privacy</li>{' '}
      </ul>{' '}
      <p className="text-xl my-5">
        We regularly review and revise our Privacy Policy as necessary. If there are changes to the Privacy Policy, we
        will post a notice on our website.
      </p>{' '}
      <p className="text-xl my-5">
        If you have any questions or concerns about personal information, please contact us on X (formerly Twitter):
        <a className="underline" href="https://twitter.com/y4isse" target="\_blank" rel="noopener noreferrer">
          (y4isse)
        </a>{' '}
      </p>{' '}
      <p className="text-xl my-5">
        Any personal information you provide will be used in accordance with our Privacy Policy. If you have any
        questions or concerns about privacy, please feel free to contact us.
      </p>
    </WidthContainer>
  )
}

export default Page
