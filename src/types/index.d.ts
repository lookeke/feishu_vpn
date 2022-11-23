// nav列表
export type INavItems = {
	id: string
	label: string
	link: string
}

// 介绍-列表
export type IintroduceList = {
	id: number | string
	icon: string
	title: string
	label: string
}

// 合作伙伴列表
export type ICooperativePartner = {
	id: number | string
	img: string
	alt: string
}

export type IcaseList = {
	id: number | string
	label: string
	title: string
	alt: string
	uri: string
	imageList: {
		uri: string
		id: string
		alt: string
	}[]
}
