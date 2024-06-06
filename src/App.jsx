import React from "react";
import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function App() {
  const [suClicked, setSuClicked] = useState(false);
  const [siClicked, setSiClicked] = useState(false);

  if (suClicked) {
    return (
      <>
        <SignUp />
      </>
    );
  } else if (siClicked) {
    <>
      <SignIn />
    </>;
  }
  else
  {
    return (
      <div>
        <button onClick={setSuClicked(!suClicked)}>Sign Up</button>
        <button onClick={setSiClicked(!siClicked)}>Sign In</button>
      </div>
    );
  }

  
}
