const getStoredBookRequest =() =>{
    const storedBookRequest = localStorage.getItem('book-requests');
    if(storedBookRequest){
        return JSON.parse(storedBookRequest);
    }
    return [];
}



const saveBookRequest =(id) =>{
    
    const storedBookRequests = getStoredBookRequest();
    console.log(storedBookRequests)
    const exists = storedBookRequests.find(item =>  item ==id);
    console.log(exists);
    if(!exists){
        storedBookRequests.push(id);
        localStorage.setItem('book-requests',JSON.stringify(storedBookRequests))
    }

}
export{saveBookRequest,getStoredBookRequest};