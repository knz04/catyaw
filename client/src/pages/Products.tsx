import { CatCard } from "../components/CatCard";
import { useState, useEffect } from "react";

interface Cat {
  id: string;
  tags: string[];
  mimetype: string;
  createdAt: string;
}

function Products() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 18;
  const [hasMoreCats, setHasMoreCats] = useState<boolean>(true);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchCats = async () => {
    setError(null);

    try {
      const skip = (currentPage - 1) * limit;
      let apiUrl = `https://cataas.com/api/cats?limit=${limit}&skip=${skip}`;

      if (searchTerm) {
        apiUrl += `&tags=${searchTerm}`;
      }

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Cat[] = await response.json();
      setCats(data);
      setHasMoreCats(data.length === limit);
    } catch (error: any) {
      console.error("Failed to fetch cats:", error);
      setError("Failed to load cat data. Please try again.");
      setCats([]);
    }
  };

  useEffect(() => {
    fetchCats();
  }, [currentPage, limit, searchTerm]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col items-center my-8">
      <p className="my-8 text-4xl ">
        <span className="font-bold">Cat</span>alogue
      </p>

      <div className="flex justify-center w-80 lg:w-200 my-6 mb-10">
        <label className="input input-bordered flex items-center gap-2 w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow w-full"
            placeholder="Search by tag (e.g., cute, fluffy)"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </label>
      </div>

      {error && (
        <div className="alert alert-error text-center my-8 max-w-md">
          <span>{error}</span>
        </div>
      )}

      {cats.length === 0 && !error && searchTerm && (
        <div className="text-center my-8">
          <p className="text-sm text-base-content">
            No cats found for tag "{searchTerm}". Try a different tag! 😔
          </p>
        </div>
      )}
      {cats.length === 0 && !error && !searchTerm && (
        <div className="text-center my-8">
          <p className="text-sm text-base-content">
            No cats available in the catalogue. 😔
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
      <div className="join mt-10 mb-4 shadow-md">
        <button
          className="join-item btn btn-primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn btn-ghost">Page {currentPage}</button>
        <button
          className="join-item btn btn-primary"
          onClick={handleNextPage}
          disabled={!hasMoreCats}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default Products;
