import ClientMessage from "@/components/ClientMessage"
import LocaleSwitcher from "@/components/LocaleSwitcher"
import { useTranslations } from "next-intl"

export default function Home() {
	const t = useTranslations("Index")

	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-y-6">
			<LocaleSwitcher />
			<h1 className="">{t("title")}</h1>

			<ClientMessage message={t("message")} />
		</main>
	)
}
