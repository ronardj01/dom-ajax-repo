# My Resume

1. Fork and Clone this repo
2. Run `npm install` then `npm start` (don't worry if you don't understand these commands now, we will explain them in Node module)
3. When you run `npm start`, your browser should open the webpage immediately with hot reload enabled (i.e. when you change files, they will automatically be reflected on the page).

## Github API

Github provides an **API** that provides a way for developers to retrieve information about in **JSON** format. We will spend most of our time using the `repos` **endpoint** which GETs the repos (repositories) of a specified user.

The documentation for the `repos` endpoint is available on: [https://developer.github.com/v3/repos/](https://developer.github.com/v3/repos/)

- Try to open this URI on the browser [https://api.github.com/users/codeyourfuture/repos](https://api.github.com/users/codeyourfuture/repos). What do you get back? Try changing _codeyourfuture_ to your Github username, and see if you get back your list of repositories.

**Now to the requirements.**

## Part 1: My Github Page

### Requirement 1: Show my Repos

**Given** I am on the Resume site  
**When** I click on `My Github` link  
**Then** I should be presented with a list of repositories for my Github user

### Requirement 2: Add a link to my repo

**Given** I am on the `My Github` page  
**When** I am presented a list of my Repos  
**Then** each repo should have a link to go to the Github page

> **Hint:** If you're unsure about how to create a link from JavaScript, then check [this StackOverflow post](https://stackoverflow.com/questions/37472635/javascript-dom-add-href-and-a-link) that has the answer.

### Requirement 3: Display the number of Repos

**Given** I am on the Resume site  
**When** I click on `My Github` link  
**Then** I should be shown the number of repos in my Github account (in place of the `X`)

For the above requirements, you need to use the API:

> GET https://api.github.com/users/*YOUR GITHUB USERNAME\*/repos

Where do I write the code for Part 1 requirements?

> Under the folder _pages_ there is the HTML page `my-github.html`. Inside this file there are references to the script `my-github.js` and the CSS file `my-github.css`. These are the files that you will need to change for Part 1 tasks.

![tasks 1-3 demo](./homework_assets/tasks1-3demo.png)

## Part 2: Show Pull Requests submitted against js-exercises

**The API**:
GET [https://api.github.com/repos/codeyourfuture/js-exercises/pulls](https://api.github.com/repos/codeyourfuture/js-exercises/pulls)

For the below 3 tasks, you'll need to work in: `pull-requests.html` & `pull-requests.js`

> First, you need to link the `html` and `JavaScript` together. Go to the `html` page and add a script tag `<script src="../js/pull-requests.js"></script>`

Where do I write the code for Part 2 requirements?

> The file `pull-requests.js` (that you just linked) is where you need to write the JavaScript to peform these requirements.

### Requirement 4: Show ALL Pull Requests

**Given** I am on the Resume site  
**When** I click on `Pull Requests` link  
**Then** I should be shown a list of all _Pull Requests title_ as a link  
**AND** the link should take me to the Pull Request on Github (use `html_url` property from the API response)

### Requirement 5: Show Only My Pull Requests

Update the code your wrote for the previous requirement to only show your own Pull Requests. Look at the `JSON` response and think how you can _filter_ the response.

### Requirement 6: Search for my friend's Pull Requests

Add a `Search input` on the `My Pull Requests` page. This allows the user to enter a Github username, and while they are searching, we should _filter_ the displayed list of Pull Requests to only show that user's Pull Requests.

**Given** I am on the the Pull Requests page  
**When** I enter a _github user_ in the _search box_  
**Then** I should be shown a list of _Pull Requests title_ for that User only

![task 6 demo](./homework_assets/task6demo.png)

> **Hint:** This code below listens to `keyup` event (The keyup event is fired when a key is released) and gets the last value from `event` parameter

```javascript
// input is a DOM element we already have using "querySelector"
input.addEventListener("keyup", function(event) {
  const value = event.target.value;
  console.log(value);
  // "value" will be the last value of the input field, and will be updated everytime the user types a new letter
});
```

For the above requirements, you need to use the API:

> GET [https://api.github.com/repos/codeyourfuture/js-exercises/pulls](https://api.github.com/repos/codeyourfuture/js-exercises/pulls)

> hint: This request lists all the pull requests against js-exercises. How can you show only the ones that related to your Github username (How can you _filter_ the list).

## Part 3: Update My Github Page to show other Github user's repos

### Requirement 7: Display someone else's repos in My Github

Update the **My Github** page to add a `Search input` and a `Search button`. This allows the user to enter a Github username, and when they click **Search** then the page should display the Pull Requests for that user.

**Given** I am on _My Github_ page  
**When** I enter a _github username_ in the _search box_  
**And** I click Enter  
**Then** I should be shown a list of the repos for that user

(stretch goal: if the search box is empty then it should default to my User)

> You will need to update the code in `my-github.js` to finish this final task.

![task 7 demo](./homework_assets/task7demo.png)

For the above requirements, you need to use the API:

> GET https://api.github.com/users/*A GITHUB USERNAME\*/repos

Where do I write the code for Part 3 requirements?

> You will need to update the code in `my-github.js` to finish these tasks.

## Bonus Task: Random API

Pick any random API from https://github.com/toddmotto/public-apis (**only those that don't require authentication (have Auth No)**) and create a page to use the API

Some ideas include [The jokes API](https://github.com/15Dkatz/official_joke_api) to get random programming jokes, or the [Open Library API](https://openlibrary.org/developers/api) to search and retrieve information about Books, or [Wordnik](http://developer.wordnik.com/docs.html) to get definitions and example sentences for words, or getting [information about food and recipes](https://github.com/toddmotto/public-apis#food--drink) from a variety of APIs etc...

Make sure to select an API that does not require Authentication, read its documentation for use with HTTP and to get the response in `JSON`.
