const API_KEY = '15830616-6bbce06063c91bd81d8a555c0'

const fetchPhotosByApi = async (q, page=1) => {
    
    
     return fetch(
      `https://pixabay.com/api/?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok){
          return response.json()
        }
      })
}

export default fetchPhotosByApi;