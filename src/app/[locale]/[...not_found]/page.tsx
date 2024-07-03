import React from "react"
import { useTranslations } from "next-intl"

function NotFound() {
	const t = useTranslations("NotFound")

	return (
		<div className="min-h-screen flex flex-1 flex-col text-center gap-y-12 p-24">
			<h1 className="text-4xl font-bold">{t("title")}</h1>
			<p className="text-lg">{t("description")}</p>
		</div>
	)
}

export default NotFound
