import VReactMultiselect from './VReactMultiselect';

function App() {
  const inputData = ['options1', 'options2'];
  const selectedInoutData = ['options1'];
  const returnValues = (data: string[]) => {
    console.log(data);
  };
  return (
    <>
      <VReactMultiselect
        returnValues={returnValues}
        selectedInoutData={selectedInoutData}
        inputData={inputData}
      />
    </>
  );
}

export default App;
