import axios from 'axios';
import { Recipe } from './types';

//Creating cache storage

const cache = new Map();

// API types
type ListParams = {
  from: number;
  size: number;
  tags?: string;
};

type AutoCompleteParams = {
  prefix: string;
};

type GetMoreInfoParams = {
  id: number;
};

export type FetchAPIParams = {
  endpoint:
    | '/recipes/list'
    | '/recipes/get-more-info'
    | '/recipes/auto-complete';
  params: ListParams | AutoCompleteParams | GetMoreInfoParams;
};

// Returning function to fetch data and cache it
export async function fetchAPIData<T>({
  endpoint,
  params,
}: FetchAPIParams): Promise<T | Error> {
  const cachedPage = endpoint + JSON.stringify(params)
  if (cache.has(cachedPage)) {
    return cache.get(cachedPage);
  }

  try {
    const { data } = await axios({
      // Axios parametrs
      method: 'get',
      url: 'https://' + import.meta.env.VITE_BASE_API_URL + endpoint,
      // Parametrs for a certain request
      params,
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_BASE_API_URL,
      },

      // Transforming data to use it easier
      transformResponse: [
        function (data) {
          const parcedData = JSON.parse(data);
          if (endpoint === '/recipes/list') {
            return {
              count: parcedData.count,
              results: parcedData.results.map(
                ({
                  id,
                  yields,
                  instructions,
                  cook_time_minutes,
                  thumbnail_url,
                  name,
                  description,
                }: Recipe) => ({
                  id,
                  name,
                  yields,
                  instructions,
                  cook_time_minutes,
                  thumbnail_url,
                  description,
                })
              ),
            };
          }
          return parcedData;
        },
      ],
    });
    console.log(data)
    // Caching value for next time;
    cache.set(cachedPage, data);

    return data;
  } catch (error) {
    return error as Error;
  }
}
