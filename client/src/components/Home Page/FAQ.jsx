import { useState } from "react";

const FAQ = () => {
  const [loremIpsumIpsumValue, setLoremIpsumIpsumValue] = useState("");
  const [loremIpsumIpsum1Value, setLoremIpsumIpsum1Value] = useState("");
  const [loremIpsumIpsum2Value, setLoremIpsumIpsum2Value] = useState("");
  const [loremIpsumIpsum3Value, setLoremIpsumIpsum3Value] = useState("");
  const [loremIpsumIpsum4Value, setLoremIpsumIpsum4Value] = useState("");
  const [loremIpsumIpsum5Value, setLoremIpsumIpsum5Value] = useState("");
  return (
    <div className="relative  overflow-hidden flex flex-col items-start justify-start text-center text-21xl text-white font-poppins">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[51px] px-[198px] gap-[53px] lg:w-[1000px] md:w-[700px] sm:w-[300px] sm:gap-[60px] sm:items-center sm:justify-start sm:pr-[110px] sm:box-border">
        <div className="w-[417px] h-[184px] flex flex-col items-center justify-center gap-[10px]">
          <b className="w-full flex-1 relative leading-[180%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-w-[387px] max-h-[144px]">
            <p className="m-0">Freaquently Asked</p>
            <p className="m-0">Question</p>
          </b>
          <div className="flex-1 relative text-xl font-medium text-half-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[241px] max-h-[30px]">
            Wanna Ask Something?
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-between text-left text-xl text-half-white">
          <div className="flex-1 h-[250px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[50px] min-w-[277px] max-w-[586px] lg:pl-5 lg:pr-5 lg:box-border">
            <div className="self-stretch h-[50px] flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="w-[500px] shrink-0 flex flex-row items-center justify-start py-0 pr-0.5 pl-0 box-border">
                  <input
                    className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] flex-1 relative text-half-white text-left overflow-hidden text-ellipsis whitespace-nowrap"
                    placeholder="Lorem ipsum ipsum ?"
                    type="text"
                    value={loremIpsumIpsumValue}
                    onChange={(event) =>
                      setLoremIpsumIpsumValue(event.target.value)
                    }
                  />
                </div>
                <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                  +
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-half-white border-t-[1px] border-solid border-white" />
            </div>
            <div className="self-stretch h-[50px] flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <input
                  className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] relative text-half-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[535px] shrink-0 max-w-[535px] max-h-[40px]"
                  placeholder="Lorem ipsum ipsum ?"
                  type="text"
                  value={loremIpsumIpsum1Value}
                  onChange={(event) =>
                    setLoremIpsumIpsum1Value(event.target.value)
                  }
                />
                <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                  +
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-half-white border-t-[1px] border-solid border-white" />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <input
                  className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] relative text-half-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[535px] shrink-0 max-w-[535px] max-h-[40px]"
                  placeholder="Lorem ipsum ipsum ?"
                  type="text"
                  value={loremIpsumIpsum2Value}
                  onChange={(event) =>
                    setLoremIpsumIpsum2Value(event.target.value)
                  }
                />
                <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                  +
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-half-white border-t-[1px] border-solid border-white" />
            </div>
          </div>
          <div className="flex-1 h-[250px] flex flex-col items-start justify-start py-0 px-2.5 box-border gap-[50px] min-w-[277px] max-w-[586px] lg:pl-5 lg:pr-5 lg:box-border">
            <div className="self-stretch h-[50px] flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <input
                  className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] relative text-half-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[535px] shrink-0 max-w-[535px] max-h-[40px]"
                  placeholder="Lorem ipsum ipsum ?"
                  type="text"
                  value={loremIpsumIpsum3Value}
                  onChange={(event) =>
                    setLoremIpsumIpsum3Value(event.target.value)
                  }
                />
                <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                  +
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-half-white border-t-[1px] border-solid border-white" />
            </div>
            <div className="self-stretch h-[50px] flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <input
                  className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] relative text-half-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[535px] shrink-0 max-w-[535px] max-h-[40px]"
                  placeholder="Lorem ipsum ipsum ?"
                  type="text"
                  value={loremIpsumIpsum4Value}
                  onChange={(event) =>
                    setLoremIpsumIpsum4Value(event.target.value)
                  }
                />
                <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                  +
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-half-white border-t-[1px] border-solid border-white" />
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <input
                  className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] relative text-half-white text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[535px] shrink-0 max-w-[535px] max-h-[40px]"
                  placeholder="Lorem ipsum ipsum ?"
                  type="text"
                  value={loremIpsumIpsum5Value}
                  onChange={(event) =>
                    setLoremIpsumIpsum5Value(event.target.value)
                  }
                />
                <div className="h-full flex-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[18.049999237060547px] max-h-[30px]">
                  +
                </div>
              </div>
              <div className="self-stretch flex-1 relative bg-half-white border-t-[1px] border-solid border-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
