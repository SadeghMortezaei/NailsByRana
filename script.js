window.addEventListener('load', function() {
    const iframes = document.querySelectorAll('.instagram-post iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            const container = iframe.closest('.instagram-post');
            if (container) {
                const iframeHeight = iframe.contentWindow.document.body.scrollHeight;
                // Aktualisiere die Höhe des Containers basierend auf der Höhe des iFrames
                container.style.height = `${iframeHeight}px`;
            }
        });
    });
});
