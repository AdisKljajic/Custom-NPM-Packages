# Boilerplate NPM Package

This is a repository that supports a blog post at <https://developers.deepgram.com/blog/2021/12/build-npm-packages/>. 

The [npx branch](https://github.com/deepgram-devs/npm-package/tree/npx) supports the follow-up post at <https://developers.deepgram.com/blog/2022/01/npx-script/>.

## Usage

```js
const OpenMovieDatabase = require('./index')
const omdb = new OpenMovieDatabase('YOUR_OPEN_MOVIE_DATABASE_API_KEY')

omdb.get({ t: 'Inside Out' }).then(results => {
    console.log({ results })
})
.catch(error => {
    console.log({ error })
})
```
