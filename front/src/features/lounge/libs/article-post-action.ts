export default async function signOut(): Promise<void> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signout`,
      {
        method: 'POST',
        credentials: 'include',
      }
    )

    if (!response.ok) {
      throw new Error('Failed to sign out')
    }
  } catch (err) {
    console.error('Error during sign out:', err)
  }
}
