import { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  image?: string;
  holder?: string;
}

export default function LazyImage({ src, alt = "", image = "", holder = "" }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className={`${holder} inline-block bg-gray-200 animate-pulse`}>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${image} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={loaded ? {} : { position: "absolute", width: 0, height: 0, opacity: 0 }}
      />
      
    </>
  );
};
