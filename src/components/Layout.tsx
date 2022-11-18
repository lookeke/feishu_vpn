import { Box } from '@mui/material'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Box
			sx={{
				maxWidth: '1920px',
				height: 'auto',
			}}
		>
			{children}
		</Box>
	)
}
