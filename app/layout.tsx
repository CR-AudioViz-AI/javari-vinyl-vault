// app/layout.tsx — Javari Vinyl
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Vinyl | Javari by CR AudioViz AI',
  description: 'Vinyl collection',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari Vinyl" appColor="#8b5cf6" appEmoji="🎵" appDesc="Vinyl collection">{children}</AppShell></body></html>)
}
