<script>
    import Title from '$lib/heading.svelte'
    import '../styles/global.css'
</script>

<header>
    <Title title='Tiger ka hukkum' />
</header>

<main>
    <!-- page content -->
    <slot />
</main>

<footer>
    <p> Copyright 2023 Tiger ka Hukum </p>
</footer>
