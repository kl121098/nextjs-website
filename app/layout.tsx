import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Aboveheader from "./_components/Aboveheader";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fuzzy Cloud",
	description: "Fuzzy Cloud",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider>
				<Header />
				{children}
				<Footer />
				</SessionProvider>
			</body>
		</html>
	);
}
