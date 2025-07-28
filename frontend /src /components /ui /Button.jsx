import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  ...props
}) {
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`rounded-md font-medium transition-colors 
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
        ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center">
          <ArrowPathIcon className="h-4 w-4 mr-2 animate-spin" />
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
