import howtouse from "../assets/howtouse.png";

function HowToCatyaw() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-x-12 py-20">
      <div className="flex flex-col justify-center items-center h-[50vh]">
        <h3 className="text-5xl font-bold mb-10">How to Use Catyaw!</h3>
        <ul className="timeline timeline-vertical max-w-lg mx-auto">
          <li>
            <div className="timeline-start">
              <div
                className="tooltip tooltip-top"
                data-tip="Navigate to the 'Catalogue' page."
              >
                <div className="timeline-box text-2xl">Go to Catalogue</div>
              </div>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
              <div
                className="tooltip tooltip-top"
                data-tip="Scroll through the cat pictures."
              >
                <div className="timeline-box text-2xl">
                  Find Your Purr-fect Match
                </div>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start">
              <div
                className="tooltip tooltip-top"
                data-tip="Add to your collection."
              >
                <div className="timeline-box text-2xl">Tap "Save Cat"</div>
              </div>
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
              <div
                className="tooltip tooltip-top"
                data-tip="Navigate to the 'Saves' page."
              >
                <div className="timeline-box text-2xl">
                  View Your Saved Treasures
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <img src={howtouse} className="rounded-2xl h-80" />
    </div>
  );
}

export default HowToCatyaw;
