import React from "react"
import Article from "./Article";

function ArticleList({posts}) {
    const post = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    console.log(post)
    return(
        <main>
            {post}
        </main>
    )
}

export default ArticleList;