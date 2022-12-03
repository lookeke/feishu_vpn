import './index.scss'
import 'swiper/css'
import 'swiper/css/navigation'

import {
	Box,
	Button,
	Divider,
	List,
	ListItem,
	ThemeProvider,
	Typography,
} from '@mui/material'
import Swiper, { Navigation } from 'swiper'

// 精选案例-案例1项图片
import case1ItemsImages1 from '@/assets/images/case1-items-images-1.webp'
import case1ItemsImages2 from '@/assets/images/case1-items-images-2.webp'
import case1ItemsImages3 from '@/assets/images/case1-items-images-3.webp'
import case1Title from '@/assets/images/case1-title.webp'
// 精选案例-案例2项图片
import case2ItemsImages3 from '@/assets/images/case2-items-images-3.webp'
import case2Title from '@/assets/images/case2-title.webp'
import case3Title from '@/assets/images/case3-title.webp'
import encryption from '@/assets/images/encryption.webp'
import flow from '@/assets/images/flow.webp'
import frame from '@/assets/images/Frame.png'
import globalServer from '@/assets/images/globalServer.webp'
import pc from '@/assets/images/Group 29.webp'
import left from '@/assets/images/left.webp'
import management from '@/assets/images/management.webp'
import pcBackground from '@/assets/images/pcBackage.webp'
import right from '@/assets/images/right.webp'
import cooperativePartner1 from '@/assets/images/sealos-left 1.webp'
import cooperativePartner2 from '@/assets/images/sealos-left 2.webp'
import cooperativePartner3 from '@/assets/images/sealos-left 3.webp'
import storeImg from '@/assets/images/store.webp'
import { IcaseList, ICooperativePartner, IintroduceList } from '@/types'
import {
	typographySubtitle1Theme as theme,
	typographyTitleTheme as title,
} from '@/utils/font'

let swiper = new Swiper('.swiper', {
	modules: [Navigation],
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

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
		icon: management,
		title: '快捷管理',
		label: '方便快捷web创建用户，可视化查看用户在线状态',
	},
	{
		id: 2,
		icon: encryption,
		title: '加密传输',
		label: '通过对传递数据的多重加密，没有任何人可以获取你们公司内部信息。',
	},
	{
		id: 3,
		icon: flow,
		title: '高速流量',
		label: '速度飞鼠安全接入网关，最快可以千兆，网络延迟最低0.4',
	},
]

// 合作伙伴列表
const cooperativePartner: ICooperativePartner[] = [
	{ id: 0, img: cooperativePartner1, alt: '伙伴介绍' },
	{ id: 1, img: cooperativePartner2, alt: '伙伴介绍' },
	{ id: 2, img: cooperativePartner3, alt: '伙伴介绍' },
]

// 案例列表
const caseList: IcaseList[] = [
	{
		id: 0,
		label:
			'员工可在外网环境流畅访问企业内网资料，灵活异地上传下载资料，随时随地远程连接自己的异地主机桌面，畅想本地化绿色办公',
		title: '企业管理远程办公',
		alt: '图片描述',
		uri: case1Title,
		imageList: [
			{
				uri: case1ItemsImages1,
				id: 'img1',
				alt: 'img2',
				label: '数据安全传输、跨网络稳定连接',
			},
			{
				uri: case1ItemsImages2,
				id: 'img2',
				alt: 'img2',
				label: '关键设备状态告警',
			},
			{
				uri: case1ItemsImages3,
				id: 'img3',
				alt: 'img2',
				label: '规范化科学化的企业远程办公体系',
			},
		],
	},
	{
		id: 1,
		label:
			'随时随地访问家庭网络环境，享受优质数据传输服务，重要资料即时上传远端内网，防止数据意外丢失 ',
		title: '家庭娱乐，资料备份',
		alt: '图片描述',
		uri: case2Title,
		imageList: [
			{
				uri: case1ItemsImages1,
				id: 'img1',
				alt: 'img2',
				label: '数据安全传输、跨网络稳定连接',
			},
			{
				uri: case1ItemsImages2,
				id: 'img2',
				alt: 'img2',
				label: '关键设备状态告警',
			},
			{
				uri: case2ItemsImages3,
				id: 'img3',
				alt: 'img2',
				label: '规范化科学化的企业远程办公体系',
			},
		],
	},
	{
		id: 2,
		label:
			'业务上云之后，需要实现与本地私有云、本地数据中心进行组网，实现数据互通互联。',
		title: '数据安全传输、跨网络稳定连接',
		alt: '图片描述',
		uri: case3Title,
		imageList: [
			{
				uri: case1ItemsImages1,
				id: 'img1',
				alt: 'img2',
				label: '数据安全传输、跨网络稳定连接',
			},
			{
				uri: case1ItemsImages2,
				id: 'img2',
				alt: 'img2',
				label: '关键设备状态告警',
			},
			{
				uri: case1ItemsImages3,
				id: 'img3',
				alt: 'img2',
				label: '规范化科学化的企业远程办公体系',
			},
		],
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
							'&:hover': {
								mb: '5px',
							},
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
							'&:hover': {
								mb: '5px',
							},
						}}
					>
						<Box
							alt="frame"
							component="img"
							src={frame}
							sx={{ ml: '50px' }}
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
							width: '520px',
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
					<Box className="swiper">
						<Box
							alt="left"
							className="swiper-button-prev"
							component="img"
							src={left}
						/>
						<Box
							alt="right"
							className="swiper-button-next"
							component="img"
							src={right}
						/>

						<List
							className="swiper-wrapper"
							sx={{
								mt: '88px',
							}}
						>
							{/* 案例-列表-子项 */}
							{caseList.map((item) => (
								<ListItem
									key={item.id}
									className="swiper-slide"
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
												justifyContent: 'flex-start',
												flexDirection: 'column',
												color: '#fff',
											}}
										>
											{/* 案例-列表-子项-标题 */}
											<Box>
												<Typography sx={{ mt: '43px', fontSize: 26 }}>
													{item.title}
												</Typography>
											</Box>
											{/* 案例-列表-子项-文字介绍 */}
											<Box
												sx={{
													mt: '15px',
													maxWidth: '600px',
													lineHeight: '25px',
												}}
											>
												<Typography>{item.label}</Typography>
											</Box>
										</Box>
									</Box>

									{/* 案例-列表-子项-图片列表 */}
									<Box
										sx={{
											mt: '65px',
											columnCount: 3,
										}}
									>
										{item.imageList.map((img) => (
											<Box
												key={img.id}
												className="main-case-items-box"
											>
												<Box
													alt={img.alt}
													className="main-case-items-images"
													component="img"
													src={img.uri}
												/>
												<Typography>{img.label}</Typography>
											</Box>
										))}
									</Box>
								</ListItem>
							))}
						</List>
					</Box>
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
			</ThemeProvider>
		</Box>
	)
}
