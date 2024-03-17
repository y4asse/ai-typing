import Logo from '@/components/global/Logo'
import WidthContainer from '@/components/global/WitdthContainer'
import { TypingAnimation } from '@/components/lottie-animation/TypingAnimation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function Home() {
  return (
    <WidthContainer>
      <div className="flex items-center px-10">
        <div className="w-1/2 text-center">
          <h1 className="text-4xl font-bold text-blue-500">AIが文章を生成するタイピングゲーム</h1>
          <h1 className="text-4xl font-bold text-blue-500 mt-5">新しいタイピングの世界へ飛び込もう！</h1>
          <p className="text-lg text-gray-500 mt-10">
            テーマを入力するとAIが文を生成し、その文章でタイピング練習することができます。同じ文章だけタイピングして飽きていませんか？自分の好きなテーマでタイピング練習をしてみましょう！
          </p>
          <div className="mt-10">
            <Button asChild className="text-xl font-bold">
              <Link href="/play">プレイする</Link>
            </Button>
          </div>
        </div>
        <div className="w-1/2 text-center">
          <Logo className="mx-auto w-[500px]" />
          <div className="text-end text-xl text-gray-500">新世代タイピングゲーム🚀</div>
          <TypingAnimation className="w-[400px] h-[400px] mx-auto rounded-full" />
        </div>
      </div>
      <div>
        {/* <Table>
          <TableCaption>ランキングTOP10</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
      </div>
    </WidthContainer>
  )
}
