# ga-hello-world
Sample github action

## References

 - [Creating a JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
 - [Bassem Dghaidi, "How to Build Your First JavaScript GitHub Action", freecodecamp, Jan 2022](https://www.freecodecamp.org/news/build-your-first-javascript-github-action/)

## Pull request action

Adds pull request file changes as a comment to a new opened PR.

### Rebuild after changing index.js before commit...
```
ncc build index.js --license licenses.txt
```

### Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

### Outputs

### `time`

The time we greeted you.

### Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'