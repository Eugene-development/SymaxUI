const overhead = 'TRANSACTIONS';
const header = 'What makes us different';
const text = `
            <div class="relative z-10">
                <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                    <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                    <ul role="list">
                        <li>Quis elit egestas venenatis mattis dignissim.</li>
                        <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                        <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                    </ul>
                    <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                    <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                    <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                    <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                    <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                    <h3>We’re here to help</h3>
                    <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>
                </div>
                <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                    <div class="rounded-md shadow">
                        <a href="#" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Contact sales </a>
                    </div>
                    <div class="rounded-md shadow ml-4">
                        <a href="#" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"> Learn more </a>
                    </div>
                </div>
            </div>
`;
const testimonials = [
	{
		text: 'Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.',
		avatar:
			'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
		alt: '',
		name: 'Judith Black'
	},
	{
		text: 'Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.',
		avatar:
			'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
		alt: '',
		name: 'Judith Black'
	},
	{
		text: 'Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.',
		avatar:
			'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
		alt: '',
		name: 'Judith Black'
	}
];

const contentArticle_v1 = {
	overhead,
	header,
	text,
	testimonials
};

export const get = () => {
	return {
		body: {
			contentArticle_v1
		}
	};
};
