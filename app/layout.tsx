import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Hermes Field Guide', description: 'A practical map of Hermes Agent: setup, tools, skills, MCP, and multi-agent operations.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
