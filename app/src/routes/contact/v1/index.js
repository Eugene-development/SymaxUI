const phones = [
	{
		phone: '8 (495) 147-55-50',
		name: 'Менеджер'
	}
];
const emails = [
	{
		email: 'info@mos-mebel.org'
	}
];

const content_Contact_v1 = {
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
