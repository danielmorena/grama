import React from 'react'

export default async function Page({ params }) {
	console.log('>>>', await params)
	return (
		<div>Proposal Renderer</div>
	)
}
