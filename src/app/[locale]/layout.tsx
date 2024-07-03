import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// next-intl imports
import {
	getLocale,
	getMessages,
	getNow,
	getTimeZone,
	getTranslations,
} from "next-intl/server"
import MyCustomNextIntlClientProvider from "@/components/MyCustomNextIntlClientProvider"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({ params: { locale } }: any) {
	const t = await getTranslations({ locale, namespace: "Metadata" })

	return {
		title: t("title"),
		description: t("description"),
	}
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const messages = await getMessages()
	const locale = await getLocale()
	const timeZone = await getTimeZone()
	const now = await getNow()

	return (
		<html lang="en">
			<body className={inter.className}>
				<MyCustomNextIntlClientProvider
					locale={locale}
					timeZone={timeZone}
					now={now}
					messages={messages}
				>
					{children}
				</MyCustomNextIntlClientProvider>
			</body>
		</html>
	)
}
