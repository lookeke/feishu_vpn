import './index.scss'

import { Box, Button, List, ListItem, Typography } from '@mui/material'

import email from '@/assets/images/email.png' // email
import logo from '@/assets/images/logo.webp' // logo
import { INavItems } from '@/types'

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
				<img alt="Logo" src={logo} />
			</Box>

			{/* nav */}
			<List
				className="nav-items"
				sx={{
					display: 'flex',
					ml: '360px',
					justifyContent: 'space-between',
				}}
			>
				{navItems.map((item) => (
					<ListItem
						key={item.id}
						sx={{
							width: 'auto',
							fontWeight: 'bold',
							color: '#fff',
						}}
					>
						<Typography variant="subtitle1">{item.label}</Typography>
					</ListItem>
				))}
			</List>

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
			<Box className="nav-email" sx={{ display: 'flex' }}>
				<Box
					alt="email"
					component="img"
					src={email}
					sx={{
						width: '24px',
						height: '24px',
					}}
				/>
				<Typography sx={{ ml: '15px', color: '#fff' }} variant="subtitle1">
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