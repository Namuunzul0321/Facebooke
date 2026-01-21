"use client";
import Image from "next/image";

export default function Nuur() {
  return (
    <div className="feed">
      <div className="text">How to Become a Digital Creator on Facebook</div>
      <div className="post">
        <Image
          src="/1.png"
          alt="post 1"
          width={800}
          height={600}
          className="post-img"
        />
      </div>

      <div className="post">
        <Image
          src="/2.png"
          alt="post 2"
          width={800}
          height={600}
          className="post-img"
        />
      </div>

      <div className="post">
        <Image
          src="/3.png"
          alt="post 3"
          width={800}
          height={600}
          className="post-img"
        />
      </div>
    </div>
  );
}
