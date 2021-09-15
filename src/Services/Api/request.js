import axios from 'axios'

export const requests = ({ url, data, params, method, headers }) => {
    const variables = {
      url,
      data,
      params,
      method,
      headers,
    }
    const toKen = localStorage.getItem('toKen')
    if (toKen)
    {
        variables.headers = {
            ...variables.headers,
            Authorization: "Bearer " + toKen,
        }
    }
    return axios(variables)
}