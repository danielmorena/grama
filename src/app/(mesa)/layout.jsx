import './globals.css'

export const metadata = {
	title: 'Mesa',
	description: 'Made with love',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{ children }</body>
		</html>
	)
}
