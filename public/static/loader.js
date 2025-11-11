function submitSearch(event) {
  event.preventDefault();
  const query = document.getElementById('uv-address').value.trim();
  let embedUrl = '';

  if (query) {
    function isValidUrl(str) {
      try {
        new URL(str);
        return true;
      } catch {
        return false;
      }
    }
    if (isValidUrl(query)) {
      embedUrl = `/static/youtube-embed.html#https://${encodeURIComponent(query)}`;
    } else {
      embedUrl = `/static/youtube-embed.html#https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }

    window.location.href = `/prox.html?embedUrl=${encodeURIComponent(embedUrl)}`;
  }
}
