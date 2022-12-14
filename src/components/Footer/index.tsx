import './index.scss'

import { Box, Divider, Grid, Stack, Typography } from '@mui/material'

import { InavItems } from '@/types'

// 快速导航-列表
const navItems: InavItems[] = [
	{ id: 0, label: '首页' },
	{ id: 1, label: '技术支持' },
	{ id: 2, label: '我们的服务' },
	{ id: 3, label: '案例展示' },
	{ id: 4, label: '商务合作' },
]
export default function Footer() {
	return (
		<Box component="footer">
			<Box>
				<Box className="footer-content">
					{/* 快速导航 */}
					<Box
						sx={{
							mt: '86px',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Microsoft YaHei-Regular',
								fontSize: 20,
							}}
						>
							快速导航
						</Typography>

						<Divider
							light={true}
							sx={{
								backgroundColor: '#fff',
								width: '27px',
								height: '2px',
								mt: '24px',
							}}
						/>

						{/* 快速导航-列表 */}
						<Box>
							<Grid
								container
								sx={{
									width: '320px',
								}}
							>
								{navItems.map((item) => (
									<Grid
										key={item.id}
										item
										sx={{
											fontSize: 12,
											mt: '50px',
										}}
										xs={4}
									>
										{item.label}
									</Grid>
								))}
							</Grid>
						</Box>
					</Box>

					{/* 关于 */}
					<Box
						sx={{
							mt: '86px',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Microsoft YaHei-Regular',
								fontSize: 20,
							}}
						>
							飞鼠VPN
						</Typography>

						<Divider
							light={true}
							sx={{
								backgroundColor: '#fff',
								width: '27px',
								height: '2px',
								mt: '24px',
							}}
						/>

						<Stack sx={{ mt: '50px', fontSize: 12 }}>
							<p>
								官网地址：中国上海市青浦区 徐泾镇华徐公路999号 E通世界北区B栋8楼
							</p>
							<p>
								代码仓库：https://github.com/xingkongwangbin/feishuwg/releases/tag/1.0
							</p>
							<p>
								镜像仓库：中国上海市青浦区 徐泾镇华徐公路999号 E通世界北区B栋8楼
							</p>

							<p style={{ marginTop: '40px' }}>邮编：10010</p>
							<p>传真：010-8542543</p>
						</Stack>
					</Box>
				</Box>
			</Box>

			{/* 底部分割线 */}
			<Divider
				light={true}
				sx={{
					mt: '100px',
					bgcolor: '#fff',
					width: '100vw',
				}}
			/>
			<Box
				sx={{
					mt: '20px',
					width: '100vw',
					mx: 'auto',
					textAlign: 'center',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Microsoft YaHei-Regular',
						fontSize: '8px',
						color: '#fff',
					}}
				>
					Copyright © 2015-2025 上海安能聚创供应链管理有限公司. All rights
					reserved. 沪ICP备16019765号-3
				</Typography>
			</Box>
		</Box>
	)
}
