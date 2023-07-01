const getUser = () => {
    const user = localStorage.getItem("token")
    return user
}

export default getUser