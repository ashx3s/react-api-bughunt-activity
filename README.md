# React API Fetch Bughunt

This code is based on the React API challenges code and has broken examples of some of the challenges proposed in the other codebase. However these include syntax and logic errors that you'll need to debug

## Debugging Strategies

- Walk through the errors that are occuring, identify problem files
- Scan for easy to catch syntax errors
- Walk through the code to understand what it's trying to accomplish
- Look for logic errors (likely involving stepping through the code)
- Research syntax that is unfamiliar
  - Keywords or code patterns
  - Syntax that looks weird or wrong
- **Comment out code to isolate a single issue**
  - this is huge, make sure you're able to get feedback on the changes you make
- Make a test repo: Isolate some of the code in a fresh react app (use the vite approach with js) and try to fix a specific issue there
  - this is another way to single out issues and make sure you're working on the right problem

### Types of Bugs

- syntax errors
- referring incorrectly to the [API](https://disneyapi.dev/docs/)
- logic errors
- rendering errors (not referring to the data correctly)
- react errors: state management, import/exports, syntax conventions

_Hints as to where to find solutions have been interspersed throughout the code_

---

## Styling Notes

- Tailwind and the prettier plugin for tailwind have been already set up (your tailwind classes will auto sort when you run the format command)

## Documentation

- [Routing in React Router](https://reactrouter.com/start/library/routing)
- [API Fetch in React FCC Tutorial](https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/)
- [Javascript Async Await Syntax (needed for fetching)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [React Router Tutorial](https://www.robinwieruch.de/react-router/)
- [Tailwind Setup](https://tailwindcss.com/docs/installation/framework-guides/react-router)
- [Tailwind + Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- [Prettier](https://prettier.io/)
