// Import Packages
const express = require('express')
const router = express.Router()
// Create POST controller
const data = [
  {
    title: 'JavaScript Tutorial - W3School',
    description:
      'Well organized and easy to understand Web building tutorialss with lots of examples of how to use HTML, CSS, JavaScript,SQL,PHP,Python,Bootstrap,Java.',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        description:
          'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web page CouchDB and Adobe Acrobat.',
        url: 'developer.mozilla.org'
      },
      {
        title: 'JavaScript - Wikipedia',
        description:
          'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time.',
        url: 'en.wikipedia.org'
      }
    ]
  },
  {
    title: 'JavaScript Tutorial - W3School',
    description:
      'Well organized and easy to understand Web building tutorialss with lots of examples of how to use HTML, CSS, JavaScript,SQL,PHP,Python,Bootstrap,Java.',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        description:
          'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web page CouchDB and Adobe Acrobat.',
        url: 'developer.mozilla.org'
      },
      {
        title: 'JavaScript - Wikipedia',
        description:
          'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time.',
        url: 'en.wikipedia.org'
      }
    ]
  },
  {
    title: 'JavaScript Tutorial - W3School',
    description:
      'Well organized and easy to understand Web building tutorialss with lots of examples of how to use HTML, CSS, JavaScript,SQL,PHP,Python,Bootstrap,Java.',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        description:
          'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web page CouchDB and Adobe Acrobat.',
        url: 'developer.mozilla.org'
      },
      {
        title: 'JavaScript - Wikipedia',
        description:
          'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time.',
        url: 'en.wikipedia.org'
      }
    ]
  }
]
const filterResults = (resultsList, search) => {
  return resultsList.filter(result => result.title.includes(search))
}

// views
router.post('/', (req, res) => {
  // this is the input of the user:
  let searchValue = req.body.search

  // this is what you render
  res.render('results', {
    results: filterResults(data, searchValue)
  })
})

// Export module
module.exports = router
