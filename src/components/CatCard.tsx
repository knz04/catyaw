function CatCard({ cat }: CatCardProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Products</div>
          // map the tags above as needed
        </div>
      </div>
    </div>
  );
}

export default CatCard;
