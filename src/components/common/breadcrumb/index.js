import "./breadcrumb.scss";
export const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb " className="app-breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          Library
        </li>
      </ol>
    </nav>
  );
};
