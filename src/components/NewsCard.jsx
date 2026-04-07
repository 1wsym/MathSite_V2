function NewsCard({ title, description, image, url }) {
    return (
        <article className="news-card">
            <div className="news-image" style={{ backgroundImage: `url(${image})` }}></div>
            <h4 className="news-title"><a href={url}>{title}</a></h4>
            <p className="news-paragraph">{description}</p>
        </article>
    )
}

export default NewsCard