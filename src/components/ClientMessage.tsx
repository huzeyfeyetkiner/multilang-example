"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"

function ClientMessage({ message }: { message: string }) {
	const t = useTranslations("Index")
	const [counter, setCounter] = useState(0)

	return (
		<div className="text-center border border-white rounded-md p-2">
			<h1>Client Component</h1>
			<h1>{message}</h1> {/*  This is the message from the server */}
			<h1>{t("message")}</h1> {/* This is the message from the client  */}
			<button
				className="bg-white text-black p-2 rounded-md my-2"
				onClick={() => setCounter(counter + 1)}
			>
				Click me
			</button>
			<h1>{counter}</h1>
		</div>
	)
}

export default ClientMessage
