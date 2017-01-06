// @flow

import constants from './constants';

const Api = {
  getList(listId: number): Promise<any> {
    const query = `https://api.themoviedb.org/4/list/${listId}?api_key=${constants.apiKey}`;

    return fetch(query)
      .then(response => response.json())
  }
}

export default Api;
