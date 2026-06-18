import "./PlanetItem.scss";
import type { Planet } from "../../types/planet";

function PlanetItem({ planet, isHighlighted, isDarkened } : { planet: Planet, isHighlighted: boolean, isDarkened: boolean }) {
    return (
        <div className={`planet-item planet-item-${planet.id}${isHighlighted ? ' ' + 'is-highlighted' : ''}${isDarkened ? ' ' + 'is-darkened' : ''}`}>
            <div className={'planet-sphere' + " " + planet.name.toLowerCase()}>
                <img src={planet.imageUrl} alt={planet.name} />
                <h2>{planet.name}</h2>
            </div>
        </div>
    );
}

export default PlanetItem;