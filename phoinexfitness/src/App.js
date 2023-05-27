import './App.css';
import { TextField } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <div class="search-bar-container">
        <div class="search-bar">
          <TextField fullWidth id="search-bar" label="Seach For Workouts" variant="outlined">Search For Workouts</TextField>
        </div>
      </div>
    </div>
  );
}

export default App;
