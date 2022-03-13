import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import ReactPlayer from "react-player";

const Home: NextPage = () => {
  const router = useRouter();
  const onClick = (id: String, title: String) => {
    router.push(`/video_streaming/${id}/${title}`);
  };
  return (
    <div className="flex flex-col items-center gap-4 bg-[#181818] py-2 px-4">
      <div></div>
      {[
        {
          id: "1646150097014",
          title: "음주 우즈이 텐겐",
          subType: "ass",
          description: "x264 mp3 no filter",
          uploadDate: "2022-03-05",
          runTime: "46분",
          poster: "/yHvD7Yhaxcn0Mc3BSI0yAFVrYT8.jpg",
        },
        {
          id: "1646150099544",
          title: "유곽 잠입",
          subType: "ass",
          description: "x264 mp3 no filter",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/mTtIdiS9ntOjlBFaZxGRu5qkZdF.jpg",
        },
        {
          id: "1646150197478",
          title: "누구?",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/1pEUWW6ynwjeCthb7NqQlSMtxso.jpg",
        },
        {
          id: "1646150233175",
          title: "오늘 밤",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/oyZd3BMT8pH83PLLG07njxhKfkO.jpg",
        },
        {
          id: "1646150238735",
          title: "화려하게 가자!",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/xHobu2pJtnRePBxrvxafUHXKJNr.jpg",
        },
        {
          id: "1646150242982",
          title: "겹쳐지는 기억",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/9jSSKfsWXEPwiSz8eCMQK8St5gc.jpg",
        },
        {
          id: "1646150247294",
          title: "변모",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/6IVxJBaIAOboW9HXzx0Kr0DevAZ.jpg",
        },
        {
          id: "1646150253382",
          title: "집결",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/5UvxFzLy40MGDue1fvTDFmz2WNj.jpg",
        },
        {
          id: "1646150258505",
          title: "상현의 혈귀를 쓰러뜨리면",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/8qmQglGIAYFk3cPGONQrr3EpxQ7.jpg",
        },
        {
          id: "1646150263681",
          title: "절대 포기하지 않아",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/9vq4YJdsQ53D4CqQQumRHg6gLgg.jpg",
        },
        {
          id: "1646150270186",
          title: "몇 번을 다시 태어나도",
          subType: "ass",
          description:
            "video: x264 (anime base filter) audio: aac (2ch 48000kbps 500bitrate)",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/rO0yt4BIcSZRuIwPlK0QsyhjPZ3.jpg",
        },
        {
          id: "123",
          title: "test",
          subType: "ass",
          description:
            "필터넣은거 테스트",
          uploadDate: "2022-03-05",
          runTime: "23분",
          poster: "/rO0yt4BIcSZRuIwPlK0QsyhjPZ3.jpg",
        },
       
      ].map((item, index) => (
        <div
          key={index}
          className="flex w-full cursor-pointer rounded-b-sm border-b border-[#404040] py-6 px-5 md:w-[722px]"
          onClick={() => onClick(item.id, `${index + 1}화 ${item.title}`)}
        >
          <span className="mr-3 flex items-center text-lg text-white">
            {index + 1}
          </span>
          <div className="flex h-20 w-36 items-center justify-center bg-transparent">
            <Image
              width={227}
              height={127}
              src={`https://image.tmdb.org/t/p/w500${item.poster}`}
              alt={`${item.title} poster`}
              className="rounded-md"
            />
          </div>
          <div className="relative top-1 ml-4 w-[480px]">
            <div className="flex justify-between">
              <span className="text-base font-bold text-white">
                {item.title}
              </span>
              <span className="mt-1 text-base font-bold text-white">
                {item.runTime}
              </span>
            </div>
            <div>
              <h3 className="text-[#d2d2d2] ">
                <span>{item.description}</span>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
