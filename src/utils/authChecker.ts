import { AuthTokenName } from "./const";

export default async function getServerSideProps(ctx:any) {
  
  const authToken = ctx.req.cookies[AuthTokenName] || null;
  
    if (!authToken) {
        // Redirect to the login page if authToken is null
        return {
            redirect: {
                destination: '/login', // Specify your login page path
                permanent: false,
            },
        };
    }
    return {
      props:{}
    }
}

/*
import serverProps from '../src/utils/authChecker';
export async function getServerSideProps(ctx) {
  // do custom page stuff...
  return {
    ...await serverProps(ctx),
    ...{
      props: { junk: 347 }
    }
  };
}
*/ 