import AdminDashboard from '../components/AdminDashboard';

function AdminPage({ user }) {
  if (!user?.isAdmin) return <div className="text-center pt-20">Access Denied</div>;
  return (
    <div className="pt-20">
      <AdminDashboard user={user} />
    </div>
  );
}

export default AdminPage;