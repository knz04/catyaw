interface Cat {
  id: string;
  tags: string[];
  mimetype: string;
  createdAt: string;
}

interface CatCardProps {
  cat: Cat;
}

export function CatCard({ cat }: CatCardProps) {
  const imageUrl = `https://cataas.com/cat/${cat.id}`;

  const handleSaveCat = async () => {
    try {
      console.log(cat);
      const backendApiUrl = "http://localhost:5000/api/";

      const response = await fetch(backendApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Send the entire cat object. Your addCat function expects these fields.
        body: JSON.stringify({
          id: cat.id,
          tags: cat.tags,
          mimetype: cat.mimetype,
          createdAt: cat.createdAt, // Pass the original createdAt from Cataas
          notes: "", // Initialize notes as an empty string when saving
        }),
      });

      if (!response.ok) {
        // Handle HTTP errors (e.g., 400 Bad Request, 409 Conflict)
        const errorData = await response.json();
        if (response.status === 409) {
          alert(`🐱 ${errorData.message}`); // "Cat already saved!"
        } else {
          throw new Error(
            errorData.message || `HTTP error! Status: ${response.status}`
          );
        }
      } else {
        const savedCat = await response.json();
        console.log("Cat saved successfully:", savedCat);
        alert("😻 Cat saved successfully!");
      }
    } catch (error) {
      console.error("Error saving cat:", error);
      alert(`😿 Failed to save cat`);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={imageUrl}
          alt={`Cat with ID: ${cat.id}`}
          className="w-full h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center mb-2">
          <button className="btn btn-primary" onClick={handleSaveCat}>
            Save Cat
          </button>
        </div>
        <div className="card-actions justify-center flex-wrap gap-2">
          {cat.tags && cat.tags.length > 0 ? (
            cat.tags.map((tag) => (
              <div key={tag} className="badge badge-outline">
                {tag}
              </div>
            ))
          ) : (
            <div className="badge badge-outline">No Tags</div>
          )}
        </div>
      </div>
    </div>
  );
}
