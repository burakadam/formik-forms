import BasicForm from './containers/forms/Basic';
import SignUpBasic from './containers/forms/SignUpBasic';
import SignUpComponents from './containers/forms/SignUpComponents';

function App() {
  return (
    <div className='App'>
      <BasicForm />
      <hr />
      <SignUpBasic />
      <hr />
      <SignUpComponents />
    </div>
  );
}

export default App;
