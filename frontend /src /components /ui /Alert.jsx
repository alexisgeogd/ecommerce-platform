import { XMarkIcon } from '@heroicons/react/24/solid';

export default function Alert({ variant = 'info', message, onClose }) {
  const variantClasses = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className={`p-4 rounded-md ${variantClasses[variant]} flex justify-between items-center`}>
      <span>{message}</span>
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-2 p-1 rounded-full hover:bg-opacity-20 hover:bg-current"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
