import React from "react";
import p1 from "../../assets/img/1.jpg";
import p2 from "../../assets/img/2.jpg";
import p3 from "../../assets/img/3.jpg";
import p4 from "../../assets/img/4.jpg";
import p5 from "../../assets/img/5.jpg";
import p6 from "../../assets/img/banner.jpg";
import { useNavigate } from "react-router-dom";

const FullGallery = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="md:w-3/4 mx-auto">
        <div className="mx-auto py-5">
          <div className="">
            <img
              src="https://templates.microweber.com/wedding/userfiles/templates/wedding/assets/img/decoration-3.svg"
              style={{ maxHeight: "40px", maxWidth: "500px", margin: "auto" }}
            />
          </div>
        <button type="button" className="my-4 bg-theme text-white font-semibold py-4 px-9 focus:outline-none rounded-full border hover:bg-white hover:text-black hover:border-theme" onClick={() => {navigate('/')}}>Back To Wedding</button>

        </div>
      </div>{" "}
      <div className="container w-3/4 my-5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="box w-full break-inside-avoid">
          <img src={p1} className="max-w-full rounded-2xl" />
        </div>
        <div className="box w-full break-inside-avoid">
          <img src={p2} className="max-w-full rounded-2xl" />
        </div>
        <div className="box w-full break-inside-avoid">
          <img src={p3} className="max-w-full rounded-2xl" />
        </div>
        <div className="box w-full break-inside-avoid">
          <img src={p4} className="max-w-full rounded-2xl" />
        </div>
        <div className="box w-full break-inside-avoid">
          <img src={p5} className="max-w-full rounded-2xl" />
        </div>
        <div className="box w-full break-inside-avoid">
          <img src={p6} className="max-w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default FullGallery;
