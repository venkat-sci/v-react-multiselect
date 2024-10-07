## v-react-multiselect

![V React Multiselect screenshot](https://raw.githubusercontent.com/venkat-sci/v-react-multiselect/refs/heads/master/images/vreactmultiselect.png)

`v-react-multiselect` npm package a versatile and customizable multiselect component for React applications.

[Demo](https://v-react-multiselect.vercel.app/)

## Installation

_note: this package used **tailwindcss** calss please makesure you already setup tailwindcss in your project_

tailwind.config.js

```
content: [
  // ...
    './node_modules/v-react-multiselect/**/*.{js,ts,jsx,tsx,mdx,mjs}',
  // ...
  ],
```

### npm

```
npm install v-react-multiselect
```

### Options:

- `inputData` Array of strings (Required)
- `returnValues` a callback function (Required)
- `selectedInputData` Array of strngs (Optinal)
- `className` strng (Optinal)

## Basic Usage

```js
import VReactMultiSelect from 'v-react-multiselect';

function App() {
  // (Required) base input Array for feed values
  const inputData = ['options1', 'options2'];

  // (Required) get back the selected values using this call back function as Array
  const returnValues = (data: string[]) => {
    console.log(data);
  };

  // (Optinal) if values already selected pass on this Array
  const selectedInputData = ['options1'];

  // (Optinal) css class for top most  div
  const className = '';
  return (
    <>
      <VReactMultiSelect
        className={className}
        returnValues={returnValues}
        selectedInputData={selectedInputData}
        inputData={inputData}
      />
    </>
  );
}

export default App;
```

### Contributing

Contributions to `v-react-multiselect` are welcome! If you have any issues, feature requests, or improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/venkat-sci/v-react-multiselect). Your feedback and support are highly appreciated!

### Reporting Issues

If you encounter any problems while using the library, please open an issue on GitHub. Provide as much detail as possible, including steps to reproduce the issue and any relevant code or screenshots.

## License

This project is licensed under the MIT License.
