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




const apiMail = import.meta.env.VITE_API_MAIL
const apiToken = import.meta.env.VITE_TOKEN

const header = 'Отправить запрос или коммерческое предложение:';

const contentForm_v2 = {
	apiMail,
	apiToken,
	header
};

const content_Contact_v1 = {
	contentForm_v2,
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
