const BASE_URL = 'https://api.artic.edu/api/v1/artworks'


const fetchData = async (id) => {

    try{
        
        const response = await fetch(`${BASE_URL}/${id}`)

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        
        const data = await response.json();
       
        console.log(data.data.title)
        console.log(data.data.artist_title)
        console.log(data.data.medium_display)
        console.log(data.data.date_end)

        const title = data.data.title
        const artist = data.data.artist_title
        const medium = data.data.medium_display
        const date = data.data.date_end

        alert(title +"\n "+ artist +"\n"+ medium +"\n"+ date)

    }
    catch(error){
        console.log(error)
    }
}

function getArtData(id){
    switch(id){
        case 'fig1' : {
            fetchData('11952')
            break;
        }
        case 'fig2' : {
            fetchData('20579')
            break;
        }
        case 'fig3' : {
            fetchData('21023')
            break;
        }
        case 'fig4' : {
            fetchData('15468')
            break;
        }
        case 'fig5' : {
            fetchData('75644')
            break;
        }
        case 'fig6' : {
            fetchData('24645')
            break;
        }
    }

}