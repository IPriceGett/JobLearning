export const getUser = () => {
    const user = localStorage.getItem("token")
    return user
}

export const getRol = () => {
    const rol = localStorage.getItem("rol")
    return rol
}