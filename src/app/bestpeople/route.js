import { NextResponse } from 'next/server'
import { popularPeople } from '@/services/popularPeople'

export async function POST (request) {
  const body = await request.json()
  const people = await popularPeople(body.page)
  return NextResponse.json(people)
}
