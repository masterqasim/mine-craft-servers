import React, { useRef, useState ,useEffect} from "react";
import Layout from "../../components/layout";
import { useRouter } from 'next/router'

const ServerDetail = () => {
  const [data, setData] = useState(null);
  const [serverInfo, setServerInfo] = useState(null);
  const router = useRouter()
  useEffect(()=>{
      // const {id} = router.query
      
      console.log(router)
      async function fetchData() {
        const response = await fetch(`http://localhost:3002/v1/servers/servers/${router.query.serverId}`);
        const json = await response.json();
        setData(json[0]);
        setServerInfo(json[1]);

        console.log(json)
    }
    fetchData();

    },[])

  return (
    <Layout>
      {!data?.name?
        <p>no data found</p>
      :
      <div className="w-9/12 flex lg:flex-row flex-col mx-auto mb-5 justify-around">
        <div className="lg:w-7/12 w-full">
          <h1 className="text-black text-4xl mt-10 font-thin mb-6">
            Server Name
          </h1>
          <hr />
          <iframe
            className="mt-10"
            width="100%"
            height="339"
            src={`${data.youtubeVideo}`}
            title="I Survived 100 Days in Minecraft PRISON..."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            hassant5aza
            b
          ></iframe>
          <div className="text-black mt-10 ">
            <p>
             {data.description}
            </p>
          </div>
        </div>
        <div className="lg:w-4/12 md:w-full">
          <button className="bg-[#2780E3] w-full px-10 mt-10 text-xl py-5">
            Vote for this server
          </button>
          <div className=" border w-full mt-5 text-black">
            <div className="p-5 border-b">
              <h3 className="text-xl font-thin">Website</h3>
              <a href={`${data.website}`} target='_blank'>
              Click to visit servers Website
              </a>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-thin">IP Address</h3>

              <div className="mb-3 flex">
                <span className="border px-4 py-2 text-lg text-black text-base bg-gray-100"></span>
                <input
                  readOnly
                  value={`${data.ip}`}
                  type="text"
                  className="w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300"
                  placeholder="Example label"
                />
              </div>
            </div>
          </div>
          <div className="border w-full mt-5 text-black">
            <div className="p-3 flex justify-between border-b ">
              <p>Players</p>
              <span className="px-2 bg-[#2780E3] rounded-full text-white">
              {serverInfo?.players?.online}/{serverInfo?.players?.max}
              </span>
            </div>
            <div className="p-3 flex justify-between border-b">
              <p>Version</p>
              <span className="px-2 bg-[#2780E3] rounded-full text-white">
              {serverInfo?.version}
              </span>
            </div>
            {/* <div className="p-3 flex justify-between border-b">
              <p>Uptime</p>
              <span className="px-2 bg-[#2780E3] rounded-full text-white">
                88.5%
              </span>
            </div>
            <div className="p-3 flex justify-between border-b">
              <p>Last Ping</p>
              <span className="px-2 bg-[#2780E3] rounded-full text-white">
                1 day
              </span>
            </div> */}
            <div className="p-3 flex justify-between ">
              <p>Votes</p>
              <span className="px-2 bg-[#2780E3] rounded-full text-white">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
      }
    </Layout>
  );
};

export default ServerDetail;
