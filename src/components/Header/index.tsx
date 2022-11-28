import './index.scss'

import {
	Box,
	Button,
	List,
	ListItem,
	ThemeProvider,
	Typography,
} from '@mui/material'

import email from '@/assets/images/email.png' // email
import logo from '@/assets/images/logo.webp' // logo
import { INavItems } from '@/types'
import { typographySubtitle1Theme as theme } from '@/utils/font' // 字体样式

// nav items 路由
const navItems: INavItems[] = [
	{
		id: 'index',
		label: '首页',
		link: '/',
	},
	{
		id: 'about',
		label: '关于飞鼠',
		link: '/about',
	},
	{
		id: 'userScenarios',
		label: '用户案例',
		link: '/userScenarios',
	},
	{
		id: 'contactus',
		label: '联系我们',
		link: '/contactus',
	},
]

export default function Header() {
	return (
		<Box
			component="header"
			sx={{
				maxWidth: '1920px',
				mx: 'auto',
			}}
		>
			{/* logo */}
			<Box className="nav-logo">
				<img
					alt="Logo"
					src={logo}
				/>
			</Box>

			<ThemeProvider theme={theme}>
				{/* nav */}
				<List
					className="nav-items"
					sx={{
						ml: '300px',
						columnCount: '4',
						whiteSpace: 'nowrap',
					}}
				>
					{navItems.map((item) => (
						<ListItem
							key={item.id}
							sx={{
								maxWidth: '64px',
								mx: 0,
								px: 0,
								fontWeight: 'bold',
								color: '#fff',
							}}
						>
							<Typography variant="subtitle1">{item.label}</Typography>
						</ListItem>
					))}
				</List>
			</ThemeProvider>
			{/* 分割线 */}
			<Box
				className="nav-separate"
				sx={{
					m: '0 30px',
					height: '19px',
					width: '1px',
					borderRight: '1px solid #fff',
				}}
			/>

			{/* 邮件组 */}
			<Box
				className="nav-email"
				sx={{ display: 'flex' }}
			>
				<Box
					alt="email"
					component="img"
					src={email}
					sx={{
						width: '24px',
						height: '24px',
					}}
				/>
				<Typography
					sx={{ ml: '15px', color: '#fff' }}
					variant="subtitle1"
				>
					xinghuan@xinghuankj.com
				</Typography>
			</Box>

			{/* 下载按钮 */}
			<Box
				sx={{
					width: '125px',
					height: '48px',
					ml: '25px',
					lineHeight: '48px',
					borderRadius: '10px',
					background: 'linear-gradient(to right,#1A1D35, #353C71)',
					textAlign: 'center',
					fontWeight: 'bold',
					'&:hover': {
						mb: '5px',
					},
				}}
			>
				<Button
					sx={{
						fontSize: '20px',
						color: '#fff',
					}}
				>
					免费下载
				</Button>
			</Box>
		</Box>
	)
}
