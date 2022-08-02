const mainText = {
	titleCategory: 'Шкафы купе',
	descriptionCategory: 'Шкафы купе на заказ по доступным ценам'
};

const dataProduct = [
	{
		name: 'Дзержинск',
		text: 'mf;dv,,vlpew',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/3.jpg',
		alt: ''
	},
	{
		name: 'Дзержинск',
		text: 'mf;dv,,vlpew',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg',
		alt: ''
	},
	{
		name: 'Дзержинск',
		text: 'mf;dv,,vlpew',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/6.jpg',
		alt: ''
	},
	{
		name: 'Дзержинск',
		text: 'mf;dv,,vlpew',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg',
		alt: ''
	},
	{
		name: 'Дзержинск',
		text: 'mf;dv,,vlpew',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/9.JPG',
		alt: ''
	}
];

const content_Marketing_v3 = {
	mainText,
	dataProduct
};

export const get = () => {
	return {
		body: {
			content_Marketing_v3
		}
	};
};
