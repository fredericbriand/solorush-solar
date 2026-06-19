import "./PlanetItem.scss";
import type { Planet } from "../../types/planet";

function PlanetItem({ planet, isHighlighted, isDarkened, isSelected, onSelect } : { 
    planet: Planet, 
    isHighlighted: boolean, 
    isDarkened: boolean,
    isSelected: boolean,
    onSelect: () => void 
}) {

    return (
        <div className={`planet-item planet-item-${planet.id}${isHighlighted ? ' ' + 'is-highlighted' : ''}${isDarkened ? ' ' + 'is-darkened' : ''}${isSelected ? ' is-selected' : ''}`}>
            <button className={'planet-sphere' + " " + planet.name.toLowerCase()} onClick={onSelect}>
                <img src={planet.imageUrl} alt={planet.name} />
                <h2>{planet.name}</h2>
            </button>
        </div>
    );
}

export default PlanetItem;