//rfce
import React from 'react'
import { people } from './lists/data';
import { getImageUrl } from './lists/utils';
//import { recipes } from './lists/data';

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

function PeopleList() {


    const chemists = people.filter(person =>
        person.profession === 'chemist'
      );
      const listItems = chemists.map(person =>
        <li>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      );
      return <ul>{listItems}</ul>;

    // const listItems = people.map(person =>
    //     <li key={person.id}>
    //       <img
    //         src={getImageUrl(person)}
    //         alt={person.name}
    //       />
    //       <p>
    //         <b>{person.name}</b>
    //           {' ' + person.profession + ' '}
    //           known for {person.accomplishment}
    //       </p>
    //     </li>
    //   );
    //   return <ul>{listItems}</ul>;

    // const listItems = people.map(person =>
    //     <li key={person.id}>
    //       <img
    //         src={getImageUrl(person)}
    //         alt={person.name}
    //       />
    //       <p>
    //         <b>{person.name}:</b>
    //         {' ' + person.profession + ' '}
    //         known for {person.accomplishment}
    //       </p>
    //     </li>
    //   );
    //   return (
    //     <article>
    //       <h1>Scientists</h1>
    //       <ul>{listItems}</ul>
    //     </article>
    //   );

    
}

// export default function RecipeList() {
//     return (
//         <div>
//           <h1>Recipes</h1>
//           {recipes.map(recipe =>
//             <div key={recipe.id}>
//               <h2>{recipe.name}</h2>
//               <ul>
//                 {recipe.ingredients.map(ingredient =>
//                   <li key={ingredient}>
//                     {ingredient}
//                   </li>
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>
//       );
//   }

// const poem = {
//     lines: [
//       'I write, erase, rewrite',
//       'Erase again, and then',
//       'A poppy blooms.'
//     ]
//   };
  
//   export default function Poem() {
//     let output = [];
  
//     // Fill the output array
//     poem.lines.forEach((line, i) => {
//       output.push(
//         <hr key={i + '-separator'} />
//       );
//       output.push(
//         <p key={i + '-text'}>
//           {line}
//         </p>
//       );
//     });
//     // Remove the first <hr />
//     output.shift();
  
//     return (
//       <article>
//         {output}
//       </article>
//     );
//   }
  

export default PeopleList
