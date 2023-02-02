import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      prompt: "login",
      appState: {
        returnTo: "/",
      },
    });
  };

  return (
    <button className="button__login" onClick={handleLogin}>
      Log In
    </button>
  );
};

//JS
// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   const handleLogin = async () => {
//     await loginWithRedirect({
//       prompt: "login",
//       appState: {
//         returnTo: "/", // aca iria /home con el repo actualizado
//       },
//     });
//   };

//   return (
//     <div>

//         <button onClick={handleLogin}>Login</button>

//     </div>
//   );
// };
// export default Login;
