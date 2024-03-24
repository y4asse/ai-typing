'use client'

import Spinner from '@/components/global/Spinner'
import WidthContainer from '@/components/global/WitdthContainer'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const getRanking = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ranking`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  return res.json() as Promise<{ user_name: string; score: number; created_at: string }[]>
}
const Page = () => {
  const query = useQuery({ queryKey: ['ranking'], queryFn: getRanking })
  return (
    <div className="pb-10 min-h-screen">
      <WidthContainer>
        <h1 className="text-3xl text-center">ランキングTOP10</h1>
        <div className="my-10">
          {query.isLoading ? (
            <Spinner />
          ) : query.isSuccess ? (
            <div>
              <Table className="text-xl text-center rounded-2xl border">
                {query.data.map((data, index) => {
                  const date = new Date(data.created_at)
                  const jst = date.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
                  // 秒を消す
                  const displayJst = jst.replace(/:\d{2}$/, '') // $は末尾を表す
                  if (index === 0)
                    return (
                      <TableBody key={index} className="bg-gray-100 text-3xl font-bold ">
                        <TableRow>
                          <TableCell className="w-1/4 text-yellow-400">{index + 1}位</TableCell>
                          <TableCell className="w-1/4">{data.user_name ?? '名無し'}</TableCell>
                          <TableCell className="w-1/4">{data.score} 点</TableCell>
                          <TableCell className="w-1/4">{displayJst}</TableCell>
                        </TableRow>
                      </TableBody>
                    )
                  if (index === 1)
                    return (
                      <TableBody key={index} className="bg-gray-100 text-2xl font-semibold ">
                        <TableRow>
                          <TableCell className="w-1/4 text-gray-500">{index + 1}位</TableCell>
                          <TableCell className="w-1/4">{data.user_name ?? '名無し'}</TableCell>
                          <TableCell className="w-1/4">{data.score} 点</TableCell>
                          <TableCell className="w-1/4">{displayJst}</TableCell>
                        </TableRow>
                      </TableBody>
                    )
                  if (index === 2)
                    return (
                      <TableBody key={index} className="bg-gray-100 text-2xl font-semibold ">
                        <TableRow>
                          <TableCell className="w-1/4 text-orange-800">{index + 1}位</TableCell>
                          <TableCell className="w-1/4">{data.user_name ?? '名無し'}</TableCell>
                          <TableCell className="w-1/4">{data.score} 点</TableCell>
                          <TableCell className="w-1/4">{displayJst}</TableCell>
                        </TableRow>
                      </TableBody>
                    )
                  return (
                    <TableBody key={index}>
                      <TableRow>
                        <TableCell className="w-1/4">{index + 1}位</TableCell>
                        <TableCell className="w-1/4">{data.user_name ?? '名無し'}</TableCell>
                        <TableCell className="w-1/4">{data.score} 点</TableCell>
                        <TableCell className="w-1/4">{displayJst}</TableCell>
                      </TableRow>
                    </TableBody>
                  )
                })}
              </Table>
            </div>
          ) : (
            <div className="text-center">エラーが発生しました</div>
          )}
        </div>
      </WidthContainer>
    </div>
  )
}

export default Page
