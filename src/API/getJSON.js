import axios from "axios"

export default class PostService {
    static async getAll(category, actual, limit = 30, page = 1) {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category ? category : 'react'}${actual ? `&orderBy=${actual}` : ''}&maxResults=${limit}&key=AIzaSyA3eeG4huHRlLfgzRCUI74lYTDNQMXVejY`)
        return response
        
    }

    static async getById(id) {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyA3eeG4huHRlLfgzRCUI74lYTDNQMXVejY`)
        return response 
    }
}