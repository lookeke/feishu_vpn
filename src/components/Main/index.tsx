import './index.scss'

import { Box, Button, createTheme, Theme, ThemeProvider, Typography } from '@mui/material'

import frame from '@/assets/images/Frame.png'
import pc from '@/assets/images/Group 29.webp'
import pcBackground from '@/assets/images/pcBackage.webp'

// subtitle1样式
const theme: Theme = createTheme({
	typography: {
		fontFamily: ['Microsoft YaHei - Bold', 'Microsoft YaHei', 'sans-serif'].join(','),
		subtitle1: {
			fontSize: 16,
			fontWeight: 'bold',
			lineHeight: '19px',
			color: '#fff',
			'-webkit-background-clip': 'Typography',
		},
	},
})

export default function Main() {
	return (
		<Box
			component="main"
			sx={{
				mt: '224px',
			}}
		>
			<ThemeProvider theme={theme}>
				{/* 标题内容 */}
				<Box component="cite" sx={{ width: '618px', display: 'block' }}>
					<Typography
						sx={{
							width: '100%',
							fontWeight: 'bold',
							fontSize: '56px',
							fontStyle: 'normal',
							lineHeight: '65px',
						}}
						variant="subtitle1"
					>
						使用飞鼠，
						<Typography
							component="span"
							sx={{
								color: '#6D77BB',
								fontWeight: 'bold',
								fontSize: '56px',
							}}
						>
							安全
						</Typography>
						的探索全世界
					</Typography>
				</Box>

				{/* 介绍 */}
				<Box sx={{ mt: '30px', width: '723px' }}>
					<Typography
						sx={{
							color: '#888CAB',
							lineHeight: '18.75px',
						}}
						variant="subtitle1"
					>
						2015-2022，99.8%超高好评率。飞鼠帮您跨越重重阻拦，解锁全部海外APP和网站。无需注册，无需付费，下载即用，一键连接，永久免费。
					</Typography>
				</Box>

				<Box
					sx={{
						width: '360px',
						height: '64px',
						lineHeight: '64px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					{/* 下载按钮 */}
					<Box
						sx={{
							mt: '87px',
							width: '143px',
							height: '64px',
							lineHeight: '64px',
							borderRadius: '10px',
							background: 'linear-gradient(to right,#1A1D35, #353C71)',
							TypographyAlign: 'center',
							fontWeight: 'bold',
						}}
					>
						<Button
							sx={{
								fontSize: '20px',
								color: '#fff',
								ml: '26px',
							}}
						>
							免费下载
						</Button>
					</Box>

					{/* 观看小视频按钮 */}
					<Box sx={{ ml: '50px' }}>
						<img alt="frame" src={frame} />
						{/* <img alt="frame" component="img" src={frame} /> */}
					</Box>

					{/* 观看小视频文字 */}
					<Box sx={{ ml: '15px' }}>
						<Typography sx={{ fontSize: 20, width: '100px' }}>观看小视频</Typography>
					</Box>
				</Box>

				<Box
					className="main-pc"
					sx={{
						width: '532px',
						height: '532px',
					}}
				>
					<Box
						alt="pc"
						className="main-pc-img"
						component="img"
						src={pc}
						sx={{
							width: '100%',
							height: '100%',
						}}
					/>

					<Box
						alt="pcBackground"
						className="main-pc-bc"
						component="img"
						src={pcBackground}
						sx={{
							width: '438px',
							height: '438px',
						}}
					/>
				</Box>

				{/* 	关于飞鼠VPN */}
				<Box>
					<Typography>关于飞鼠VPN</Typography>
				</Box>
			</ThemeProvider>
		</Box>
	)
}
