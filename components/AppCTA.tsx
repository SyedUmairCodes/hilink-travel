import Button from "./Button";
import Image from "next/image";
export const AppCTA = () => {
  return (
    <section className="flexCenter flex-col w-full pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex flex-1 flex-col items-start justify-center gap-12 w-full">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Download the App Now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available for both Android and iOS.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};
