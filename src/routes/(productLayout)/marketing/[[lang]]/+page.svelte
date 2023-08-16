<script>
    import {page} from '$app/stores';
    const {lang } = $page.params
    const message = {
        en: 'Hello',
        fr: 'French',
        es: 'Spanish'
    }
</script>

<h1> {message[lang] || message['en']  } </h1>