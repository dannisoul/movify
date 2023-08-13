import { popularSeries } from '@/services/popularSeries'
import { NextResponse } from 'next/server'

export async function POST (req) {
  const body = await req.json()
  const movies = await popularSeries(body.page)
  return NextResponse.json(movies)
}
