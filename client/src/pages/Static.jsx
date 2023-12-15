import React from "react";

const Static = ()=>{
return (
<div>
<div>
  <div className="self-stretch flex w-full flex-col pl-12 pr-8 pb-8 max-md:max-w-full max-md:px-5">
    <div className="text-white text-center text-6xl font-extrabold leading-[81px] tracking-wider max-w-[620px] self-center mt-64 max-md:max-w-full max-md:text-4xl max-md:leading-[60px] max-md:mt-10">
      <button >Top Market Statistics</button>
    </div>
    <div className="text-white text-opacity-50 text-center text-xl font-medium leading-9 max-w-[651px] self-center mt-9 max-md:max-w-full">
      The top NFTs ranked by volume, floor price and other statistics.
    </div>
    <div className="self-center flex w-full max-w-[1242px] items-stretch justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
      <button className="text-white text-base whitespace-nowrap justify-center items-stretch bg-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] px-4 py-3.5 rounded-md">
        Marketplace Perfomence
      </button>
      <div className="items-stretch flex justify-between gap-5">
        <div className="flex items-stretch justify-between gap-5 px-5 py-4 rounded-md border-[0.3px] border-solid border-white">
          <div className="text-white text-base">Last 7 Days</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bf427677facea171a276da3f9b6f5147a39f96e93b011325dbfe8539ffc82e?"
            className="aspect-[1.67] object-contain object-center w-[15px] fill-white overflow-hidden shrink-0 max-w-full self-start"
          />
        </div>
        <div className="flex items-stretch justify-between gap-5 px-5 py-4 rounded-md border-[0.3px] border-solid border-white">
          <div className="text-white text-base">All Categories</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bf427677facea171a276da3f9b6f5147a39f96e93b011325dbfe8539ffc82e?"
            className="aspect-[1.67] object-contain object-center w-[15px] fill-white overflow-hidden shrink-0 max-w-full self-start"
          />
        </div>
      </div>
    </div>
    <div className="self-center flex w-full max-w-[1242px] items-center justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
      <div className="text-white text-center text-lg font-semibold my-auto">
        Collection
      </div>
      <div className="items-stretch self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="text-white text-center text-lg font-semibold">
          Volume
        </div>
        <div className="text-white text-center text-lg font-semibold">
          24H%
        </div>
        <div className="text-white text-center text-lg font-semibold">
          7D%
        </div>
        <div className="text-white text-center text-lg font-semibold">
          Floor Price
        </div>
        <div className="text-white text-center text-lg font-semibold">
          Owners
        </div>
        <div className="text-white text-center text-lg font-semibold">
          Items
        </div>
      </div>
    </div>
  </div>
  <div className="z-[1] flex gap-2.5 ml-9 mt-20 self-start items-start max-md:justify-center max-md:ml-2.5 max-md:mt-10">
    <div className="flex grow basis-[0%] flex-col items-stretch mt-4">
      <div className="text-white text-2xl font-bold whitespace-nowrap">
        1
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e21708b9eccda9ee0a6b32bb9c52260dfeaf10fe0ca0d4171f216ee085e97fe7?"
        className="aspect-[1.75] object-contain object-center w-[35px] overflow-hidden self-center"
      />
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-lg font-medium self-center my-auto">
      Adidas
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e4ea018e67f5025333a9faf7ff72f4b563d70c14348c89d13e14634aeca722?"
      className="aspect-[1.08] object-contain object-center w-[13px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
  </div>
  <div className="flex mt-0 items-stretch gap-2 ml-96 self-start max-md:ml-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
      27,966.76
    </div>
  </div>
  <div className="self-center z-[1] flex mt-0 items-stretch gap-2 ml-60">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium self-center my-auto">
      12.99
    </div>
  </div>
  <div className="text-green-500 text-base font-medium self-center z-[1] whitespace-nowrap -mt-3.5">
    +92.96
  </div>
  <div className="text-red-600 text-base font-medium self-center z-[1] mt-0 whitespace-nowrap ml-20">
    -16.38
  </div>
  <div className="text-white text-base font-medium mt-0 whitespace-nowrap mr-60 self-end max-md:mr-2.5">
    5.9K
  </div>
  <div className="text-white text-base font-medium z-[1] mt-0 whitespace-nowrap mr-20 self-end max-md:mr-2.5">
    10K
  </div>
</div>
<div className="self-stretch flex w-full flex-col mt-16 pb-6 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
  <div className="z-[1] flex gap-3.5 ml-4 self-start items-start max-md:justify-center max-md:ml-2.5">
    <div className="flex grow basis-[0%] flex-col items-stretch mt-4">
      <div className="text-white text-2xl font-bold whitespace-nowrap">
        2
      </div>
      <div className="flex items-stretch justify-between gap-px">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8b73ff0891436481ba78ba03f821a893c6c24079b81fff3e0e14d070b44b147?"
          className="aspect-square object-contain object-center w-[15px] fill-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5efb768e554df2a448531937bca2dfecd1adf8a9e1d1626c1531df60f42b19a?"
          className="aspect-square object-contain object-center w-[15px] fill-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] overflow-hidden shrink-0 max-w-full"
        />
      </div>
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-lg font-medium self-center my-auto">
      Nike
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e4ea018e67f5025333a9faf7ff72f4b563d70c14348c89d13e14634aeca722?"
      className="aspect-[1.08] object-contain object-center w-[13px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
  </div>
  <div className="flex items-stretch gap-2 ml-96 -mt-9 self-start max-md:ml-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
      27,966.76
    </div>
  </div>
  <div className="z-[1] flex mt-0 items-stretch gap-2 mr-96 self-end max-md:mr-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium self-center my-auto">
      12.99
    </div>
  </div>
  <div className="text-green-500 text-base font-medium self-center z-[1] whitespace-nowrap -mt-3.5">
    +92.96
  </div>
  <div className="text-red-600 text-base font-medium self-center z-[1] mt-0 whitespace-nowrap ml-24">
    -16.38
  </div>
  <div className="text-white text-base font-medium mt-0 whitespace-nowrap mr-48 self-end max-md:mr-2.5">
    5.9K
  </div>
  <div className="text-white text-base font-medium z-[1] mt-0 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
    10K
  </div>
</div>
<div className="self-stretch flex w-full flex-col mt-16 pb-6 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
  <div className="z-[1] flex justify-between gap-2.5 ml-5 self-start items-start max-md:justify-center max-md:ml-2.5">
    <div className="flex basis-[0%] flex-col items-stretch mt-4">
      <div className="text-white text-2xl font-bold whitespace-nowrap">
        3
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd0ab0e90535347e2e41ee29c916bc2b896947c8186c6662110c288a1782b0e?"
        className="aspect-square object-contain object-center w-[15px] fill-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] overflow-hidden self-center"
      />
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-lg font-medium self-center my-auto">
      Lacoste
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e4ea018e67f5025333a9faf7ff72f4b563d70c14348c89d13e14634aeca722?"
      className="aspect-[1.08] object-contain object-center w-[13px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
  </div>
  <div className="flex items-stretch gap-2 ml-96 -mt-9 self-start max-md:ml-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
      27,966.76
    </div>
  </div>
  <div className="z-[1] flex mt-0 items-stretch gap-2 mr-96 self-end max-md:mr-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium self-center my-auto">
      12.99
    </div>
  </div>
  <div className="text-green-500 text-base font-medium self-center z-[1] whitespace-nowrap -mt-3.5">
    +92.96
  </div>
  <div className="text-red-600 text-base font-medium self-center z-[1] mt-0 whitespace-nowrap ml-20">
    -16.38
  </div>
  <div className="text-white text-base font-medium mt-0 whitespace-nowrap mr-48 self-end max-md:mr-2.5">
    5.9K
  </div>
  <div className="text-white text-base font-medium z-[1] mt-0 whitespace-nowrap mr-5 self-end max-md:mr-2.5">
    10K
  </div>
</div>
<div className="self-stretch flex w-full flex-col mt-16 pb-5 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
  <div className="z-[1] flex items-start justify-between gap-2.5 ml-5 self-start max-md:justify-center max-md:ml-2.5">
    <div className="text-white text-2xl self-center whitespace-nowrap my-auto">
      4
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="aspect-square object-contain object-center w-[50px] overflow-hidden self-stretch shrink-0 max-w-full"
    />
    <div className="text-white text-lg font-medium self-center my-auto">
      Zalando
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e4ea018e67f5025333a9faf7ff72f4b563d70c14348c89d13e14634aeca722?"
      className="aspect-[1.08] object-contain object-center w-[13px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
  </div>
  <div className="flex mt-0 items-stretch gap-2 ml-96 self-start max-md:ml-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
      27,966.76
    </div>
  </div>
  <div className="z-[1] flex mt-0 items-stretch gap-2 mr-96 self-end max-md:mr-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium self-center my-auto">
      12.99
    </div>
  </div>
  <div className="text-green-500 text-base font-medium self-center z-[1] whitespace-nowrap -mt-3.5">
    +92.96
  </div>
  <div className="text-red-600 text-base font-medium self-center z-[1] mt-0 whitespace-nowrap ml-20">
    -16.38
  </div>
  <div className="text-white text-base font-medium mt-0 whitespace-nowrap mr-48 self-end max-md:mr-2.5">
    5.9K
  </div>
  <div className="text-white text-base font-medium z-[1] mt-0 whitespace-nowrap mr-5 self-end max-md:mr-2.5">
    10K
  </div>
</div>
<div className="self-stretch flex w-full flex-col mt-16 pb-5 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
  <div className="z-[1] flex items-start justify-between gap-2.5 ml-5 self-start max-md:justify-center max-md:ml-2.5">
    <div className="text-white text-2xl self-center whitespace-nowrap my-auto">
      5
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="aspect-square object-contain object-center w-[50px] overflow-hidden self-stretch shrink-0 max-w-full"
    />
    <div className="text-white text-lg font-medium self-center my-auto">
      Zara
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e4ea018e67f5025333a9faf7ff72f4b563d70c14348c89d13e14634aeca722?"
      className="aspect-[1.08] object-contain object-center w-[13px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
  </div>
  <div className="flex mt-0 items-stretch gap-2 ml-96 self-start max-md:ml-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
      27,966.76
    </div>
  </div>
  <div className="z-[1] flex mt-0 items-stretch gap-2 mr-96 self-end max-md:mr-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium self-center my-auto">
      12.99
    </div>
  </div>
  <div className="text-green-500 text-base font-medium self-center z-[1] whitespace-nowrap -mt-3.5">
    +92.96
  </div>
  <div className="text-red-600 text-base font-medium self-center z-[1] mt-0 whitespace-nowrap ml-20">
    -16.38
  </div>
  <div className="text-white text-base font-medium mt-0 whitespace-nowrap mr-48 self-end max-md:mr-2.5">
    5.9K
  </div>
  <div className="text-white text-base font-medium z-[1] mt-0 whitespace-nowrap mr-5 self-end max-md:mr-2.5">
    10K
  </div>
</div>
<div className="self-stretch flex w-full flex-col mt-16 pb-5 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
  <div className="z-[1] flex items-start justify-between gap-2.5 ml-5 self-start max-md:justify-center max-md:ml-2.5">
    <div className="text-white text-2xl self-center whitespace-nowrap my-auto">
      6
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="aspect-square object-contain object-center w-[50px] overflow-hidden self-stretch shrink-0 max-w-full"
    />
    <div className="text-white text-lg font-medium self-center my-auto">
      Cartier
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e4ea018e67f5025333a9faf7ff72f4b563d70c14348c89d13e14634aeca722?"
      className="aspect-[1.08] object-contain object-center w-[13px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
  </div>
  <div className="flex mt-0 items-stretch gap-2 ml-96 self-start max-md:ml-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
      27,966.76
    </div>
  </div>
  <div className="z-[1] flex mt-0 items-stretch gap-2 mr-96 self-end max-md:mr-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium self-center my-auto">
      12.99
    </div>
  </div>
  <div className="text-green-500 text-base font-medium self-center z-[1] whitespace-nowrap -mt-3.5">
    +92.96
  </div>
  <div className="text-red-600 text-base font-medium self-center z-[1] mt-0 whitespace-nowrap ml-20">
    -16.38
  </div>
  <div className="text-white text-base font-medium mt-0 whitespace-nowrap mr-48 self-end max-md:mr-2.5">
    5.9K
  </div>
  <div className="text-white text-base font-medium z-[1] mt-0 whitespace-nowrap mr-5 self-end max-md:mr-2.5">
    10K
  </div>
</div>
<div className="self-center flex w-full max-w-[1240px] flex-col mt-16 pb-9 px-5 max-md:max-w-full max-md:mt-10">
  <div className="z-[1] flex items-start justify-between gap-2.5 self-start max-md:justify-center">
    <div className="text-white text-2xl self-center whitespace-nowrap my-auto">
      7
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="aspect-square object-contain object-center w-[50px] overflow-hidden self-stretch shrink-0 max-w-full"
    />
    <div className="text-white text-lg font-medium self-center my-auto">
      Hermes
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e4ea018e67f5025333a9faf7ff72f4b563d70c14348c89d13e14634aeca722?"
      className="aspect-[1.08] object-contain object-center w-[13px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
  </div>
  <div className="flex mt-0 items-stretch gap-2 ml-80 self-start max-md:ml-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium grow whitespace-nowrap self-start">
      27,966.76
    </div>
  </div>
  <div className="z-[1] flex mt-0 items-stretch gap-2 mr-80 self-end max-md:mr-2.5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ae7fccf00e56e4598f1e2a831a9ce46df816ab5e5ff0e6291897a727d52ea?"
      className="aspect-[0.65] object-contain object-center w-[11px] fill-white overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-base font-medium self-center my-auto">
      12.99
    </div>
  </div>
  <div className="text-green-500 text-base font-medium self-center z-[1] whitespace-nowrap -mt-3.5">
    +92.96
  </div>
  <div className="text-red-600 text-base font-medium self-center z-[1] mt-0 whitespace-nowrap ml-20">
    -16.38
  </div>
  <div className="text-white text-base font-medium mt-0 whitespace-nowrap mr-40 self-end max-md:mr-2.5">
    5.9K
  </div>
  <div className="text-white text-base font-medium z-[1] mt-0 whitespace-nowrap self-end">
    10K
  </div>
  <div className="items-stretch self-center flex justify-between gap-5 mt-28 max-md:mt-10">
    
  </div>
</div>
</div>
);
}

export default Static