// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: 'Revalidation webhook ready' })
}
