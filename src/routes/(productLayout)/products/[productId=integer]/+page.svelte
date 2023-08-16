<script> 
import {page} from '$app/stores'
const currentRoute = $page.url.href
const productId = $page.params.productId
function getItemRoute(id) {
    return `${currentRoute}/items/${id}`
}
</script>

<h1> Product Page {productId} </h1>

<ul>
    <li> 
        <a href="{getItemRoute(1)}"> Item 1 </a>
    </li>
</ul>