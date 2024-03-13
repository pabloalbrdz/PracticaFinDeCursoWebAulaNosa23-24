import "./Article.css";

function Article ({title}){
    return(
        <div className="article-div">
            <h2>{title}</h2>
        </div>
    );
}

export default Article;