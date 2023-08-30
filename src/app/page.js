import Image from 'next/image'
import img1 from "/public/images/짱_1.png";
export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      Hello, WEB !!
      {/* 해당 이미지를 따로 import 하지 않으면 widh, height를 반드시 지정해야한다. */}
      <p><Image src="/images/zzang_1.png" width={100} height={100} /></p>
      <p><Image src={img1} alt="" width={100} height={100} /></p>
    </>
    
  );
}
