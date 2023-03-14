var phrases = [
		{text: "The internet is fueled by narcissism, but the mountains won't remember who I am", author: "Peter McKinnon", link: "https://www.youtube.com/watch?v=2Z0lv6qlj0Q"},
		{text: "Keep close to Nature’s heart… and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean", author: "John Muir"},
		{text: "The mountains are calling and I must go", author: "John Muir"},
		{text: "Each fresh peak ascended teaches something", author: "William Martin Conway"},
		{text: "You keep putting one foot in front of the other, and then one day you look back and you’ve climbed a mountain", author: "Tom Hiddleston"},
		{text: "A good photograph is knowing where to stand", author: "Ansel Adams"},
		{text: "I have a fondness for when the landscape becomes surreal", author: "Edward Burtynsky"},
		{text: "Any landscape is a condition of the spirit", author: "Henri Frederic Amiel"},
]

var quote = phrases[Math.floor(phrases.length * Math.random())]

document.getElementsByClassName('quotephrase')[0].innerHTML = '"' + quote.text + '"'

var author = document.getElementsByClassName('author')[0]

if('link' in quote) {
		author.href = quote.link
} else {
 author.removeAttribute('href')
}

author.innerHTML = "– " + quote.author
