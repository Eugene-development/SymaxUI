const content_Swiper_v2 = [
	{
		title_Marketing_v2: 'Example1',
		description_Marketing_v2:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		img_Marketing_v2:
			'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/a12adc654dac54907a50bc61812e8093.jpg',
		alt_Marketing_v2: '',
		link_Marketing_v2: ''
	},
	{
		title_Marketing_v2: 'Example2',
		description_Marketing_v2:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		img_Marketing_v2:
			'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B4%D0%BE%D1%81%D0%BA%D0%B0.jpg',
		alt_Marketing_v2: '',
		link_Marketing_v2: ''
	},
	{
		title_Marketing_v2: 'Example3',
		description_Marketing_v2:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		img_Marketing_v2:
			'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/8.jpeg',
		alt_Marketing_v2: '',
		link_Marketing_v2: ''
	},
]

export const get = () => {
	return {
		body: {
			content_Swiper_v2
		}
	};
};
