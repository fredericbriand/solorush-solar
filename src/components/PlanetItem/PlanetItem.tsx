import "./PlanetItem.scss";
import type { Planet } from "../../types/planet";

function PlanetItem({ planet, isHighlighted, isDarkened, onSelect } : { planet: Planet, isHighlighted: boolean, isDarkened: boolean, onSelect: () => void }) {

    return (
        <div className={`planet-item planet-item-${planet.id}${isHighlighted ? ' ' + 'is-highlighted' : ''}${isDarkened ? ' ' + 'is-darkened' : ''}`}>
            <button className={'planet-sphere' + " " + planet.name.toLowerCase()} onClick={onSelect}>
                <img src={planet.imageUrl} alt={planet.name} />
                <h2>{planet.name}</h2>
            </button>
        </div>
    );
}

export default PlanetItem;