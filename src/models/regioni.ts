export interface Regione{
    ID: number;
    Name: string;
    numAbitanti: number;
    annoFondazione:number;
    isAutonoma: boolean;
}

export const regioni = [
    {
        ID: 1,
        Name: 'Lazio',
        numAbitanti: 2012,
        annoFondazione:2000,
        isAutonoma:true,
    },
    {
        ID: 2,
        Name: 'Sicilia',
        numAbitanti: 2044,
        annoFondazione:2000,
        isAutonoma:true,
    },
    {
        ID: 3,
        Name: 'Lombardia',
        numAbitanti: 2000,
        annoFondazione:2000,
        isAutonoma:true,
    },
]