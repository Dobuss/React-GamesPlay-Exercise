import * as request from "./requestor"

const baseUrl = "http://localhost:3030/jsonstore/games"

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const games = Object.values(result)
    
    return games;
}