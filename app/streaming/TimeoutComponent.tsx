export const dynamic = 'force-dynamic'

export async function TimeoutComponent({ timeout = 5000 }) {
	await new Promise((resolve) => setTimeout(resolve, timeout))

	return <p>Rendered after timeout of {timeout}!</p>
}
