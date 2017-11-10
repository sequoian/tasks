export const parseResponse = response => {
  return Promise.resolve(response.json())
    .then(json => {
      return {
        status: response.status,
        ok: response.ok,
        json
      }
    })
}
