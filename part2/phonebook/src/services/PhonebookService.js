import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const fetchPhonebookEntries = () => {
  return axios.get(baseUrl)
              .then(response => response.data)
              .catch(error => error.response.data)
}

const addEntryToPhonebook = newEntry => {
  return axios.post(baseUrl, newEntry)
                .then(response => response.data)
                .catch(error => error.response.data)
}

const updatePhonebookEntry = (newEntry) => {
  return axios.put(`${baseUrl}/${newEntry.id}`, newEntry)
              .then(response => response.data)
              .catch(error => error.response.data)
}

const deletePhonebookEntry = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
                .then(response => response.data)
                .catch(error => error.response.data)
}

export default { 
  fetchPhonebookEntries, addEntryToPhonebook, updatePhonebookEntry, deletePhonebookEntry 
}