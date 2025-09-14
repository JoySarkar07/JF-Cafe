import Login from '../components/Login';

function LoginPage({ setUser }) {
  return (
    <div className>
      <Login setUser={setUser} />
    </div>
  );
}

export default LoginPage;