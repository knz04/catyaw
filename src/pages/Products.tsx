import CatCard from "../components/CatCard";
import { useState, useEffect } from "react";

interface Cat {
  id: string;
  tags: string[];
  mimetype: string;
  createdAt: string;
}

function Products() {
  const [cats, setCats] = useState<Cat[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 18;

  const fetchCats = async () => {
    try {
      const response = await fetch(
        `https://cataas.com/api/cats?limit=${limit}&skip=0`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Cat[] = await response.json();
      setCats(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </>
  );
}

export default Products;
