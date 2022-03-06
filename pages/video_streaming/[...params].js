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
  const videoSource = `http://${process.env.VIDEO_SERVER_IP}:3000/${id}/output.m3u8`;
  console.log(videoSource)
  return (
    <div className="bg-black">
      <div className="absolute left-10 top-12 z-20 flex items-center ">
        <Link href="/">
          <a>
            <FontAwesomeIcon icon={faChevronLeft} color="white" size="2x" />
          </a>
        </Link>
      </div>
      <header className="absolute top-5 z-10 w-screen text-center ">
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
        height={"100vh"}
        controls
      />
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  try {
    const [id, title] = params;
    return { props: { id, title } };
  } catch (error) {
    return { props: {} };
  }
}
