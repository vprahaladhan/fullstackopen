import axios from 'axios'

const baseUrl = '/api/persons'

const fetchPhonebookEntries = () => {
  return axios.get(baseUrl).then(response => response.data)
}

const addEntryToPhonebook = newEntry => {
  return axios.post(baseUrl, newEntry).then(response => response.data)
}

const updatePhonebookEntry = (newEntry) => {
  return axios.put(`${baseUrl}/${newEntry.id}`, newEntry).then(response => response.data)
}

const deletePhonebookEntry = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

export default { 
  fetchPhonebookEntries, addEntryToPhonebook, updatePhonebookEntry, deletePhonebookEntry 
}