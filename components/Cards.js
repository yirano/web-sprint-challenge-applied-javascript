// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from "axios"

axios
	.get("https://lambda-times-api.herokuapp.com/articles")
	.then((res) => {
		const { bootstrap, javascript, jquery, node, technology } = res.data.articles
		const container = []
		container.push(bootstrap, javascript, jquery, node, technology)
		const flatten_array = container.flat()
		console.log(flatten_array)

		bootstrap.map((b) => {
			document.querySelector(".cards-container").append(cards(b))
		})

		javascript.map((j) => {
			document.querySelector(".cards-container").append(cards(j))
		})

		jquery.map((jq) => {
			document.querySelector(".cards-container").append(cards(jq))
		})

		node.map((n) => {
			document.querySelector(".cards-container").append(cards(n))
		})

		technology.map((t) => {
			document.querySelector(".cards-container").append(cards(t))
		})
	})
	.catch((err) => {
		console.log(err)
	})

function cards(obj) {
	const card = document.createElement("div")
	const headline = document.createElement("div")
	const author = document.createElement("div")
	const imgContainer = document.createElement("div")
	const img = document.createElement("img")
	const span = document.createElement("span")

	card.classList.add("card")
	headline.classList.add("headline")
	author.classList.add("author")
	imgContainer.classList.add("img-container")

	headline.textContent = obj.headline
	img.src = obj.authorPhoto
	span.textContent = obj.authorName

	imgContainer.append(img)
	author.append(imgContainer, span)
	card.append(headline, author)

	return card
}
