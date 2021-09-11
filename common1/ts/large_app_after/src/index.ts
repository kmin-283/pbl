import { User } from "../types/user.js";
import { getUserInfo } from "./fetchUser.js";

export default async function run() {
    const root: HTMLDivElement = document.querySelector('#root');
    const users: User[] = await getUserInfo();
    const userList: string = `
    <ul>
        ${users.map((user) => `<li><div>${user.id}</div><div>${user.name}</div><div>${user.age}</div></li>`)}
    </ul>`;
    root.insertAdjacentHTML('beforebegin', userList);
    console.log("??");
};

run();