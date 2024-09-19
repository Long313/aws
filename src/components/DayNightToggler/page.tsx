import React, { useState } from "react";
import "./dark_mode.css";
import Image from "next/image";
import sun_icon from "../../images/sun_icon.png";
import moon_icon from "../../images/moon_icon.png";
import useBearStore from '../../app/store/store';

const DayNightToggler: React.FC<any> = () => {
  // State để lưu trữ trạng thái bật/tắt (ngày/đêm)
  const [isNight, setIsNight] = useState(false);
  const {setMode} = useBearStore();


  // Hàm để xử lý khi checkbox được thay đổi
  const handleToggle = () => {
    setIsNight(!isNight);
    setMode(!isNight);
  };

  return (
    <div className={`container ${isNight ? "night" : "day"}`}>
      <div className="btn">
        <input
          type="checkbox"
          name="check"
          id="check"
          checked={isNight}
          onChange={handleToggle}
        />
        <label htmlFor="check">
          <div className="box">
            <div className={`ball ${isNight ? "night" : "day"}`}></div>
          </div>
          <div className="scenary relative flex items-center">
            {isNight ? (
              <div className="moon absolute w-full h-full flex justify-center items-center">
                  <Image
                    src={moon_icon}
                    alt="moon_icon"
                    className="inline-block h-[60%] w-[60%]"
                  />
              </div>
            ) : (
              <div className="sun absolute w-full h-full flex justify-center items-center">
                <Image
                  src={sun_icon}
                  alt="sun_icon"
                  className="inline-block h-[70%] w-[70%]"
                />
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default DayNightToggler;
