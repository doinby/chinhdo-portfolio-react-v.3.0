Nation Flags allows users to look up crucial information about a country. Population, capital, native name, national flag, etc. are organised in a clear and concise manner, allowing for effortless information flow.

This is a solo project 🌟

The app proposal and figma design file was provided by [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). All country data were fetched via [REST Countries API](https://restcountries.com/).

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Built with

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [ReactRouter](https://reactrouter.com/)
- [HeadlessUI](https://headlessui.com/)
- Semantic HTML5 markup
- CSS Flexbox, Grid
- Mobile-first workflow

### What I learned

- The power of Typescript 💪
- Tailwind darkmode is amazing 🌓. Take that, MUI! 👎
- Get param query and turn it into API call 🤯
- Getting instant result from search query is very challenging 🥵
- React handling passing down props well enough that I didn't have the need for `useContext` hook 🤗

### Continued development

- Apply [debounce](https://blog.webdevsimplified.com/2020-10/react-debounce/) to search query to improve search result filter
- Improve error feedbacks - more specific error messages
- Replace `type: any` with mode specific types
- Purge unused packages and unused Tailwind class

### Useful resources

- [React Typescript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/) - Great code example of declaring common React types
- [Ultimate React Router 6 Guide](https://blog.webdevsimplified.com/2022-07/react-router/) - I used this to learn how to dynamically route individual country page, what `useParam()` does, how to use `<Link>` and `<Outlet />`
