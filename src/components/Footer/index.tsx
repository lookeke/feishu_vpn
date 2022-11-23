import './index.scss'

import { Box, Divider, Typography } from '@mui/material'

export default function Footer() {
	return (
		<Box component="footer">
			{/* 快速导航 */}
			<Box>
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
						bcolor: '#fff',
						width: '27px',
					}}
				/>
			</Box>
		</Box>
	)
}
