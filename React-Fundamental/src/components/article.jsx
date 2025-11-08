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

function Article(props) {
  return (
    <>
      <div>{props.title}</div>
      <small>
        Date: {props.date} , tags: {props.tags.join(", ")}
      </small>
    </>
  );
}

export default Article;
