import { useState, useEffect } from "react";

function Hero() {
  const [randomCat, setRandomCat] = useState<string>("");

  const fetchRandomCat = async () => {
    try {
      const response = await fetch(`https://cataas.com/cat?${Date.now()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setRandomCat(response.url);
    } catch (error) {
      console.error("Failed to fetch cat image:", error);
    }
  };

  useEffect(() => {
    fetchRandomCat();
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('${randomCat}')`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
