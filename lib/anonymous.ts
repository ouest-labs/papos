import fetch from 'node-fetch';
interface RandomUserApiResponse {
  results: {
      name: {
          title: string;
          first: string;
          last: string;
      };
      email: string;
      picture: {
          large: string;
          medium: string;
          thumbnail: string;
      };
  }[];
  info: {
      seed: string;
      results: number;
      page: number;
      version: string;
  };
}


export async function fetchRandomUsername(): Promise<string> {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json() as RandomUserApiResponse; // Asserting the type of JSON response
    if (data.results.length > 0) {
      const username = `${data.results[0].name.first}${data.results[0].name.last}`;
      return username.replace(/ /g, ''); // Remove spaces
    }
    throw new Error("No users fetched");
  } catch (error) {
    console.error('Failed to fetch random username:', error);
    return 'AnonymousUser';
  }
}
