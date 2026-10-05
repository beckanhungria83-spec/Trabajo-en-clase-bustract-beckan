import Sidebar from './PillsExample';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      {/* Menú de navegación horizontal */}
      <Sidebar />

      {/* Contenido principal del Dashboard */}
      <Dashboard />
    </div>
  );
}

export default App;