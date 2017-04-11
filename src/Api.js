// @flow

import constants from './constants';

import type { ApiResponse } from './types';

const Api = {
  getList(listId: number): Promise<ApiResponse> {
    const query = `https://api.themoviedb.org/4/list/${listId}?api_key=${constants.apiKey}`;

    return fetch(query)
      .then(response => response.json())
  }
}

export default Api;
