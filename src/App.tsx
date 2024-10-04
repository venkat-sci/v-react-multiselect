import useVReactMultiSelect from './hooks/useVReactMultiSelect';

function App() {
  const { VReactMultiSelect } = useVReactMultiSelect();
  const inputData = [
    'options1',
    'options2',
    'options3',
    'options4',
    'options5',
    'options6',
    'options7',
    'options8',
    'options9',
    'options10',
    'options11',
    'options12',
    'options13',
    'options14',
    'options15',
    'options16',
  ];
  const selectedInoutData = ['options1'];
  const returnValues = (data: string[]) => {
    console.log(data);
  };
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
