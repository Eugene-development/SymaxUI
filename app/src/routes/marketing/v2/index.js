const title_Marketing_v2 = 'Вы производитель или поставщик товаров и услуг?';
const description_Marketing_v2 =
	'Если вы заинтересованы в продвижении ваших услуг или продукции в нашем регионе и гарантируете качество и конкурентную цену, то ждём от вас взимовыгодных предложений.';
const img_Marketing_v2 = 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV2/partner.jpeg';
const alt_Marketing_v2 = '';
const link_Marketing_v2 = '';

const contentMarketing_v2 = {
	title_Marketing_v2,
	description_Marketing_v2,
	img_Marketing_v2,
	alt_Marketing_v2,
	link_Marketing_v2
};

export const get = () => {
	return {
		body: {
			contentMarketing_v2
		}
	};
};
