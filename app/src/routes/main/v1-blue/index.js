const info = 'Мы открыты';
const link = {
	value: 'Посетите наши офисы',
	path: 'contacts'
};

const H1 = `
<h1 class="mt-4 tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 text-4xl lg:text-4xl xl:text-5xl antialiased">
<span class="md:block text-sky-900">Шкафы купе и <br /> кухонные гарнитуры</span>
<span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-600 sm:pb-5">под заказ <br /> от производителей</span>
</h1>
`;

const text_1 =
	'Шкафы купе по низким ценам и с разными вариантами установки дверей. Вы можете заказать у нас как шкаф эконом сегмента так и премиальный вариант. Также вы можете приобрести только внутреннее наполнение или сами двери купе.';
const text_2 =
	'Если вы хотите приобрести кухонный гарнитур недорого и с высоким качеством, то предлагаем сделать это у нас. Мы предоставим оптимальное соотношение качества и цены на кухонные гарнитуры вне зависимости от ценовой категории.';




const apiMail = import.meta.env.VITE_API_MAIL
const apiToken = import.meta.env.VITE_TOKEN

const header = 'Экспресс заявка на замер';
const subheader = 'Это бесплатно'
const nameForm = 'Введите имя'
const phoneForm = 'Ваш телефон'
const addressForm = 'Ваш адрес'
const timeForm = 'Удобное время'
const emailForm = 'Ваша почта'
const variantForm = 'Нужный вариант'
const volumeForm = 'Необходимый объём'
const comment = 'После отправки заявки с вами свяжется менеджер для уточнения нюансов'


const contentForm_v1 = {
	apiMail,
	apiToken,
	header,
	subheader,
	nameForm,
	phoneForm,
	addressForm,
	timeForm,
	emailForm,
	variantForm,
	volumeForm,
	comment
};

const contentMain_v1 = {
	contentForm_v1,
	info,
	link,
	H1,
	text_1,
	text_2
};

export const get = () => {
	return {
		body: {
			contentMain_v1
		}
	};
};
