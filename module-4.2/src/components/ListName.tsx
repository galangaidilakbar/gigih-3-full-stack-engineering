import '../css/list-name.css';

export interface ListNameProps {
    name: string;
    gender: 'male' | 'female';
}

export default function ListName({name, gender}: ListNameProps) {
    // if gender is male, set className to blue, else set className to pink
    const className = gender === 'male' ? 'blue' : 'pink';

    return (
        <li className={className + " list-item"}>{name}</li>
    );
}