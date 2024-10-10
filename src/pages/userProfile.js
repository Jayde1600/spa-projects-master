import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserProfile() {
  const profiles = {
    ayongewzandamase: { name: "Ayongezwa Ndamase", age: 28, role: "Front-end Developer", language: "Node.js", description: "Expert in server-side programming and API development." },
    aphiwemeslane: { name: "Aphiwe Meslane", age: 21, role: "Full-Stack Developer", language: "JavaScript", description: "Specializes in building responsive user interfaces." },
    lihlembuqu: { name: "Lihle Mbuqu", age: 27, role: "Front-End Developer", language: "React.js", description: "Loves creating full-stack web applications." },
    shuaibbehardien: { name: "Shu-Aib Behardien", age: 25, role: "DevOps Engineer", language: "Go", description: "Ensures smooth deployments and infrastructure management." },
    noxololuswazi: { name: "Noxolo Luswazi", age: 27, role: "Data Scientist", language: "Python", description: "Focuses on data analysis and machine learning." },
  };

  const { username } = useParams(); // Get the username from the URL
  const [profile, setProfile] = useState(null); // To store profile data
  const [loading, setLoading] = useState(false); // To manage loading state
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      setLoading(true);
  
      setTimeout(() => {
        setProfile(profiles[username.toLowerCase()] || null);
        setLoading(false);
      }, 1000);
    } else {
      setProfile(null); // Reset profile when no user is selected
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
   // Fetch profile data whenever the username from URL changes

  const handleSelectChange = (event) => {
    const selectedUser = event.target.value;
    navigate(`/userProfile/${selectedUser}`); // Navigate to the selected user's profile URL
  };

  return (
    <div className="Pro-display">
      <h1>User Profiles</h1>

      <label id="label-select" htmlFor="user-select">Select a user: </label>
      <select
        id="user-select"
        value={username || ""}
        onChange={handleSelectChange}
        style={{ backgroundColor: "transparent", color: "#fff", padding: "10px", borderRadius: "5px" }}>
        <option style={{ color: "black", fontWeight: "bold" }} value=""> Select a User </option>
        {Object.keys(profiles).map((username) => (
          <option style={{ color: "black" }} key={username} value={username}>
            {profiles[username].name}
          </option>
        ))}
      </select>

      {/* Display profile information based on the selected user */}
      {loading ? (
        <p className="loader">Loading profile...</p>
      ) : profile ? (
        <div className="info-code">
          <h2>{profile.name}</h2>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Role:</strong> {profile.role}</p>
          <p><strong>Coding Language:</strong> {profile.language}</p>
          <p><strong>Description:</strong> {profile.description}</p>
        </div>
      ) : (
        username && <p>User not found.</p>
      )}
    </div>
  );
}

export default UserProfile;
