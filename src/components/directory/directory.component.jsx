import Category from "../category/category.component";

import "./directory.style.scss";

const Directory = (props) => {
  const categories = props.categories;
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
