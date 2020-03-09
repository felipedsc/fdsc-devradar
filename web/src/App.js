import React, { useEffect, useState } from 'react';
import './App.css';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
import './global.css';
import './Main.css';
import api from './services/api';
import './Sidebar.css';



function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleDevAdded(dev) {
    setDevs([...devs, dev]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <DevForm onDevAdded={handleDevAdded} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
