import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const loginWithGitHub = () => {
    window.location.href = "/api/auth?provider=github";
  };

  return (
    <div>
      <h1>Login ke FileVate</h1>
      <button onClick={loginWithGitHub}>Login dengan GitHub</button>
    </div>
  );
}
