import { useState } from 'react';
import "./App.scss";
import Planets from "./data/planets.json";

import PlanetItem from './components/PlanetItem/PlanetItem';
import Search from './components/Search/Search';

function App() {
    const [search, setSearch] = useState('');

    const filteredPlanets = Planets.filter(planet =>
        planet.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1>Solar System</h1>
            <Search search={search} setSearch={setSearch} />
            <div className="solar-system">
                <div className="sun">
                    <img src="https://cdn-icons-png.flaticon.com/128/2949/2949023.png" alt="Soleil" />
                    <h2>Soleil</h2>
                </div>
                <div className="planets-list">
                    {filteredPlanets.map(planet => (
                        <PlanetItem key={planet.id} planet={planet} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
