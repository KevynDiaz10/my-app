import Image from "next/image";
import React from "react";

export default function MainHome() {
  return (
    <main className="pb-28">
      <div className="flex justify-around mt-20 md:flex-row flex-col items-center">
        <div className="xl:max-w-3xl max-w-[400px]">
          <h1 className="text-[30px] font-sans text-nextui-primary font-semibold">
            Dashboard
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam incidunt molestiae dicta temporibus consequuntur odio corrupti doloribus vero nemo ullam repudiandae accusantium, asperiores commodi ea error cum explicabo earum!
          </p>
        </div>
        <div className="">
            <Image src={"/Dash.png"} alt="" width={500} height={500} className=" rounded-xl"/>
        </div>
      </div>
    </main>
  );
}
