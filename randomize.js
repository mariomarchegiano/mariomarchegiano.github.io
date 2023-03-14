var phrases = [
		{text: "The internet is fueled by narcissism, but the mountains won't remember who I am", author: "Peter McKinnon", link: "https://www.youtube.com/watch?v=2Z0lv6qlj0Q"},
		{text: "Keep close to Nature’s heart… and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean", author: "John Muir"},
		{text: "The mountains are calling and I must go", author: "John Muir"},
		{text: "A very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, long text", author: "Me"}
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
