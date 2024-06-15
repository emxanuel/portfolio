export default function TechIcon ({tech, url}: {tech: JSX.Element, url: string}) {
    return (
        <a href={url} target="_blank">
            {tech}
        </a>
    )
}