import { getUserInfo } from "./fetchUser.js";
export default async function run() {
    const root = document.querySelector('#root');
    const users = await getUserInfo();
    const userList = `
    <ul>
        ${users.map((user) => `<li><div>${user.id}</div><div>${user.name}</div><div>${user.age}</div></li>`)}
    </ul>`;
    root.insertAdjacentHTML('beforebegin', userList);
}
;
run();
