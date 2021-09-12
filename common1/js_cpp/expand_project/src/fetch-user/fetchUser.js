const getUserInfo = async () => {
    const response = await fetch('http://localhost:4000/user');
    return await response.json();
};

const getUserInfoById = async (id) => {
    const response = await fetch(`http://localhost:4000/user/${id}`);
    return await response.json();
};

export { getUserInfo, getUserInfoById };