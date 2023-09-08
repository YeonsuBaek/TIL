import DateSelection from './components/DateSelection';
import './App.css';

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <DateSelection format='YYYY/MM/DD' autoFormatting={true} />
    </div>
  );
}

export default App;
