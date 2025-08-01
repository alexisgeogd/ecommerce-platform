export default function Input({
  type = 'text',
  label,
  error,
  className = '',
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full px-3 py-2 border rounded-md 
          ${error ? 'border-red-500' : 'border-gray-300'}
          focus:outline-none focus:ring-2 
          ${error ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
          ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
