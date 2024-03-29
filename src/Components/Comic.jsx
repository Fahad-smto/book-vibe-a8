  

const Comic = ({book}) => {
    const {title,image,author,publishDate,description,review,recommendation} =book;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
       {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p> <span className="font-bold">Author :</span> {author}</p>
    <p> <span className="font-bold">Publish date :</span> {publishDate}</p>
    <p> <span className="font-bold">Descriotion :</span> {description}</p>
    <p> <span className="font-bold">Review</span> {review}</p>
    <p> <span className="font-bold">Recommendation</span> {recommendation}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">comics</div> 
      <div className="badge badge-outline">Dramatic</div>
    </div>
  </div>
</div>
    );
};

export default Comic;