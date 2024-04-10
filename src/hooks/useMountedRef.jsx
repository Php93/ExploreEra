import React from "react"

const useMountedRef = () => {
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    setTimeout(() => {
      mountedRef.current = true;
    });
  }, []);

  return mountedRef;
};

export default useMountedRef