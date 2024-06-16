// api.js (or wherever you define your postData function)
import { environment } from "../../environment/environment";

export const postData = async (controller, method, data) => {
    const url = `${environment.api}${controller}/${method}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;  // Propagate the error so it can be handled by the caller
    }
};
