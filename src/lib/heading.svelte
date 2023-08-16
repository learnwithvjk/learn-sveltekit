<script>
    export let title = ''
</script>

<div class="title">
    <img src="static/favicon.png" width="100" height="100" alt="logo" />
    <h1>{title}</h1>
</div>

<style> 
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
    }

    .title img {
        display: inline-block;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    }
    .title h1 {
        margin-left: 10px;
    }
</style>