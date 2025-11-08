function Article() {
  const name = "siapa";
  const title = ["Vue JS", "React JS", "Next JS"];

  return (
    <>
      <div>{name}</div>
      <div>
        {title.map((title) => {
          return (
            <>
              <div>{title}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Article;
