import React, { useEffect, useState } from 'react';
import LendersSideNav from '../../../Components/Auth/Dashboard/side-navbar/LendersSideNav';
import LendersNavbarVerify from '../../../Components/Auth/Dashboard/header-navbar/LendersNavbarVerify';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';
import { useNavigate } from 'react-router-dom/dist';

const LendersDashboardSix = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [authloading, setAuthloading] = useState(true);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');

      return;
    }
    setUser(response);
    setLoading(false);
    setAuthloading(false);
  }, [navigate]);

  if (authloading) {
    return;
  }

  // return key
  return (
    <div className='lg:flex w-full'>
      <LendersSideNav user={user} loading={loading} />
      <section>
        <LendersNavbarVerify user={user} loading={loading} />
        {/* body */}
        <div className='flex'>
          <div class='bg-white h-[170px] w-80 py-auto px-8 rounded-lg shadow-md mt-40 mx-40 text-center items-center'>
            <img
              src='https://ik.imagekit.io/b6b9xwu9l/tick.png?updatedAt=1700853144975'
              alt=''
              className='mx-auto'
            />
            <h1 class='font-bold text-3xl mt-2'>Sucessful!</h1>
            {/* <p>
              Your loan has been successfully Listed 
            </p> */}
          </div>

        </div>

        <FooterDashboard />
      </section>
    </div>
  );
};

export default LendersDashboardSix;
