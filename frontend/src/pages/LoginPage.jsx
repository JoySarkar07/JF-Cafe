import Login from '../components/Login';

function LoginPage({ setUser }) {
  return (
    <div className="pt-20">
      <Login setUser={setUser} />
    </div>
  );
}

export default LoginPage;