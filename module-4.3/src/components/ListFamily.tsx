interface ListFamilyProps {
    name: string;
    gender: "male" | "female";
}

const families: ListFamilyProps[] = [
    {
        name: "John",
        gender: "male"
    },
    {
        name: "Jane",
        gender: "female"
    },
    {
        name: "Jack",
        gender: "male"
    },
    {
        name: "Jill",
        gender: "female"
    }
];

const femaleMembers = families.filter((family) => family.gender === "female");

const ListFamily = () => {
    return (
        <ul>
            {femaleMembers.map((family) => (
                    <li key={family.name} onClick={() => console.log(family)} style={{fontSize: '12px', color: 'red'}}>{family.name} : {family.gender}</li>
                )
            )}
        </ul>
    );
}

export default ListFamily;