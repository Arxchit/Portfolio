const Alert = ({ show, text, type }) => {
  if (!show) return null;

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const textColor = 'text-white';

  return (
    <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg ${bgColor} ${textColor} font-semibold shadow-lg`}>
      {text}
    </div>
  );
};

export default Alert;
