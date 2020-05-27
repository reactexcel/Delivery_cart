const MenuCategory = (props) => {
  return (
    <nav
      className="nav sticky-top"
      style={{
        backgroundColor: "white",
        whiteSpace: "nowrap",
        overflowX: "auto",
        fontSize: "13px",
        padding: "14px 40px",
        borderBottom: "1px solid rgb(204, 204, 204)",
      }}
    >
      {props.categories
        ? props.categories.map((category) => (
            <a
              key={category}
              className="nav-link"
              href={`#${category}`}
              style={{
                display: "inline-block",
                float: "none",
                color: "#171717",
                fontWeight: "400",
              }}
            >
              {category}
            </a>
          ))
        : null}

      <style jsx>
        {`
          .nav {
            flex-wrap: initial;
          }
        `}
      </style>
    </nav>
  );
};

export default MenuCategory;
