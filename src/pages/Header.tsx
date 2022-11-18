import DraftsIcon from '@mui/icons-material/Drafts'
import { Box, List, ListItem, Typography } from '@mui/material'

import type { INavItems } from '@/@types'
import logo from '@/assets/images/logo.webp'

// nav items 路由
const navItems: INavItems[] = [
	{ id: 0, label: '首页', link: '/' },
	{ id: 1, label: '关于飞鼠', link: '/about' },
	{ id: 2, label: '用户案例', link: '/userScenarios' },
	{ id: 3, label: '联系我们', link: '/contactus' },
]

export default function Header() {
	return (
		<Box
			component="header"
			sx={{
				mt: '19px',
				float: 'left',
			}}
		>
			<Box>
				<img alt="Logo" src={logo} />
			</Box>

			<List
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				{navItems.map((item) => (
					<ListItem
						key={item.id}
						sx={{
							fontWeight: 'bold',
						}}
					>
						{item.label}
					</ListItem>
				))}
			</List>

			<Box>|</Box>

			<Box>
				<DraftsIcon />
				<Typography>xinghuan@xinghuankj.com</Typography>
			</Box>

			<Box
				sx={{
					width: '125px',
					height: '48px',
					borderRadius: '10px',
					background: 'linear-gradient(to right,#1A1D35, #353C71)',
					textAlign: 'center',
					fontWeight: 'bold',
				}}
			>
				<Typography
					sx={{
						fontSize: '20px',
						color: '#fff',
						lineHeight: '48px',
					}}
				>
					免费下载
				</Typography>
			</Box>
		</Box>
	)
}
