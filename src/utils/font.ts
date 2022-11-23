import { createTheme, Theme } from '@mui/material'

// 多数文本样式
export const typographySubtitle1Theme: Theme = createTheme({
	typography: {
		subtitle1: {
			fontSize: 16,
			fontWeight: 'bold',
			lineHeight: '19px',
			color: '#fff',
			backgroundClip: 'text',
		},
	},
})

// 路由-标题
export const typographyTitleTheme: Theme = createTheme({
	typography: {
		subtitle2: {
			fontSize: 24,
			color: 'transparent',
			backgroundImage: 'linear-gradient(#7C87D2,#454B7B)',
			WebkitBackgroundClip: 'text',
		},
	},
})

// 留言-表单
export const textFieldPrimaryTheme: Theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#5560B6',
			light: '#000',
			dark: '#fff',
			contrastText: '#fff',
		},
	},
})
