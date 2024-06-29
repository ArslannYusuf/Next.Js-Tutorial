import { Inter } from "next/font/google";
import "../global.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} d-flex flex-column justify-content-between vh-100`}
			>
				{children}
			</body>
		</html>
	);
}