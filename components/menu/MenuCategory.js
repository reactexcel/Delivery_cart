const MenuCategory = (props) => {
  return (
    <div 
      className="sticky-top bg-white"
    style={{
      borderBottom: "1px solid rgb(204, 204, 204)",
    }}>
    <nav
      className="nav container text-uppercase"
      style={{
        whiteSpace: "nowrap",
        overflowX: "auto",
        fontSize: "13px",
        padding: "14px 0px",
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
                fontWeight: "600",
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
    </div>
  );
};

export default MenuCategory;
