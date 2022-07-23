const info = 'Мы открыты'
const link = {
	value: 'Посетите наши офисы',
	path: 'contacts'
}

const H1 = `
<h1
class="mt-4  tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 text-4xl lg:text-4xl xl:text-5xl antialiased"
<span class="md:block">Шкафы купе и <br /> кухонные гарнитуры</span>
<span
class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-cyan-400 sm:pb-5"
>под заказ <br /> от производителей</span
>
</h1>
`


const contentMain_v1 = {
	info,
	link,
	H1
};

export const get = () => {
	return {
		body: {
			contentMain_v1
		}
	};
};
