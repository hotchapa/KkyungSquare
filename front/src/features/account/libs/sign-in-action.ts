'use client'

export default async function onSubmit(formData: FormData) {
  const errors: { message: string | null } = { message: null }

  if (!formData.get('userId') || !(formData.get('userId') as string)?.trim()) {
    errors.message = 'no_userId'
    return errors
  }

  if (
    !formData.get('password') ||
    !(formData.get('password') as string)?.trim()
  ) {
    errors.message = 'no_password'
    return errors
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,
      {
        method: 'POST',
        body: JSON.stringify({
          userId: formData.get('userId'),
          password: formData.get('password'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    )

    if (response.status === 403) {
      errors.message = 'user_exists'
    } else if (response.ok) {
      const result = await response.json()
      errors.message = null
      window.location.href = '/lounge'
    } else {
      errors.message = 'unknown_error'
    }
  } catch (err) {
    console.error(err)
    errors.message = 'unknown_error'
  }

  return errors
}
