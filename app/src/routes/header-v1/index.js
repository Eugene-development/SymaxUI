const phone = '+7 (495) 147-55-50';
const email = 'info@mos-mebel.org';

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

const content_Header_v1 = {
	menu,
	phone,
	email,
};

export const get = () => {
	return {
		body: {
			content_Header_v1
		}
	};
};
