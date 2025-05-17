import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { prompt } = await request.json()
  const res = await fetch('http://chat-backend:8000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  })
  const data = await res.json()
  return NextResponse.json(data)
}
