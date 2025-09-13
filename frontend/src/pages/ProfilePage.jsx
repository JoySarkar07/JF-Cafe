import CustomerProfile from '../components/CustomerProfile';

function ProfilePage({ user }) {
  if (!user) return <div className="text-center pt-20">Please login</div>;
  return (
    <div className="pt-20">
      <CustomerProfile user={user} />
    </div>
  );
}

export default ProfilePage;