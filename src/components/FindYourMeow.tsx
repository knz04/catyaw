import image from "../assets/findyourmeow.jpeg";

function FindYourMeow() {
  return (
    <div className="hero bg-base-200 h-[80vh]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="w-100 md:max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Find Your Meow!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Find Cats</button>
        </div>
      </div>
    </div>
  );
}

export default FindYourMeow;
