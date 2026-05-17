import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "./Loading";

export const AppLayout = () => {

  const navigation=useNavigation();
  //console.log(navigation);
  if(navigation.state==="loading") return <Loading/>
  return (
    <>
 <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
};