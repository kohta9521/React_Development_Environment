export default function hero({ title, subtitle, imageOn = false }) {
    return (
        <div>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
            {imageOn && <figure> [画像] </figure>}
        </div>
    )
}