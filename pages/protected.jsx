import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { Heading } from '@chakra-ui/react'
import React from 'react'

const Protected = ({ user }) => {
	console.log(user)
	return (
		<>
			<Heading>This is a protected page</Heading>
			<Heading>This is a protected page</Heading>
		</>
	)
}

/* export default withPageAuthRequired(Protected) */
export default Protected

export const getServerSideProps = withPageAuthRequired({
	returnTo: '/foo-bar',
	getServerSideProps: async ctx => {
		const {user} = getSession(ctx.req, ctx.res)
		console.log(session)

		return {
			props: {},
		}
	},
})
