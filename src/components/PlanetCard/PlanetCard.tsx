import styles from "./PlanetCard.module.scss";
import type { Planet, Moon } from "../../types/planet";

import Labels from '../../data/labels.json';

function PlanetCard ({ planet, moon } : { planet: Planet, moon: Moon}) {
    return (
        <article className={`planet-card-${planet.name.toLowerCase()} ${styles['article']}`}>
            <div className={styles['visual']}>
                <img src={ planet.imageUrl } alt={ planet.name } />
                <h3>{ planet.name }</h3>
                <span>{ planet.type }</span>
            </div>
            <div className={styles['block']}>
                <div>
                    <span className={styles['label']}>{Labels.diameter}</span>
                    <span className={styles['field']}>{planet.diameter}</span>
                </div>
                <div>
                    <span className={styles['label']}>{Labels.mass}</span>
                    <span className={styles['field']}>{planet.mass}</span>
                </div>
            </div>
            <div className={styles['block']}>
                <div>
                    <span className={styles['label']}>{Labels.minTemperature}</span>
                    <span className={styles['field']}>{planet.minTemperature}</span>
                </div>
                <div>
                    <span className={styles['label']}>{Labels.maxTemperature}</span>
                    <span className={styles['field']}>{planet.maxTemperature}</span>
                </div>
            </div>
            <div className={styles['block']}>
                <div>
                    <span className={styles['label']}>{Labels.rotationDuration}</span>
                    <span className={styles['field']}>{planet.rotationDuration}</span>
                </div>
                <div>
                    <span className={styles['label']}>{Labels.revolutionDuration}</span>
                    <span className={styles['field']}>{planet.revolutionDuration}</span>
                </div>
            </div>
            {planet.moons && planet.moons.length > 0 && (
                <div className={styles['bottom']}>
                    <div>
                        <span className={styles['label']}>{Labels.moonsCount}</span>
                        <span className={styles['field']}>{planet.moonsCount}</span>
                    </div>
                    {planet.moons.map(moon => (
                        <li key={moon.id} className={styles['field']}>{moon.name}</li>
                    ))}
                </div>
            )}
        </article>
    )
}

export default PlanetCard;