"use client";

import { Flowbite } from "flowbite-react";
import NavigationSideBar from "../components/NavigationSideBar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Class Planner",
	description: "Generated by create next app",
};

interface ILayoutProps {
	children: ReactElement;
}

export default function RootLayout({ children }: ILayoutProps) {
	const pathname = usePathname();

	return (
		<html lang="pt-br">
			<script
				async
				src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
			></script>
			<body className={inter.className}>
				<Flowbite>
					{pathname === "/sign-in" ? (
						children
					) : (
						<main className="grid grid-cols-container bg-background-color">
							<NavigationSideBar />
							{children}
						</main>
					)}
				</Flowbite>
			</body>
		</html>
	);
}
