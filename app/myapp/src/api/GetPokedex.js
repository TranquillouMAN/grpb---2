export const GetPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/Pokedex', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
         }
    )
     const pokemons = await response.json()
    return pokemons
}

export const UpdatePokedex = async (data) => {
    const response = await fetch(
    'http://localhost:4444/pokedex/update', {
    headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })    
    
    const pokemons = await response.json()
    return pokemons
}