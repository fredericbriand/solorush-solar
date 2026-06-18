import "./PlanetItem.scss";
import type { Planet } from "../../types/planet";

function PlanetItem({ planet } : Planet) {
    return (
        <div className={"planet-item planet-item-" + planet.id}>
            <div className={"planet-sphere" + " " + planet.name.toLowerCase()}>
                <img src={planet.imageUrl} alt={planet.name} />
                <h2>{planet.name}</h2>
            </div>
        </div>
    );
}

export default PlanetItem;