import './index.scss'

import {
	Box,
	Button,
	Divider,
	Grid,
	Input,
	List,
	ListItem,
	Stack,
	TextField,
	ThemeProvider,
	Typography,
} from '@mui/material'

import cooperativePartner1 from '@/assets/images/cooperativePartner1.webp'
import email from '@/assets/images/email.webp'
import frame from '@/assets/images/Frame.png'
import globalServer from '@/assets/images/globalServer.webp'
import pc from '@/assets/images/Group 29.webp'
import imageItem1 from '@/assets/images/imageItem1.webp'
import item1 from '@/assets/images/item1.webp'
import pcBackground from '@/assets/images/pcBackage.webp'
import storeImg from '@/assets/images/store.webp'
import tell from '@/assets/images/tell.webp'
import FormLabelText from '@/components/FormLabelText'
import {
	IcaseList,
	IcompanyProfile,
	ICooperativePartner,
	IintroduceList,
} from '@/types'
import {
	textFieldPrimaryTheme as input,
	typographySubtitle1Theme as theme,
	typographyTitleTheme as title,
} from '@/utils/font'

// 介绍-列表
const introduceList: IintroduceList[] = [
	{
		id: 0,
		icon: storeImg,
		title: '无限制使用',
		label: '永久免费使用飞鼠，无须注册，下载即可使用，而且永久免费',
	},
	{
		id: 1,
		icon: storeImg,
		title: '无限制使用',
		label: '永久免费使用飞鼠，无须注册，下载即可使用，而且永久免费',
	},
	{
		id: 2,
		icon: storeImg,
		title: '无限制使用',
		label: '永久免费使用飞鼠，无须注册，下载即可使用，而且永久免费',
	},
	{
		id: 3,
		icon: storeImg,
		title: '无限制使用',
		label: '永久免费使用飞鼠，无须注册，下载即可使用，而且永久免费',
	},
]

// 合作伙伴列表
const cooperativePartner: ICooperativePartner[] = [
	{ id: 0, img: cooperativePartner1, alt: '伙伴介绍' },
	{ id: 1, img: cooperativePartner1, alt: '伙伴介绍' },
	{ id: 2, img: cooperativePartner1, alt: '伙伴介绍' },
	{ id: 3, img: cooperativePartner1, alt: '伙伴介绍' },
]

// 案例列表
const caseList: IcaseList[] = [
	{
		id: 0,
		label:
			'依靠创新型商业模式推动，我们持续从客户需求出发，创新推出“MiNi电商系列”、“精准零担快运”、“定时达”、“安心达”、“普惠达”等行业优势产品。安能以大数据、云计算等科技手段为基础，自主研发48套IT系统推动科技创新和运营结合，精细化管理实现了运营的全链路数字化。 安能的发展得到社会各届的广泛认可，先后获得国内外顶尖资本的数十亿人民币注资。2018年，安能被交通运输部授予“中国运输领袖品牌”荣誉称号，2020年安能物流获21世纪最佳商业模式奖。',
		title: '标题一',
		alt: '图片描述',
		uri: item1,
		imageList: [
			{
				uri: imageItem1,
				id: 'img1',
				alt: 'img2',
			},
			{
				uri: imageItem1,
				id: 'img2',
				alt: 'img2',
			},
			{
				uri: imageItem1,
				id: 'img3',
				alt: 'img2',
			},
		],
	},
	//	{
	//		id: 1,
	//		label:
	//			'依靠创新型商业模式推动，我们持续从客户需求出发，创新推出“MiNi电商系列”、“精准零担快运”、“定时达”、“安心达”、“普惠达”等行业优势产品。安能以大数据、云计算等科技手段为基础，自主研发48套IT系统推动科技创新和运营结合，精细化管理实现了运营的全链路数字化。
	// 安能的发展得到社会各届的广泛认可，先后获得国内外顶尖资本的数十亿人民币注资。2018年，安能被交通运输部授予“中国运输领袖品牌”荣誉称号，2020年安能物流获21世纪最佳商业模式奖。', title: '标题二', alt: '图片描述',
	// uri: item1, }, { id: 2, label:
	// '依靠创新型商业模式推动，我们持续从客户需求出发，创新推出“MiNi电商系列”、“精准零担快运”、“定时达”、“安心达”、“普惠达”等行业优势产品。安能以大数据、云计算等科技手段为基础，自主研发48套IT系统推动科技创新和运营结合，精细化管理实现了运营的全链路数字化。
	// 安能的发展得到社会各届的广泛认可，先后获得国内外顶尖资本的数十亿人民币注资。2018年，安能被交通运输部授予“中国运输领袖品牌”荣誉称号，2020年安能物流获21世纪最佳商业模式奖。', title: '标题三', alt: '图片描述',
	// uri: item1, }, { id: 3, label:
	// '依靠创新型商业模式推动，我们持续从客户需求出发，创新推出“MiNi电商系列”、“精准零担快运”、“定时达”、“安心达”、“普惠达”等行业优势产品。安能以大数据、云计算等科技手段为基础，自主研发48套IT系统推动科技创新和运营结合，精细化管理实现了运营的全链路数字化。
	// 安能的发展得到社会各届的广泛认可，先后获得国内外顶尖资本的数十亿人民币注资。2018年，安能被交通运输部授予“中国运输领袖品牌”荣誉称号，2020年安能物流获21世纪最佳商业模式奖。', title: '标题四', alt: '图片描述',
	// uri: item1, },
]

// 联系方式列表
const companyProfile: IcompanyProfile[] = [
	{
		id: 0,
		label: '电话',
		icon: tell,
		text: '0371-66464887',
		btnText: '拨打电话',
	},
	{
		id: 1,
		label: '邮箱',
		icon: email,
		text: '15879649451@126.com',
		btnText: '发送邮件',
	},
]

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
				<Box
					component="cite"
					sx={{ width: '618px', display: 'block' }}
				>
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
						mt: '87px',
						width: '360px',
						height: '64px',
						lineHeight: '64px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					{/* 下载按钮 */}
					<Box
						sx={{
							width: '143px',
							height: '64px',
							p: 0,
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
								width: '143px',
								height: '64px',
								textAlign: 'center',
								lineHeight: '64px',
							}}
						>
							免费下载
						</Button>
					</Box>

					{/* 观看小视频按钮 */}
					<Box
						sx={{
							mt: '12px',
							height: '64px',
							lineHeight: '64px',
						}}
					>
						<Box
							sx={{ ml: '50px' }}
							component="img"
							alt="frame"
							src={frame}
						/>
					</Box>

					{/* 观看小视频文字 */}
					<Box sx={{ ml: '15px', height: '64px' }}>
						<Typography
							sx={{
								fontSize: 20,
								width: '130px',
								color: '#fff',
								height: '64px',
								lineHeight: '64px',
								fontFamily: 'Microsoft YaHei-Bold',
								fontWeight: 'bold',
							}}
						>
							观看小视频
						</Typography>
					</Box>
				</Box>

				{/* pc图层组 */}
				<Box
					className="main-pc"
					sx={{
						width: '532px',
						height: '532px',
					}}
				>
					{/* pc图 */}
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

					{/* 圆圈背景 */}
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

				{/* 	关于VPN-标题 */}
				<Box
					className="main-about"
					component="section"
				>
					<Box>
						<ThemeProvider theme={title}>
							<Typography variant="subtitle2">关于VPN</Typography>
						</ThemeProvider>
						{/* 关于VPN-文本 */}
						<Typography
							sx={{
								fontSize: 36,
								color: '#fff',
								mt: '24px',
								mx: 'auto',
							}}
							variant="subtitle1"
						>
							为什么要使用飞鼠VPN？
						</Typography>
					</Box>

					{/* 关于VPN-介绍-列表 */}
					<List
						sx={{
							mt: '60px',
							display: 'flex',
							justifyContent: 'space-between',
							p: 0,
						}}
					>
						{/* 关于VPN-介绍-列表-子项 */}
						{introduceList.map((item) => (
							<ListItem key={item.id}>
								<Box
									component="article"
									sx={{
										position: 'relative',
										width: '288px',
										height: '288px',
										borderRadius: '16px',
										backgroundImage:
											'linear-gradient(135deg,#2A2F52 0%,#1D2039 100%)',
										borderImage:
											'linear-gradient(135deg, rgba(25, 27, 49, 1), rgba(57, 64, 114, 1)) 1 1',
									}}
								>
									{/* 关于VPN-存储图层 */}
									<Box
										sx={{
											position: 'relative',
											left: '40px',
											top: '40px',
											backgroundImage: 'linear-gradient(#282C4D,#333965)',
											borderRadius: '50%',
											width: '58px',
											height: '58px',
										}}
									>
										<Box
											alt="store"
											component="img"
											src={item.icon}
											sx={{
												position: 'absolute',
												top: '50%',
												left: ' 50%',
												transform: 'translate(-50%, -50%)',
											}}
										/>
									</Box>

									{/* 关于VPN-子项-标题 */}
									<Box component="figure">
										<Typography
											sx={{
												position: 'absolute',
												left: '40px',
												top: '114px',
												fontSize: '24px',
												lineHeight: '28px',
												color: '#fff',
											}}
											variant="subtitle1"
										>
											{item.title}
										</Typography>
										<Box
											component="figcaption"
											sx={{
												maxWidth: '224px',
												position: 'absolute',
												left: '40px',
												top: '158px',
											}}
										>
											{/* 关于VPN-子项-文本 */}
											<Typography
												sx={{
													textAlign: 'left',
													fontFamily: 'Microsoft YaHei-Regular',
													color: '#fff',
												}}
											>
												{item.label}
											</Typography>
										</Box>
									</Box>
								</Box>
							</ListItem>
						))}
					</List>
				</Box>

				{/* 合作伙伴 */}
				<Box
					className="main-cooperativePartner"
					component="section"
				>
					{/* 合作伙伴-文本 */}
					<Typography sx={{ fontSize: 24, color: '#fff', py: '12px' }}>
						我们有与这些伙伴有合作
					</Typography>
					{/* 合作伙伴-列表 */}
					<List
						sx={{
							display: 'inline-flex',
							justifyContent: 'space-between',
							width: '800px',
						}}
					>
						{/* 合作伙伴-列表-子项 */}
						{cooperativePartner.map((item) => (
							<ListItem
								key={item.id}
								sx={{ width: '152px', height: '56px' }}
							>
								{/* 合作伙伴-列表-图片 */}
								<Box
									alt={item.alt}
									component="img"
									src={item.img}
									sx={{
										width: '100%',
										height: '100% ',
									}}
								/>
							</ListItem>
						))}
					</List>
				</Box>

				{/* VPN-图示 */}
				<Box
					className="main-graphicalRepresentation"
					component="article"
				>
					{/* VPN-图示-图片 */}
					<Box
						alt="globalServer"
						component="img"
						src={globalServer}
					/>
					{/* VPN-图示-介绍 */}
					<Box
						sx={{
							ml: '33px',
						}}
					>
						<Typography
							sx={{
								fontSize: 36,
								color: '#fff',
								maxWidth: '560px',
							}}
						>
							提供自己的 DNS 系统的全球最佳 VPN 服务
						</Typography>

						<Typography
							sx={{
								mt: '27px',
								fontSize: 14,
								color: '#fff',
								fontFamily: 'Microsoft YaHei-Regular',
								lineHeight: '25px',
							}}
						>
							依靠创新型商业模式推动，我们持续从客户需求出发，创新推出“MiNi电商系列”、“精准零担快运”、“定时达”、“安心达”、“普惠达”等行业优势产品。安能以大数据、云计算等科技手段为基础，自主研发48套IT系统推动科技创新和运营结合，精细化管理实现了运营的全链路数字化。
						</Typography>
					</Box>
				</Box>

				{/* 案例 */}
				<Box
					component="section"
					sx={{
						mt: '50px',
						height: 'auto',
					}}
				>
					{/* 案例-标题 */}
					<Box className="main-case">
						<ThemeProvider theme={title}>
							<Typography variant="subtitle2">案例</Typography>
						</ThemeProvider>
						{/* 案例-标题-精选 */}
						<Typography
							sx={{
								mt: '24px',
								color: '#fff',
								fontSize: '36px',
							}}
						>
							精选案例
						</Typography>
					</Box>

					{/* 案例-列表 */}
					<List
						sx={{
							mt: '88px',
						}}
					>
						{/* 案例-列表-子项 */}
						{caseList.map((item) => (
							<ListItem
								key={item.id}
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									flexDirection: 'column',
								}}
							>
								{/* 案例-列表-子项-图文组 */}
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									{/* 案例-列表-子项-描述图片 */}
									<Box
										sx={{
											ml: '50px',
											width: '200px',
											height: '200px',
										}}
									>
										<Box
											alt={item.alt}
											component="img"
											src={item.uri}
											sx={{
												width: '100%',
												height: '100%',
												borderRadius: '16px',
											}}
										/>
									</Box>
									{/* 案例-列表-子项-文字组 */}
									<Box
										sx={{
											ml: '70px',
											height: '200px',
											display: 'flex',
											justifyContent: 'space-between',
											flexDirection: 'column',
											color: '#fff',
										}}
									>
										{/* 案例-列表-子项-标题 */}
										<Box>
											<Typography sx={{ fontSize: 26 }}>
												{item.title}
											</Typography>
										</Box>
										{/* 案例-列表-子项-文字介绍 */}
										<Box
											sx={{
												mt: '15px',
												maxWidth: '740px',
												lineHeight: '25px',
											}}
										>
											<Typography>{item.label}</Typography>
										</Box>
									</Box>
								</Box>

								<Box
									sx={{
										mt: '65px',
									}}
								>
									{/* 案例-列表-子项-图片列表 */}
									{item.imageList.map((img) => (
										<Box
											key={img.id}
											alt={img.alt}
											className="main-case-items-images"
											component="img"
											src={img.uri}
											sx={{
												borderRadius: '16px',
											}}
										/>
									))}
								</Box>
							</ListItem>
						))}
					</List>
				</Box>

				{/* 分隔线 */}
				<Divider
					flexItem={true}
					light={true}
					sx={{
						mt: '158px',
						borderColor: '#ccc',
						width: '1200px',
					}}
				/>

				{/* 联系 */}
				<Box
					sx={{
						mt: '140px',
						display: 'flex',
					}}
				>
					<Box
						sx={{
							color: '#fff',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Microsoft YaHei-Regular',
								fontSize: 25,
							}}
						>
							联系方式
						</Typography>
						<Typography
							sx={{
								mt: '5px',
								fontFamily: 'Microsoft YaHei-Regular',
								fontSize: 14,
								lineHeight: '16px',
								letterSpacing: '3px',
							}}
						>
							company profile
						</Typography>

						<Stack>
							{/* 联系方式-电话组- */}
							{companyProfile.map((item) => (
								<ListItem
									key={item.id}
									sx={{
										mt: '50px',
										display: 'flex',
										justifyContent: 'space-between',
										flexDirection: 'column',
										alignItems: 'flex-start',
									}}
								>
									{/* 联系方式-图标 */}
									<Box sx={{ width: '150px' }}>
										<Box
											alt="tell"
											component="img"
											src={item.icon}
											sx={{
												ml: '-20px',
												width: '13px',
												height: '13px',
											}}
										/>
										{/* 联系方式-文本 */}
										<Typography
											sx={{
												display: ' inline-block',
												ml: '6px',
											}}
										>
											{item.label}
										</Typography>
									</Box>

									{/* 联系方式-文本 */}
									<Typography
										sx={{
											width: '150px',
										}}
									>
										{item.text}
									</Typography>

									{/* 联系方式-按钮 */}
									<Box
										sx={{
											mt: '14px',
										}}
									>
										<button
											style={{
												width: '100px',
												height: '32px',
												border: '1px solid #5560B6',
												backgroundImage:
													'linear-gradient(135deg, #1A1D35 0%, #353C71 100%)',
											}}
										>
											<Typography
												sx={{
													width: '100px',
													height: '32px',
													fontFamily:
														'Microsoft YaHei-Regular, Microsoft YaHei',
													fontSize: 14,
													color: '#fff',
													lineHeight: '32px',
												}}
											>
												{item.btnText}
											</Typography>
										</button>
									</Box>
								</ListItem>
							))}
						</Stack>
					</Box>

					{/* 分割线 */}
					<Divider
						light={true}
						orientation="vertical"
						sx={{ borderColor: '#fff', height: '400px', ml: '344px' }}
					/>

					{/* 留言 */}
					<Box
						sx={{
							ml: '100px',
						}}
					>
						<Box
							sx={{
								color: '#fff',
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Microsoft YaHei-Regular',
									fontSize: 25,
								}}
							>
								留言
							</Typography>
							<Typography
								sx={{
									mt: '5px',
									fontFamily: 'Microsoft YaHei-Regular',
									fontSize: 14,
									lineHeight: '16px',
									letterSpacing: '3px',
								}}
							>
								company
							</Typography>
						</Box>

						{/* 留言-表单 */}
						<ThemeProvider theme={input}>
							<Box component="form">
								<Grid
									container
									sx={{
										mt: '65px',
										width: '750px',
									}}
								>
									<Grid xs={6}>
										<FormLabelText label="姓名" />
									</Grid>

									<Grid xs={6}>
										<FormLabelText label="电话" />
									</Grid>

									<Grid
										sx={{ mt: '37px' }}
										xs={6}
									>
										<FormLabelText label="地址" />
									</Grid>

									<Grid
										sx={{ mt: '37px' }}
										xs={6}
									>
										<FormLabelText label="地址" />
									</Grid>

									<Grid xs={12}>
										<TextField
											color="primary"
											fullWidth={true}
											id="standard-basic"
											label="留言内容"
											sx={{
												mt: '37px',
												width: '660px',
												pt: '15px',
											}}
											variant="standard"
										/>
									</Grid>

									{/* 提交按钮组合 */}
									<Grid xs={12}>
										<Box
											sx={{
												width: '660px',
												display: 'flex',
												justifyContent: 'space-between',
											}}
										>
											<Button
												sx={{
													mt: '50px',
													width: '284px',
													height: '36px',
													lineHeight: '36px',
													color: '#fff',
													fontFamily: 'Microsoft YaHei-Regular',
													border: '1px solid #E1E1E1',
													backgroundImage:
														'linear-gradient(to right,#1A1D35, #353C71)',
												}}
											>
												提交留言
											</Button>

											<Input
												sx={{
													display: 'inline-block',
													ml: '32px',
													mt: '50px',
													width: '284px',
													height: '36px',
													lineHeight: '36px',
													color: '#fff',
													fontFamily: 'Microsoft YaHei-Regular',
													border: '1px solid #E1E1E1',
													p: 0,
													backgroundImage:
														'linear-gradient(to right,#1A1D35, #353C71)',
												}}
												type="reset"
												value="重置留言"
											/>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</ThemeProvider>
					</Box>
				</Box>
			</ThemeProvider>
		</Box>
	)
}
