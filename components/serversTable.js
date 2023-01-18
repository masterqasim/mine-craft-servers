import React from "react";

const ServersTable = () => {
  return (
    <>
      <div className="flex flex-col mt-5">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border text-black bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm hidden md:block font-medium  py-4 w-1/12"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text py-4 border-r border-l px-3 w-full"
                    >
                      Featured Server
                    </th>
                    <th
                      scope="col"
                      className="text-sm hidden md:block font-medium px-7 py-4 border-r"
                    >
                      About
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array(5)
                    .fill("1")
                    .map((val, i) => {
                      return (
                        <tr className="bg-white border">
                          <td className="hidden md:block py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {i + 1}
                          </td>
                          <td className="text-sm px-3 text-gray-900 font-light py-4 whitespace-nowrap border">
                            <img className="lazy mb-3 flex" itemprop="image" height="60" width="468" alt="👽 top.opblocks.com | OPBlocks " title="" src="https://topminecraftservers.org/banners/13709.gif?v=1669896196" data-original="/banners/19530.gif?v=1673317648" data-toggle="tooltip" data-original-title="👽 top.opblocks.com | OPBlocks " style={{display: 'inline'}}/>
                            <div className="mb-3 flex">
                              <span className="border px-4 py-2 text-lg text-black text-base bg-gray-100">
                                IP:
                              </span>
                              <input
                                readOnly
                                value={"play.wumpussmp.ga"}
                                type="text"
                                className="w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300"
                                placeholder="Example label"
                              />
                              <button className="border text-white px-4 py-2 bg-[#2780E3]">
                                Copy!
                              </button>
                            </div>
                          </td>
                          <td className="text-sm hidden md:block text-gray-900 font-light px-2 py-4 whitespace-nowrap border">
                            <div className="flex  justify-between">
                              <div className="border p-8">
                                <p>Players Online</p>
                                <p className="font-bold text-green-600 text-lg">
                                  98
                                </p>
                              </div>
                              <div className=" p-2">
                                <p className="text-[16px] font-bold">
                                  MC Version: <span>1.90</span>
                                </p>
                                <p className="text-sm font-bold">
                                  Game Modes:{" "}
                                  <span className="font-[100]">Economy</span>
                                  <span className="font-[100]">Economy</span>
                                  <span className="font-[100]">Economy</span>
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServersTable;
