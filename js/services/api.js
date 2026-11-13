const API_URL = "https://6af3a7e155a1de7dcf032482.mockapi.io/channels";

export async function getChannels() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const channels = await response.json();
        return channels;

    } catch (error) {
        console.error("Erreur API :", error.message);
        throw error;
    }
}