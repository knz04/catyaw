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
          <button className="btn btn-primary">Save Cat</button>
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
