import "./App.scss";
import Planets from "./data/planets.json";

import PlanetItem from './components/PlanetItem';

function App() {
    //console.log(Planets)
    return (
        <div className="App">
            <h1>Solar System</h1>
            <div className="planets-list">
                {Planets.map(planet => (
                    <PlanetItem key={planet.id} planet={planet} />
                ))}
            </div>
        </div>
    );
}

export default App;
