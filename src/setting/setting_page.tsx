import React from "react";
import useReactRouter from "use-react-router";

function SettingPage() {
  const { history, location } = useReactRouter();
  return (
    <div>
      <div>Setting Page</div>
      <div>{`pathname: ${location.pathname}`}</div>
      <div onClick={() => history.push("/")}>home</div>
    </div>
  );
}

export default SettingPage;
