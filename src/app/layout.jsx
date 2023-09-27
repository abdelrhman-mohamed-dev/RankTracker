//https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Poppins-Poppins
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";

import "./globals.css";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginScreen from "./LoginScreen";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rank Tracker",
  description: "Rank Tracker to track the rank of your website",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        {session ? (
          <>
            <Header />
            <div className="max-w-4xl mx-auto">{children}</div>
          </>
        ) : (
          <LoginScreen />
        )}
      </body>
    </html>
  );
}
