function Spotify() {
  return (
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2262bWmqomIaJXwCRHr13j?utm_source=generator"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="mx-auto md:mt-40 w-[60%] h-[550px] sm:h-[250px] my-5 md:h-[352px]"
      ></iframe>
  );
}

export default Spotify;
