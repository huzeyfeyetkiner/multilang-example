"use client"

import { NextIntlClientProvider } from "next-intl"

export default function MyCustomNextIntlClientProvider({
	locale,
	timeZone,
	now,
	...rest
}: any) {
	return (
		<NextIntlClientProvider
			// Define non-serializable props here
			defaultTranslationValues={{
				i: (text) => <i>{text}</i>,
			}}
			locale={locale}
			timeZone={timeZone}
			now={now}
			{...rest}
		/>
	)
}
