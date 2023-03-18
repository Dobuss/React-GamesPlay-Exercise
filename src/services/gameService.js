import * as request from "./requestor"

const baseUrl = "http://localhost:3030/jsonstore/games"

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const games = Object.values(result)
    
    return games;
}

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);
    return result;
}
export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);
    return result;
}