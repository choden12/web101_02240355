import React from 'react';
import './StatsDashboard.css'

function StatsDashboard({ stats }) {
  return (
    <div className="stats-dashboard">
      <div className="stat">
        <span className="stat-value">{stats.posts}</span>
        <span className="stat-label">Posts</span>
      </div>
      <div className="stat">
        <span className="stat-value">{stats.followers}</span>
        <span className="stat-label">Followers</span>
      </div>
      <div className="stat">
        <span className="stat-value">{stats.following}</span>
        <span className="stat-label">Following</span>
      </div>
    </div>
  );
}

export default StatsDashboard;