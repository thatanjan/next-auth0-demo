import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Heading, Button, Image } from '@chakra-ui/react'
import { useUser } from '@auth0/nextjs-auth0'

const Home = () => {
	const { user, isLoading, checkSession } = useUser()
	const { push } = useRouter()

	const handleLogin = () => push('/api/auth/login')
	const handleLogout = () => push('/api/auth/logout')
	const handleVisitProtectedPage = () => push('/protected')

	useEffect(() => {
		;(async () => {
			await checkSession()
		})()
	}, [checkSession])

	if (isLoading) return <Heading>Loading...</Heading>
	console.log(user)

	const emailVerificationText = `Email is ${
		user?.email_verified ? '' : 'not'
	} verified`

	return (
		<div>
			<Heading>Auth 0</Heading>

			{user ? (
				<>
					<Image alt='' src={user.picture} />
					<Heading>{user.name}</Heading>
					{'email_verified' in user && <Heading>{emailVerificationText}</Heading>}

					<Button onClick={handleLogout}>Log out</Button>
				</>
			) : (
				<Button onClick={handleLogin}>Login</Button>
			)}

			<Button onClick={handleVisitProtectedPage}>visit Protected page</Button>
		</div>
	)
}

export default Home
