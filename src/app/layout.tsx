import "@/app/styles/globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="">
			<body>{children}</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
