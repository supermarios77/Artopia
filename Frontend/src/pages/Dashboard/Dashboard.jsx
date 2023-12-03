import { useState, useEffect } from 'react';

const Dashboard = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div>
      <h2>User Dashboard</h2>
      {user && (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <img src={user.profilePicture} alt={`${user.name}'s Profile`} />
          <p>UserID: {user._id}</p>
          <p>Followers: {user.followers.length}</p>
          <p>Following: {user.following.length}</p>
          <p>Posts: {user.feed.length}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;