import styles from "./PlanetCard.module.scss";
import type { Planet } from "../../types/planet";

function PlanetCard ({ planet } : Planet) {
    return (
        <article className={styles['article']}>
            <h3>{ planet.name }</h3>
        </article>
    )
}

export default PlanetCard;