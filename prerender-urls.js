const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const [illustrations] = generateFileList(join(__dirname, 'content')).nodes;
module.exports = () => {
	const pages = [
		{
			url: '/',
			seo: {
				cover: '/assets/profile.jpg'
			}
		},
		{ url: '/contact/' },
		{ url: '/contact/success' }
	];

	// adding illustrations list posts page
	pages.push({
		url: '/illustrations/',
		data: illustrations
	});

	// adding all illustration pages
	pages.push(...illustrations.edges.map(illustration => {
		let data;
		if (illustration.format === 'md') {
			const { content } = parseMD(fs.readFileSync(join('content', 'illustration', illustration.id), 'utf-8'));
			data = content;
		} else {
			data = fs.readFileSync(join('content', 'illustration', illustration.id), 'utf-8').replace(/---(.*(\r)?\n)*---/, '');
		}
		return {
			url: `/illustration/${illustration.id}`,
			seo: illustration.details,
			data: {
				details: illustration.details,
				content: data
			}
		};
	}));

	return pages;
};
