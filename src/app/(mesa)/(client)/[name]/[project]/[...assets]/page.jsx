'use client'
import React from 'react'
import { useParams } from 'next/navigation'

export default function Page() {
	const params = useParams()
	console.log(params)
	return (
		<div>Todos os tipos de asset definidos por blocks do payload</div>
	)
}
