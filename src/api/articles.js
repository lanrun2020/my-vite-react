import http from "./http";

export function fecthArticles(params = { page: 1, limit: 50,tab: ''}) {
    return http.get('/topics', {params})
}