import Button from "@/components/button";
import TopNav from "@/components/topNav";

const Page = () => {
  return (
    <>
      <TopNav />
      <div className="LoginCard">
        <p>Login</p>
        <p>For login, no registration is necessary.</p>
        <input type="text" />
        <Button
          title="Sign in"
          customClass="btn btn-active btn-txt mx-468"
          onClick={() => {
            alert();
          }}
        />
        <Button
          title="Login with Google"
          customClass="btn btn-bord btn-txt mx-468"
          onClick={() => {
            alert();
          }}
          icon="google"
        />
      </div>
    </>
  );
};

export default Page;
