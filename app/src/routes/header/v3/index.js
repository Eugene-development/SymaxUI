const title = 'Шкафы в Москве и области';
const description = 'Шкафы в Москве под ваши размеры. Дизайн проект в подарок.';
const pathImg =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const content_Header_v3 = {
	title,
	description,
	pathImg
};

export const get = () => {
	return {
		body: {
			content_Header_v3
		}
	};
};
