import { useState } from 'react';
import SubjectCard from './components/SubjectCard';

const subjects = [
  { id: 1, name: 'Analyse', ds: 30, tp: 0, examen: 70 },
  { id: 2, name: 'Algebra', ds: 30, tp: 0, examen: 70 },
  { id: 3, name: 'Algorithme', ds: 30, tp: 0, examen: 70 },
  { id: 4, name: 'Systeme Logique', ds: 10, tp: 20, examen: 70 },
  { id: 5, name: 'Programmation', ds: 10, tp: 20, examen: 70 },
  { id: 6, name: 'Logique Formelle', ds: 30, tp: 0, examen: 70 },
  { id: 7, name: 'Multimedia', ds: 30, tp: 0, examen: 70 },
  { id: 8, name: "Systeme d'exploitation", ds: 10, tp: 20, examen: 70 },
  { id: 9, name: 'Francais', ds: 50, tp: 0, examen: 50 },
  { id: 10, name: 'Anglais', ds: 50, tp: 0, examen: 50 },
];

export default function App() {

  return (
    <h1 className='bg-white text-black'>9a3ed nrake7 fel les coefficient</h1>
  )
//   const [darkMode, setDarkMode] = useState(false);
//   const [scores, setScores] = useState({});

//   const handleScoreChange = (subjectId, type, value) => {
//     const numericValue = Math.min(20, Math.max(0, Number(value)));
//     setScores(prev => ({
//       ...prev,
//       [subjectId]: {
//         ...prev[subjectId],
//         [type]: numericValue || 0,
//       }
//     }));
//   };

//   const calculateOverallScore = () => {
//     const totals = subjects.map(subject => {
//       const subScores = scores[subject.id] || {};
//       const ds = subScores.ds || 0;
//       const tp = subScores.tp || 0;
//       const examen = subScores.examen || 0;
//       return Math.round((ds * subject.ds + tp * subject.tp + examen * subject.examen) / 100);
//     });
//     const average = totals.reduce((acc, total) => acc + total, 0) / subjects.length;
//     return average.toFixed(2);
//   };

//   const resetScores = () => setScores({});

//   return (
//     <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold">Score Calculator</h1>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//           >
//             {darkMode ? '☀️ Light' : '🌙 Dark'}
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {subjects.map(subject => (
//             <SubjectCard
//               key={subject.id}
//               subject={subject}
//               scores={scores[subject.id] || {}}
//               darkMode={darkMode}
//               onChange={handleScoreChange}
//             />
//           ))}
//         </div>

//         <div className={`mt-8 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-blue-100'} transition-colors`}>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-semibold">
//               Overall Weighted Score: {calculateOverallScore()}
//             </h2>
//             <div className="space-x-4">
//               <button
//                 onClick={resetScores}
//                 className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
//               >
//                 Reset
//               </button>
//             </div>
//           </div>
//           <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//             Made it by Ayoub ben ismain
//           </p>
//           <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//             Ken 7atit akther ml 5 f analyze rak tekdheb
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

}