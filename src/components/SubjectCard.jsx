
const SubjectCard = ({ subject, scores, darkMode, onChange }) => {
  const getScore = (type) => scores?.[type] ?? '';
  
  const calculateTotal = () => {
    const ds = parseFloat(scores?.ds || 0);
    const tp = parseFloat(scores?.tp || 0);
    const examen = parseFloat(scores?.examen || 0);
    return Number(((ds * subject.ds + tp * subject.tp + examen * subject.examen) / 100).toFixed(2));
  };

  return (
    <div className={`p-6 rounded-xl shadow-lg ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <h2 className="text-xl font-semibold mb-4">{subject.name}</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>DS ({subject.ds}%)</span>
          <input
            type="number"
            min="0"
            max="20"
            value={getScore('ds')}
            onChange={(e) => onChange(subject.id, 'ds', e.target.value)}
            className={`${darkMode && "text-black"} w-20 px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {subject.tp > 0 && (
          <div className="flex items-center justify-between">
            <span>TP ({subject.tp}%)</span>
            <input
              type="number"
              min="0"
              max="20"
              value={getScore('tp')}
              onChange={(e) => onChange(subject.id, 'tp', e.target.value)}
              className="w-20 px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <span>Exam ({subject.examen}%)</span>
          <input
            type="number"
            min="0"
            max="20"
            value={getScore('examen')}
            onChange={(e) => onChange(subject.id, 'examen', e.target.value)}
            className="w-20 px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between font-bold">
            <span>Total:</span>
            <span>{calculateTotal()}/20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;