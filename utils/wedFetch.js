import fetch from 'isomorphic-unfetch';

const wedFetcher = async (url, options = {}) => {
  const { headers, ...otherOptions } = options || {};
  return fetch(process.env.NEXT_PUBLIC_WEB_URL + url, {
    headers: {
      ...headers,
    },
    ...otherOptions,
  })
    .then(async (r) => {
      let result;
      try {
        result = await r.json();
      } catch (e) {
        result = {};
      }
      return {
        status: result.status,
        ok: result.statusText,
        error: result.error,
        data: result.data,
        count: result?.count,
        page: result?.page,
      };
    })
    .catch((e) => {
      console.error(e);
    });
};

export default wedFetcher;
