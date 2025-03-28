//src/services/starshipService.js

const BASE_URL = 'https://swapi.dev/api/starships';

export async function getAllStarships() {
    try {
        const res = await fetch(BASE_URL);
        if(!res.ok) {
            throw new Error('Failed to fetch starships.')
        }
        const data = await res.json()
        return data.results
    } catch (error) {
        console.error('Error fetching starships:', error)
        return []
    }
}