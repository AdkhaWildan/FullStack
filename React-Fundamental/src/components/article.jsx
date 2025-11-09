// function Article() {
//   const name = "siapa";
//   const title = ["Vue JS", "React JS", "Next JS"];

//   return (
//     <>
//       <div>{name}</div>
//       <div>
//         {title.map((title) => {
//           return (
//             <>
//               <div>{title}</div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// function Article(props) {
//   return (
//     <>
//       <div>{props.name}</div>
//       <div>
//         {props.titles.map((title) => {
//           return <div>{title}</div>;
//         })}
//       </div>
//     </>
//   );
// }

const ArticleStatus = ({ isNew }) => {
  return isNew && <span> -- Baru !!!</span>;
};

const NewArticle = () => {
  return <span> -- Baru !!!</span>;
};

function Article(props) {
  return (
    <>
      <div>
        {props.title}
        {/* {props.isNew ? "(Post Terbaru)" : " "} */}

        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </div>
      <small>
        Date: {props.date} , tags: {props.tags.join(", ")}
      </small>
    </>
  );
}

export default Article;
