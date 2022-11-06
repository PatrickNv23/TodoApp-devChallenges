import './App.css'
import FilterTaskHeader from './components/FilterTaskHeader';
import Search from './components/Search.jsx';
import TaskList from './components/TaskList.jsx';
import Footer from './components/Footer.jsx';
import TaskProvider from './context/TaskProvider';

function App() {

  return (
    <TaskProvider>
      <h1>#todo</h1>
      <div>
        <FilterTaskHeader textContent="All" />
        <FilterTaskHeader textContent="Active" />
        <FilterTaskHeader textContent="Completed" />
      </div>
      <div>
        <Search />
      </div>
      <TaskList />
      <Footer />
    </TaskProvider>
  )
}

export default App
