import PropTypes from 'prop-types'; // Import PropTypes
import Login from './auth/Login';

const Dashboard = ({ setUser }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Login setUser={setUser} />
    </div>
  );
};

// Prop types validation
Dashboard.propTypes = {
  setUser: PropTypes.func.isRequired // Validate setUser prop as a required function
};

export default Dashboard;
