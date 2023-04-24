import axios from 'axios';
import { Recipe } from './types';

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

export const fetchAPIData = () => {
  const cache = new Map();
  return async <T>({
    endpoint,
    params,
  }: FetchAPIParams): Promise<T | Error> => {
    if (cache.has(endpoint)) {
      return cache.get(endpoint);
    }
    try {
      const { data } = await axios({
        method: 'get',
        url: 'https://' + import.meta.env.VITE_BASE_API_URL + endpoint,
        params,
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_BASE_API_URL,
        },
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
      cache.set(endpoint, data);
      return data;
    } catch (error) {
      return error as Error;
    }
  };
};
