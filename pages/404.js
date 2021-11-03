import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className='text-danger text-center position-absolute top-50 start-50 translate-middle'>
      <h3>Ooops ... requesting page cannot be found </h3>
      <p>
        {' '}
        Going back to the{' '}
        <Link href='/'>
          <a>Home </a>
        </Link>{' '}
        in 5 seconds...
      </p>
    </div>
  );
};

export default NotFound;
