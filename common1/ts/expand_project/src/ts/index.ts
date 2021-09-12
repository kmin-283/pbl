import {getUserInfo} from "../fetch-user/fetchUser.js";

export default async function run() {
    const root: HTMLDivElement = document.querySelector('#root');
    const users = await getUserInfo();
    const userList: string = `
    <ul>
        ${users.map((user) => `<li><div>${user.id}</div><div>${user.name}</div><div>${user.age}</div></li>`)}
    </ul>`;
    root.insertAdjacentHTML('beforebegin', userList);
};

run();