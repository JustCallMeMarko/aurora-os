function Spotify() {
  return (
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2262bWmqomIaJXwCRHr13j?utm_source=generator"
        width="60%"
        height="352"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="mx-auto mt-40"
      ></iframe>
  );
}

export default Spotify;
