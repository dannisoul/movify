import { popularMovies } from '@/services/popularMovies'
import { NextResponse } from 'next/server'

export async function POST (req) {
  const body = await req.json()
  const movies = await popularMovies(body.page)
  return NextResponse.json(movies)
}
