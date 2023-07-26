import '../css/list-name.css';

interface ListNameProps {
    name: string;
    gender: 'male' | 'female';
}

export default function ListName({name, gender}: ListNameProps) {
    const className = gender === 'male' ? 'blue' : 'pink';

    return (
        <li className={className}>{name}</li>
    );
}