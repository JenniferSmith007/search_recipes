export const Comment = () => {
    let commentText = document.createElement("textarea")
    let commentSubmit= document.createElement("button")
    commentSubmit.innerText = "Submit"
    document.body.appendChild(commentText)
    document.body.appendChild(commentSubmit)
    return(
        <div>

        </div>
    )
}