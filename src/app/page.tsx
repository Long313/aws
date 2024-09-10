"use client";
// import { GetServerSideProps, GetServerSidePropsContext } from "next";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

import Header from "@/components/Header/page";
import work_shop from "../images/work_shop.drawio.png";
import eye_icon from "../images/eye_icon.png";
import heart_icon from "../images/heart_icon.png";
import heart_white_icon from "../images/heart_white_icon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getPost, increaseLikeOrViewPost } from "@/service/api";
import {
  URL_API_LIKES_POST,
  URL_API_POST,
  URL_API_VIEWS_POST,
} from "@/constant";

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   const res = await fetch("https://api.example.com/data");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

function Home() {
  const router = useRouter();
  const [welcomeText, setWelcomeText] = useState("");
  const [adventureText, setAdventureText] = useState("");
  const [viewPostFirst, setViewPostFirst] = useState(1);
  const [likePostFirst, setLikePostFirst] = useState(1);
  const [isLike, setIsLike] = useState(false);

  const welcomeMessage = "Welcome to First Cloud Journey";
  const adventureMessage = "Let’s begin the adventure!";

  // Hàm để hiển thị từng chữ cái cho chuỗi
  const displayText = (message: string, setter: any, delay = 100) => {
    message.split("").forEach((char, index) => {
      setTimeout(() => {
        setter((prev: string) => message.slice(0, index + 1)); // Hiển thị đến ký tự hiện tại
      }, index * delay);
    });
  };

  useEffect(() => {
    // Hiển thị "Welcome to GitHub!" trước
    displayText(welcomeMessage, setWelcomeText);

    // Hiển thị "Let’s begin the adventure!" sau khi câu đầu hoàn tất
    setTimeout(() => {
      displayText(adventureMessage, setAdventureText);
    }, welcomeMessage.length * 100); // Độ trễ dựa trên độ dài của câu
  }, []);

  const handleIncreaseView = async () => {
    const res = await viewPost(URL_API_VIEWS_POST, "66de4a54addab3c0d0d3ffd3");
    return res;
  };
  const viewPost = async (url: string, id: string) => {
    const data = await increaseLikeOrViewPost(url, id);
    return data;
  };
  const handleIncreaseLike = async (e: any) => {
    e.stopPropagation();
    const res = await likePost(URL_API_LIKES_POST, "66de4a54addab3c0d0d3ffd3");
    return res;
  };
  const likePost = async (url: string, id: string) => {
    const data = await increaseLikeOrViewPost(url, id);
    setLikePostFirst((pre) => pre + 1);
    setIsLike(true);
    return data;
  };

  //handleIncreaseLike
  useEffect(() => {
    const handleGetPost = async (url: string, id: string) => {
      const res = await handleGetLike(url, id);
      setViewPostFirst(res.data.views);
      setLikePostFirst(res.data.likes);
    };
    handleGetPost(URL_API_POST, "66de4a54addab3c0d0d3ffd3");
  }, []);

  const handleGetLike = async (url: string, id: string) => {
    const res = await getPost(url, id);
    return res.data;
  };
  return (
    <div>
      <Header />
      <div className="mt-[70px] w-full text-center">
        {/* <h1 className="text-[30px] text-[#22a6df]">
          <span className="inline-block">Welcome to First Cl</span>
          <Image src={cloud} alt="cloud" width={30} className="inline-block" />
          <span className="inline-block">ud Journey!</span>
        </h1> */}
        <div className="flex flex-col justify-center items-center min-h-[100px]">
          <h1 className="text-4xl font-bold transition-opacity duration-500 ease-out text-[#22a6df]">
            {welcomeText}
          </h1>
          <h2 className="text-2xl font-semibold mt-5 transition-opacity duration-500 ease-out text-[#22a6df]">
            {adventureText}
          </h2>
        </div>
        <div className="w-full flex justify-center mt-[10px]">
          <div
            className="p-4 cursor-pointer flex items-center justify-center flex-col w-[528px] h-[495px] lg:w-[792px] lg:h-[742px] border-[2px] rounded-[5px]transform scale-95 hover:scale-100 transition-transform duration-300 shadow-2xl"
            onClick={() => {
              handleIncreaseView();
              router.push("/work_shop/1/introduce");
            }}
          >
            <h2 className="mt-[10px] font-bold opacity-80">
              Workshop 1 - High Availability Architecture
            </h2>
            <Image
              src={work_shop}
              alt="work_shop_1"
              className="w-[90%] h-[90%] cursor-pointer p-[10px]"
            />
            <div className="flex justify-between items-center w-full px-[46px] mt-[20px]">
              <div>
                <span className="text-[#22a6df]">Author:</span>
                <span className="ml-[6px] italic font-bold">Long Tran</span>
              </div>
              <div className="flex">
                <Image
                  src={eye_icon}
                  alt="eye-icon"
                  width={20}
                  className="mr-[2px]"
                />
                <span className="">: {viewPostFirst}</span>
                <span className="ml-[4px]">views</span>
              </div>
              <div className="flex">
                <Image
                  src={isLike ? heart_icon : heart_white_icon}
                  alt="eye-icon"
                  width={20}
                  className="mr-[2px]"
                  onClick={(e) => handleIncreaseLike(e)}
                />
                <span className="">: {likePostFirst}</span>
              </div>
              <p className="text-[#22a6df] opacity-50 hover:opacity-100 font-medium">
                View more &#8594;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
