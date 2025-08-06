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

  const fetchCats = async () => {
    try {
      const skip = (currentPage - 1) * limit;
      const response = await fetch(
        `https://cataas.com/api/cats?limit=${limit}&skip=${skip}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Cat[] = await response.json();
      setCats(data);
      setHasMoreCats(data.length === limit);
    } catch (error) {
      console.error("Failed to fetch cats:", error);
      setError("Failed to load cat data. Please try again.");
      setCats([]);
    }
  };

  useEffect(() => {
    fetchCats();
  }, [currentPage, limit]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <div className="flex flex-col items-center my-8">
      <p className="my-8 text-4xl font-semibold">Cat Catalogue</p>
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
