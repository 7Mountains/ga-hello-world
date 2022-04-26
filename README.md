# ga-hello-world
Sample github action

## References

 - [Creating a JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
 - [Bassem Dghaidi, "How to Build Your First JavaScript GitHub Action", freecodecamp, Jan 2022](https://www.freecodecamp.org/news/build-your-first-javascript-github-action/)

## Pull request action

Adds information to PRs both when openend and when reviewed.

### Rebuild after changing index.js before commit...
```
ncc build index.js --license licenses.txt
```

### Inputs

### `<name>`

**Required** <desc>. Default `"<default value>"`.

### Outputs

### `state`
The review state. Set accoridng to event.

### Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'