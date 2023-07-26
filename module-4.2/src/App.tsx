import Avatar from "./components/Avatar.tsx";

export default function App() {
    return (
        <div>
            <Avatar imageUrl={"https://avatars.githubusercontent.com/u/26488963?v=4"}/>
            <Avatar imageUrl={"https://avatars.githubusercontent.com/u/26488963?v=4"} name={"Galang"}/>
        </div>
    );
}