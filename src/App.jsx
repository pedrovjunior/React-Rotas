import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div>
      <h2>Lista de contas</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>

          {/* to='/invoices' é uma rota */}
          <Link to='/invoices'>Contas</Link>
          <Link to='/expenses'>Expenses</Link>

      </nav>

      {/* Outlet pega os dados do componente e renderiza */}
      <Outlet/>
    </div>
  );
}

export default App;
