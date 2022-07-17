import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";

function Footer() {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex flex-1 flex-col flex-wrap p-2">
        {/* Store information */}
        <h1 className="text-[25px]">ZainKeepCode</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod earum
          possimus eius libero, tempore nisi consequuntur nam. Delectus sint
          recusandae, pariatur sed ut architecto obcaecati iure iusto animi
          velit inventore.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + " bg-blue-700"}>
            <Facebook />
          </div>
          <div className={socialStyle + " bg-orange-500"}>
            <Instagram />
          </div>
          <div className={socialStyle + " bg-sky-400"}>
            <Twitter />
          </div>
          <div className={socialStyle + " bg-red-600"}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="flex pl-3">State of California</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="flex pl-3">+380973186507</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined />
          <p className="flex pl-3">yura.gms@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
