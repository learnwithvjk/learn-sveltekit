import { comments } from "$lib/comments"

export async function PUT({params, request }) {

    const commentId = params.commentId
    const body = await request.json()
    if(body.text) {
        const commentIndex = comments.findIndex( (comment) => commentId === String(comment.id))
        if(commentIndex >= 0) {
            comments[commentIndex].text = body.text
            return new Response(JSON.stringify({
                message: 'Entity updated successfully'
            }), 
            {status: 200}
            )
        } else {
            return new Response(JSON.stringify({
                message: 'Entity not found'
            }), 
            {status: 404}
            )
        }
    } else {
        return new Response(JSON.stringify({
            message: 'Insufficient data'
        }), 
        {status: 400}
        )
    }
}