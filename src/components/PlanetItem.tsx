import type { Planet } from "../types/planet";

function PlanetItem({ planet } : Planet) {
    return (
        <div className="planet-item">
            <img src={planet.imageUrl} alt={planet.name} />
            <h2>{planet.name}</h2>
        </div>
    );
}

export default PlanetItem;