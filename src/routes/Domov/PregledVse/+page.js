
export const load = async () =>{
    
    const response =  await fetch("http://127.0.0.1:8000/Filmi")
    const json = await response.json()

    return {
       json
    }

}