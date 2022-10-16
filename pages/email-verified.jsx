import { Button, Heading } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const EmailVerified = () => {
	const {
		push,
		query: { updateSession },
	} = useRouter()
	const [refreshed, setRefreshed] = useState(false)

	useEffect(() => {
		if (updateSession) {
			axios.get('/api/refreshToken').then(data => {
				if (data) return setRefreshed(true)
			})
		}
	}, [updateSession, push])

	return (
		<>
			<Heading>Your email is verified</Heading>
			{refreshed && <Button onClick={() => push('/')}>Go to Home</Button>}
		</>
	)
}

export default EmailVerified
