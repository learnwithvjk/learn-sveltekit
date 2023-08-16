<script> 
    import { goto } from '$app/navigation'
    let url = ''
</script>

<div class="index"> 
    <h2> Main Page </h2>
    <a href="/login"> go to Login page</a>
    <br />
    <a href="/register"> go to Register page</a>
    <br />
    <a href="/about"> go to about</a>
    <br />
    <a href="/blogs"> go to blogs</a>
    <br />
    <a href="/products"> go to products</a>
    <br />
    <input type="text" bind:value="{url}" />
    <button on:click={() => goto(url)}> go to page </button>
</div>

<style> 
.index {
    text-align: center;
    margin:20px auto;
}
</style>