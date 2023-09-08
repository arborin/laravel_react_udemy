const News = ({ news }) => {
    console.log(news);
    return (
        <div>
            <h1>NEWS</h1>

            {news.map((n, i) => (
                <h1 key={i}>
                    {news.id} - {n.url}
                </h1>
            ))
            }
        </div>
    )
}


News.getInitialProps = async () => {
    let news;

    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    news = await res.json();

    return { news };
}


export default News;