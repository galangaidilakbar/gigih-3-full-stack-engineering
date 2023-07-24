export default function Hello(props: { name: string }) {
    return (
        <h1 className="text-4xl lg:text-9xl font-medium text-center">Hello, {props.name}!</h1>
    );
}