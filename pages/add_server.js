import React, { useRef, useState } from "react";
import Layout from "../components/layout";
import Reaptcha from "reaptcha";

const AddServer = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);
  console.log(captchaRef);
  const verify = () => {
    // captchaRef.current.getResponse().then((res) => {
    //   setCaptchaToken(res);
    // });
  };

  return (
    <Layout>
      <div className=" md:w-9/12 w-11/12 mx-auto mb-5">
        <h1 className="text-black text-4xl mt-10 font-thin mb-6">Add Server</h1>
        <hr />
        <div className="md:w-8/12 mx-auto mt-10 bg-gray-100 px-4 py-4 border">
          <h1 className="text-black text-2xl  mb-3">Server Setup</h1>
          <hr className="bg-gray-300" />
          <div className=" bg-[#9954BB] p-5 mt-5">
            <p>
              Please do not add servers if you are not the owner/admin. If
              you're having any problems, feel free to contact us.
            </p>
            <hr className="bg-purple-900 my-5 h-[0.7px] border-0" />
            <p>
              ⚠️ We DO NOT accept free hosted servers like Aternos, ServerPro,
              Minehut, Freemcserver, FalixNodes, etc...
            </p>
            <hr className="bg-purple-900 my-5 h-[0.7px] border-0" />
            <p>
              Adding your server multiple times under different IP's IS NOT
              allowed and will likely be deleted without notice.
            </p>
          </div>
          <div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">Name</label>
              <input
                type="text"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">IP Adress</label>
              <input
                type="text"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">
                Categories/Tag (At Least 1 REQUIRED! )
              </label>
              <input
                type="text"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">Country</label>
              <input
                type="text"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">Website</label>
              <input
                type="text"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">
                Banner (Optional)
              </label>
              <input type="file" className="p-2 w-full text-black  mt-1" />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">
                Youtube Video
              </label>
              <input
                type="text"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">
                Description (REQUIRED!)
              </label>
              <textarea
                type="text"
                rows={5}
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <form>
              <Reaptcha
                sitekey="6LdBugEkAAAAAA1uMkOS6Zd-9S1BsAJ5jZejapBN"
                ref={captchaRef}
                onVerify={verify}
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AddServer;
