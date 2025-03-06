// import  { useEffect, useState } from 'react';
// import ProfilePicture from "./ProfilePicture.js";
// import CardDetails from './CArdDetails.js';
// // import styles from "../styles.css";
// export default function CardWrapper() {
//   const [flag , setFlag] = useState(false);
//   const [name, setName] = useState('John');
//   const [rollNo, setRollNO] = useState(10);
//   const [group, setGroup] = useState('B');
//   const [imageUrl, SetImgUrl] = useState('https://picsum.photos/id/237/200/300') ;

//  // useEffect with proper syntax
//  useEffect(() => {
//   console.log("Hello world");
// }, []); 

//   return (
//   <div className="card-wrapper">
//     <ProfilePicture myImage={imageUrl}/>
//     <CardDetails 
//         StdName={name}  
//         setStdName={setName}  
//         StdRollNo={rollNo}    
//         StdGroup={group}     
//       />
//   <button onClick={() => setFlag(prev => !prev)}>
//         Toggle Flag
//       </button>
//       <div>
//         <span>Flag state: {flag ? 'True' : 'False'}</span>
//       </div>  </div>
//   )
// }