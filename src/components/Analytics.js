import React from 'react';

const Analytics: React.FC = () => {
  // Sample data for demonstration purposes
  const analyticsData = [
    { url: 'https://example.com/1', clicks: 150, createdAt: '2023-01-01' },
    { url: 'https://example.com/2', clicks: 75, createdAt: '2023-01-05' },
    { url: 'https://example.com/3', clicks: 200, createdAt: '2023-01-10' },
  ];

  return (
    <div>
      <h2>URL Analytics</h2>
      <table>
        <thead>
          <tr>
            <th>Shortened URL</th>
            <th>Click Count</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {analyticsData.map((data, index) => (
            <tr key={index}>
              <td>{data.url}</td>
              <td>{data.clicks}</td>
              <td>{data.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;