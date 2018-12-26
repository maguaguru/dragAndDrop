import axios from 'axios'

export const API = url => axios.create({
    baseURL: url
})

export const loadQuestionData = ({ url }) => {
    return API(url).get()
      .then(response => response)
      .catch(err => ({ err }))
}