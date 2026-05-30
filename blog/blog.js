const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'Rick Riordan explores Norse mythology in this adventurous story.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
			"A young farm boy becomes part of a prophecy involving gods and magic.",
		imgSrc:
			"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const blogList = document.querySelector("#blog-list");

let html = "";

articles.forEach(article => {
	html = html + `
		<section class="details">
			<p>${article.date}</p>
			<p>${article.ages}</p>
			<p>${article.genre}</p>
			<p class="stars" aria-label="${article.stars.length} star rating">
				${article.stars}
			</p>
		</section>

		<article class="review">
			<h2>${article.title}</h2>

			<img src="${article.imgSrc}" alt="${article.imgAlt}">

			<p>${article.description}</p>
		</article>
	`;
});


blogList.innerHTML = html;