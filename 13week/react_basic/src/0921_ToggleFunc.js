import { useState } from "react";

export default function ToggleFunc() {

  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    if (status === false) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }
  return <div>
    <h1>검정색 글씨</h1>
  </div>
}