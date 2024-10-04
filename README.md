# React + TypeScript + ShadcnUI

This `npm package` allow to select multiple values clasic side by side view

[Demo](https://v-react-multiselect.vercel.app/)

Options:

- `inputData` Array of strings (Required)
- `returnValues` a callback function (Required)
- `selectedInoutData` Array of strngs (Optinal)

## Usage

Example code:

```js
import useVReactMultiSelect from './hooks/useVReactMultiSelect';

function App() {
  const { VReactMultiSelect } = useVReactMultiSelect();

  // base input Array for feed values
  const inputData = ['options1', 'options2'];

  // get back the selected values using this call back function as Array
  const returnValues = (data: string[]) => {
    console.log(data);
  };

  // if values already selected pass on this Array
  const selectedInoutData = ['options1'];

  return (
    <>
      <VReactMultiSelect
        returnValues={returnValues}
        selectedInoutData={selectedInoutData}
        inputData={inputData}
      />
    </>
  );
}

export default App;
```
