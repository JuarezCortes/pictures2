import axios from 'axios' 

const searchImage = async(term)=> {
    const url = 'https://api.unsplash.com/search/photos/?client_id=wrBeybcu-MZu7CAqbyiKJsQ3CUbSbZqzkGwJ6H9e7xY'
    const response = await axios.get(url,{
        params:{
            query: term
        }
    })
    
    console.log(term)
    console.log(response.data.results)

return response.data.results
}

export default searchImage