import ListName, {ListNameProps} from "./components/ListName.tsx";

export default function App() {
    const listName: ListNameProps[] = [
        {name: "Galang", gender: "male"},
        {name: "Nela", gender: "female"},
        {name: "Derby", gender: "female"},
        {name: "Fandi", gender: "male"},
        {name: "Yuda", gender: "male"},
        {name: "Dewi", gender: "female"},
        {name: "Anita", gender: "female"},
    ]
    return (
        <div>
            <ul>
                {listName.map((item, index) => (
                    <ListName name={item.name} gender={item.gender} key={index}/>
                ))}
            </ul>
        </div>
    );
}