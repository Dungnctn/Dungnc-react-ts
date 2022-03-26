export const isAuthenticate:any = () => {
    if(!localStorage.getItem('user')) return 
    
    return JSON.parse(localStorage.getItem('user'));

}