import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAppSelector } from '../redux/hooks';

// Components
import Auth from '../components/Auth';

const Home: NextPage = () => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);

  const redirect = () => {
    router.push('/dashboard');
    return null;
  };

  return !auth.isLoggingIn ? <Auth /> : redirect();
};

export default Home;
