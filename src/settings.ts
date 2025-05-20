export const profile = {
	fullName: 'Mónica Perdomo Santana',
	title: 'QA Tester',
	institute: 'Solara Codeworks',
	author_name: 'Author', // Author name to be highlighted in the papers section
	research_areas: [
		 { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'moni320097@gmail.com',
	linkedin: 'https://www.linkedin.com/in/m%C3%B3nica-perdomo-santana-0449b0366/',
	x: '',
	github: 'https://github.com/MonicaPerdomoSantana',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/mps-portfolio' // Repository name starting with /
}

export const seo = {
	default_title: 'Mónica Perdomo Santana',
	default_description: 'Mónica Perdomo Santana - Portfolio',
	default_image: '/images/monica-pic.png',
}
