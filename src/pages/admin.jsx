import { useState } from "react";
import AdminSignIn from "@/components/Admin/SignIn";
import Dashboard from "@/components/Admin/Dashboard";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const AdminPage = () => {
  const [adminIsLoggedIn, setAdminIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);

  return adminIsLoggedIn ? (
    <Dashboard data={data} />
  ) : (
    <AdminSignIn
      onSignIn={(data) => {
        setData(data);
        setAdminIsLoggedIn(true);
      }}
    />
  );
};

export default AdminPage;
