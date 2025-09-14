import type { Metadata } from "next";
import "./globals.css";
import { Shell } from 'lucide-react';

export const metadata: Metadata = {
  title: "loop.in",
  description: "Connect Gmail, Slack, Trello, and Google Sheets plus WhatsApp, Discord, and more — all in one place.No code required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Loop.in</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-shell-icon lucide-shell'><path d='M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44'/></svg>" type="image/svg+xml" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
