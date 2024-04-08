import axios from 'axios'

export const fetchUsersList = () => {
    return axios.get('https://randomuser.me/api/?seed=$%7bseed%7d&page=$%7bpage%7d&results=20')
}