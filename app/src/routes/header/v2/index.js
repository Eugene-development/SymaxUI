const logo = 'https://storage.yandexcloud.net/brand-logo/mos-mebel/5.png';
const menu = [
	{
		value: 'Меню-1',
		path: '#'
	},
	{
		value: 'Меню-2',
		path: '#'
	},
	{
		value: 'Меню-3',
		path: '#'
	},
	{
		value: 'Меню-4',
		path: '#'
	},
	{
		value: 'Меню-5',
		path: '#'
	}
];

const company = 'Ромашка'

const content_Header_v2 = {
	menu,
	logo,
	company
};

export const get = () => {
	return {
		body: {
			content_Header_v2
		}
	};
};
