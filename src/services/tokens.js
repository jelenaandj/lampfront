const TOKEN_KEY = 'jwt';

export const tokenLogin = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    
}

export const tokenLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isTokenLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        let token=localStorage.getItem(TOKEN_KEY);
        return token;
    }

    return false;
}        


