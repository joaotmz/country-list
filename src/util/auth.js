//  fake login
export const isAuthenticated = () => {
    let auth = sessionStorage.getItem('token')
    if(!auth) return false

    return true
}