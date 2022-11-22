import './index.scss'

import { Box, createTheme, ScopedCssBaseline, Theme, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

// 背景颜色
const theme: Theme = createTheme({
	palette: {
		background: {
			default: '#17192e',
		},
	},
})

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider theme={theme}>
			<ScopedCssBaseline enableColorScheme={true}>
				<Box
					sx={{
						maxWidth: '1920px',
						height: 'auto',
						mx: 'auto',
					}}
				>
					{children}
				</Box>
			</ScopedCssBaseline>
		</ThemeProvider>
	)
}
