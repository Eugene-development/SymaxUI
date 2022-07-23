const title = 'Вы производитель или поставщик товаров и услуг?';
const description =
	'Если вы заинтересованы в продвижении ваших услуг или продукции в нашем регионе и гарантируете качество и конкурентную цену, то ждём от вас взимовыгодных предложений.';
const img = 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV2/partner.jpeg';
const alt = '';
const link = '';

const contentMarketing_v2 = {
	title,
	description,
	img,
	alt,
	link
};

export const get = () => {
	return {
		body: {
			contentMarketing_v2
		}
	};
};
