/** @format */

import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geistMonoHeading = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-heading",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "OrganizeIt - Mini Kanban Board",
	description: "Kanban board untuk manajemen tugas tim",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='id'
			suppressHydrationWarning
			className={cn("font-sans", geist.variable, geistMonoHeading.variable)}>
			<body>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
