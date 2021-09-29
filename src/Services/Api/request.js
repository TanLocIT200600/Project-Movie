import axios from 'axios'
import { TOKEN_CYBERSOFT } from '../../Utils/systemSetting'

export const requests = ({ url, data, params, method }) => {
    const variables = {
        url,
        data,
        params,
        method,
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        }
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