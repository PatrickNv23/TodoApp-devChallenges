import './App.css'
import FilterTaskHeader from './components/FilterTaskHeader';
import Search from './components/Search.jsx';
import TaskList from './components/TaskList.jsx';
import Footer from './components/Footer.jsx';
import { useContext } from 'react';
import { TaskContext } from './context/TaskProvider';

function App() {
  const { filterName, getFilterNameForTasks } = useContext(TaskContext);

  return (
    <>
      <h1 className='title'>#todo</h1>
      <div className='containerFiltersTaskHeader'>
        <FilterTaskHeader textContent="All" getFilterNameForTasks={getFilterNameForTasks} />
        <FilterTaskHeader textContent="Active" getFilterNameForTasks={getFilterNameForTasks} />
        <FilterTaskHeader textContent="Completed" getFilterNameForTasks={getFilterNameForTasks} />
      </div>
      {
        filterName !== "Completed" && <div className='containerSearch'>
          <Search />
        </div>
      }

      <TaskList filterName={filterName} />
      <Footer />
    </>

  )
}

export default App
