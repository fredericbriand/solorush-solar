import styles from "./PlanetItem.module.scss";
import type { Planet } from "../../types/planet";

function PlanetItem({ planet, isHighlighted, isDarkened } : { planet: Planet["planet"], isHighlighted: boolean, isDarkened: boolean }) {
    return (
        <div className={`${styles['planet-item']} ${styles['planet-item-' + planet.id]} ${isHighlighted ? styles['is-highlighted'] : ''} ${isDarkened ? styles['is-darkened'] : ''}`}>
            <div className={`${styles['planet-sphere']} ${styles[planet.name.toLowerCase()]}`}>
                <img src={planet.imageUrl} alt={planet.name} />
                <h2>{planet.name}</h2>
            </div>
        </div>
    );
}

export default PlanetItem;