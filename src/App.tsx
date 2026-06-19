import { useState, useEffect } from 'react';
import "./App.scss";
import Planets from "./data/planets.json";

import PlanetItem from './components/PlanetItem/PlanetItem';
import PlanetCard from './components/PlanetCard/PlanetCard';
import Search from './components/Search/Search';

function App() {

    const [search, setSearch] = useState('');
    const [selectedPlanetId, setSelectedPlanetId] = useState<number | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedPlanetId(null);
        };
        const handleClickOutside = (e: MouseEvent) => {
            if (!(e.target as Element).closest('.planet-sphere')) {
                setSelectedPlanetId(null);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const filteredPlanets = search.length >= 3 ? Planets.filter(planet => planet.name.toLowerCase().includes(search.toLowerCase())) : [];

    return (
        <>
            <h1>— Solar System —</h1>
            <Search search={search} setSearch={setSearch} />
            <div className="solar-system">
                <div className="sun">
                    <img src="https://cdn-icons-png.flaticon.com/128/2949/2949023.png" alt="Soleil" />
                    <h2>Soleil</h2>
                </div>
                <div className="planets-list">
                    {Planets.map(planet => {
                        const isHighlighted = filteredPlanets.some(fp => fp.id === planet.id);
                        return (
                            <PlanetItem key={planet.id}
                            planet={planet}
                            isHighlighted={isHighlighted}
                            isDarkened={search.length >= 3 && !isHighlighted} 
                            isSelected={planet.id === selectedPlanetId} 
                            onSelect={() => setSelectedPlanetId(planet.id)} />
                        );
                    })}
                </div>
            </div>
            <section className="planet-cards">
                {selectedPlanetId !== null && (
                    <PlanetCard
                        planet={Planets.find(planet => planet.id === selectedPlanetId)!}
                    />
                )}
            </section>
        </>
    );
}

export default App;
