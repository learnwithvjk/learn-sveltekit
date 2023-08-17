import { comments } from '$lib/comments'
import {json} from '@sveltejs/kit'

export function GET({url}) {
    const testParam =  url.searchParams.get('test')
    if(testParam) {
        return json(testParam)
    }
    return json(comments)
}

export async function POST({request}) {
    const body = await request.json()
    const newComment = {
        id: comments.length +1,
        text: body?.text || ''
    }
    comments.push(newComment)
    return new Response( JSON.stringify(newComment), { status:201 } )
}