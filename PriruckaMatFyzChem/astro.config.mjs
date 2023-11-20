import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Příručka MatFyzChem',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Matematika',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Logaritmy',
							autogenerate: {directory: 'matematika/logaritmy'},
						}
						/*{ label: 'Exponencionální rovnice', link: '/matematika/exponencionalnirovnice/' },
						{ label: 'Logaritmy', link: '/matematika/logaritmy/' },*/
					],
				},
				{
					label: 'Fyzika',
					items: [
						{
							label: 'Newtonovy Zákony',
							autogenerate: { directory: 'fyzika/newtonovyzakony' },
						},
						{
							label: 'Keplerovy Zákony',
							autogenerate: { directory: 'fyzika/keplerovyzakon' },
						},
					],
				},
			],
		}),
	],
});
