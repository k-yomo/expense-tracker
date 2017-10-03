import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage';

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
