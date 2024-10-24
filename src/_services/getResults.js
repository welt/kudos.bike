/**
 * Fetches Race data from API.
 */
const host = process.env.API_HOST;

export default async function (id) {
  try {
    const response = await fetch(`${host}/api/results/race/${id}`, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      const message = `A Fetch error has occured: ${response.status}`;
      throw new Error(message);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    return { error };
  }
}
