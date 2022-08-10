const address = 'Тестовый адрес'
const phones = [
	{
		phone: '8 (495) 147-55-50',
		name: 'Менеджер'
	}
];
const emails = [
	{
		email: 'info@mysite.com'
	}
];

const content_Contact_v1 = {
	address,
	phones,
	emails
};

export const get = () => {
	return {
		body: {
			content_Contact_v1
		}
	};
};
