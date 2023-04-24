export type Recipe = {
  id: number;
  name: string;
  yields: string;
  instructions: any[];
  cook_time_minutes: number;
  description: string;
  thumbnail_url: string;
}

export type ListResponse = {
  count: number;
  results: Recipe[]
}

export type AutoCompleteResponse = { 
  display: string;
  search_value: string;
  type: string;
}

export type Action<T> = {
  type: T;
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
}