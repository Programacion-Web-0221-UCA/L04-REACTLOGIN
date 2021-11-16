const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const services = {};

// La API devuelve el token y el rol del usuario
services.login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if(response.ok) {
        const data = await response.json();
        return data;
    }
    return {};
}

services.verifyToken = async (token) => {
    // usuario y rol
    const response = await fetch(`${BASE_URL}/auth/whoami`, {
        headers: {
            "Authorization": `Bearer ${ token }`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    return {};
}

export default services