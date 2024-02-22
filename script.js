const BASE_URL = 'https://api.artic.edu/api/v1/artworks'


const fetchData = async () => {

    try{
        const response = await fetch(`${BASE_URL}/11952`)

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        
        const data = await response.json();
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
fetchData()
