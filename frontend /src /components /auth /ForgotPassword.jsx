import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('Password reset failed');
      }

      setMessage('Check your email for reset instructions');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
      
      {error && <Alert variant="error" message={error} className="mb-4" />}
      {message && <Alert variant="success" message={message} className="mb-4" />}

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-6"
        />

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          isLoading={isLoading}
        >
          Reset Password
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/login" className="text-blue-600 hover:underline">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
