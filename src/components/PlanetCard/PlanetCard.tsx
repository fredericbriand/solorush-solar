import styles from "./PlanetCard.module.scss";
import type { Planet } from "../../types/planet";

function PlanetCard ({ planet } : { planet: Planet}) {
    return (
        <article className={`planet-card-${planet.name.toLowerCase()} ${styles['article']}`}>
            <div className={styles['visual']}>
                <img src={ planet.imageUrl } alt={ planet.name } />
                <h3>{ planet.name }</h3>
                <span>{ planet.type }</span>
            </div>
            <div>
                <span>{ planet.diameter }</span>
                <span>{ planet.mass }</span>
            </div>
            <div>
                <span>{ planet.minTemperature }</span>
                <span>{ planet.maxTemperature }</span>
            </div>
            <div>
                <span>{ planet.rotationDuration }</span>
                <span>{ planet.revolutionDuration }</span>                
            </div>
        </article>
    )
}

export default PlanetCard;

// "name": "Mercure",
//     "type": "tellurique",
//     "diameter": 4879,
//     "mass": "3.30 x 10^23 kg",
//     "distanceFromSun": "57.9 millions km",
//     "minTemperature": -180,
//     "maxTemperature": 430,
//     "rotationDuration": "58.6 jours",
//     "revolutionDuration": "88 jours",
//     "moonsCount": 0,
//     "rings": false,
//     "imageUrl": "https://cdn-icons-png.flaticon.com/128/2949/2949047.png",
//     "moons": []