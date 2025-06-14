import type { Skip } from '../types/skip';

const API_BASE_URL = 'https://app.wewantwaste.co.uk/api';

export const fetchSkipsByLocation = async ( postcode: string, area: string ): Promise<Skip[]> => {
    const response = await fetch(
        `${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`
    );

    if ( !response.ok ) {
        throw new Error( "Failed to fetch skip data" );
    }

    return response.json();
};
