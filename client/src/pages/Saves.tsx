import { useState, useEffect } from "react";
import { SavedCatCard } from "../components/SavedCatCard";

interface Cat {
  id: string;
  tags: string[];
  mimetype: string;
  createdAt: string;
  notes?: string;
}

function Saves() {
  const [savedCats, setSavedCats] = useState<Cat[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 18;
  const [hasMoreCats, setHasMoreCats] = useState<boolean>(true);

  const backendApiUrl =
    process.env.NODE_ENV === "production"
      ? "https://catyaw.vercel.app/api"
      : "http://localhost:5000/api";

  const fetchSavedCats = async () => {
    try {
      const response = await fetch(`${backendApiUrl}/`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: Cat[] = await response.json();
      setSavedCats(data);
      setHasMoreCats(data.length === limit);
    } catch (err: any) {
      console.error("Failed to fetch saved cats:", err);

      setSavedCats([]);
    }
  };

  useEffect(() => {
    fetchSavedCats();
  }, []);

  const handleDeleteCat = async (catId: string) => {
    try {
      const response = await fetch(`${backendApiUrl}/${catId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! Status: ${response.status}`
        );
      }
      alert("😻 Cat deleted successfully!");
      fetchSavedCats();
    } catch (err: any) {
      console.error("Error deleting cat:", err);
      alert(`😿 Failed to delete cat: ${err.message || "Unknown error"}`);
    }
  };

  const handleUpdateNotes = async (catId: string, newNotes: string) => {
    try {
      const response = await fetch(`${backendApiUrl}/${catId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes: newNotes }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! Status: ${response.status}`
        );
      }
      alert("📝 Cat notes updated successfully!");
      fetchSavedCats();
    } catch (err: any) {
      console.error("Error updating cat notes:", err);
      alert(`😿 Failed to update notes: ${err.message || "Unknown error"}`); // Error message
    }
  };

  useEffect(() => {
    fetchSavedCats();
  }, [currentPage, limit]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <div className="flex flex-col items-center my-8 mx-4 md:mx-0">
      <p className="my-8 text-4xl font-semibold">Saves</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {savedCats.map((cat) => (
          <SavedCatCard
            key={cat.id}
            cat={cat}
            onDelete={handleDeleteCat}
            onUpdateNotes={handleUpdateNotes}
          />
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

export default Saves;
