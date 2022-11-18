import { Box, Button, Typography } from '@mui/material'

import frame from '@/assets/images/Frame.png' // 播放
import pc from '@/assets/images/Group 29.webp' // 播放
import Layout from '@/components/Layout'

import Header from './Header'

export default function Home() {
	return (
		<Layout>
			<Header />

			<Box component='main'>
				{/* 标题内容 */}
				<Box component='cite'>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontSize: '56px',
						}}
					>
						使用飞鼠，
						<Typography
							component='span'
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
				<Box>
					<Typography
						sx={{
							color: '#888CAB',
							lineHeight: '18.75px',
						}}
					>
						2015-2022，99.8%超高好评率。飞鼠帮您跨越重重阻拦，解锁全部海外APP和网站。无需注册，无需付费，下载即用，一键连接，永久免费。
					</Typography>
				</Box>

				{/* 下载按钮 */}
				<Box
					sx={{
						width: '125px',
						height: '48px',
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

				{/* 观看小视频 */}
				<Box>
					<img alt='frame' src={frame} />
					{/* <img alt="frame" component="img" src={frame} /> */}
				</Box>

				<Box
					sx={{
						width: '532px',
						height: '532px',
					}}
				>
					<Box
						alt='pc'
						component='img'
						src={pc}
						sx={{
							width: '100%',
							height: '100%',
						}}
					/>
				</Box>
			</Box>
		</Layout>
	)
}
