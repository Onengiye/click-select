import "./category.style.scss";

const Category = (props) => {
  const { title, imageUrl } = props.category;
  return (
    <div className="category-container">
      <div
        className="category-container background-image "
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
