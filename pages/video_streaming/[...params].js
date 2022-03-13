import React from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
/* interface videoObj {
  id: String;
  title: String;
} */

export default function video_streaming({ id, title }) {
  const videoSource = `https://localhost:3000/${id}/output.m3u8`;

  return (
    <div className="h-screen bg-black">
      <div className="absolute left-10 top-12 z-20 flex items-center ">
        <Link href="/">
          <a>
            <FontAwesomeIcon icon={faChevronLeft} color="white" size="2x" />
          </a>
        </Link>
      </div>
      <header className="absolute top-12 z-10 w-screen text-center ">
        <div>
          <span className="text-xl font-bold text-white  duration-300  hover:ease-in ">
            {title}
          </span>
        </div>
      </header>
      <ReactPlayer
        key={id}
        url={videoSource}
        playing={true}
        width={"100%"}
        height={"90vh"}
        controls
        onProgress={(progress) => console.log(progress)}
      />
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  // 정상적으로 title 이런 것이 데이터로 들어오지 않았을때, ery처리 를 하고 404? 혹은 잘못된 페이지 입니다 를 error 로만들기 .. 플렌
  try {
    const [id, title] = params;
    return { props: { id, title } };
  } catch (error) {
    return { props: {} };
  }
}
