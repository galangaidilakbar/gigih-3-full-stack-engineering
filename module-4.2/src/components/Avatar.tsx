import '../css/avatar.css';

interface AvatarProps {
    name?: string;
    imageUrl: string;
}

export default function Avatar({name = "Si Gigih", imageUrl}: AvatarProps) {
    return (
        <div style={{display: 'flex', alignItems: 'center', columnGap: '24px', padding: '5px'}}>
            <img src={imageUrl} alt={name} className={'avatar-image'}/>
            <h1 className={'avatar-name'}>{name}</h1>
        </div>
    );
}