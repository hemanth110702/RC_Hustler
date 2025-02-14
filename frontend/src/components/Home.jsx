import React, { useState } from "react";

const Home = () => {
  const [power, setPower] = useState(0);

  const handlePowerChange = (event) => {
    setPower(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="number" name="power" id="power" value={power} onChange={handlePowerChange} />

        <select id="hashrate" name="hashrate">
          <option value="phs">PH/s</option>
          <option value="ths">TH/s</option>
          <option value="ghs">GH/s</option>
        </select>
      </div>
      <div>
        <div>overview table</div>
        <div>rlt based table</div>
        <div>crypto based table</div>
      </div>
    </div>
  );
};

export default Home;
