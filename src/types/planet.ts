export interface Planet {
    id: number;
    name: string;
    type?: "tellurique" | "gazeuse" | "naine";
    diameter?: number;
    mass?: string;
    distanceFromSun?: string;
    minTemperature?: number;
    maxTemperature?: number;
    rotationDuration?: string;
    revolutionDuration?: string;
    moonsCount?: number;
    rings?: boolean;
    imageUrl: string;
    moons?: Moon[];
}

export interface Moon {
    id: number;
    name: string;
    diameter: number;
    mass: string;
    revolutionDuration: string;
    imageUrl: string;
}