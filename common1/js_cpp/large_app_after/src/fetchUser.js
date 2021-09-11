export const getUserInfo = async () => {
    const response = await fetch('http://localhost:4000/user');
    return await response.json();
};
export const getUserInfoById = async (id) => {
    const response = await fetch(`http://localhost:4000/user/${id}`);
    return await response.json();
};
