"use client";

import {useRef, useState} from "react";

const BetalingAccordion = () => {
  const [levering, setLevering] = useState("all");
  const [leveringAktiv, setLeveringAktiv] = useState(false);
  const [betalingAktiv, setBetalingAktiv] = useState(false);

  const oplysningerRef = useRef(null);
  const leveringRef = useRef(null);
  const betalingRef = useRef(null);

  const leveringOptions = [
    {value: "all", label: "Post office/parcel locker - NordPost"},
    {value: "discount", label: "Delivery to shop"},
    {value: "discount2", label: "Home delivery (Saturday)"},
    {value: "soldout", label: "Home delivery - NordPost"},
  ];

  const selectedLevering =
    leveringOptions.find((option) => option.value === levering)?.label ??
    "All products";

  return (
    <section className="text-xl bg-white p-4 shadow-xl">
      <details ref={oplysningerRef} open>
        <summary className="text-[#2e4565] pb-4 border-b border-[#2e45652d] text-2xl font-bold rounded-t-xl cursor-pointer">
          Your Information
        </summary>
        <form className="text-md flex flex-col gap-4 text-[#2e4565] bg-[#e7eef2] p-4 rounded-b-xl">
          <legend className="flex flex-col gap-3">
            Email for order confirmation
            <input
              type="email"
              placeholder="example@mail.dk"
              className="bg-white p-2 rounded-sm text-sm border-[#a6bbc7] border focus:outline-none focus:ring-[#9FC5D9]"
            />
          </legend>

          <legend className="flex flex-col gap-3">
            Full name
            <input
              type="text"
              placeholder="FirstName LastName"
              maxLength={200}
              className="bg-white p-2 rounded-sm text-sm border-[#a6bbc7] border focus:outline-none focus:ring-[#9FC5D9]"
            />
          </legend>

          <legend className="flex flex-col gap-3">
            Phone number for updates on delivery
            <input
              type="tel"
              placeholder="12345678"
              maxLength={8}
              className="bg-white p-2 rounded-sm text-sm border-[#a6bbc7] border focus:outline-none focus:ring-[#9FC5D9]"
            />
          </legend>

          <legend className="flex flex-col gap-3">
            Adress
            <input
              type="number"
              placeholder="StreetName 12, 1234 CityName"
              className="bg-white p-2 rounded-sm text-sm border-[#a6bbc7] border focus:outline-none focus:ring-[#9FC5D9]"
            />
          </legend>

          <button
            id="betaling"
            type="button"
            onClick={() => {
              setLeveringAktiv(true);
              leveringRef.current.open = true;
              oplysningerRef.current.open = false;
            }}
            className="transition-colors duration-400 w-full bg-[#b1d1e1] hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out rounded-sm p-3 text-white"
          >
            Continue to delivery
          </button>
        </form>
      </details>
      <details ref={leveringRef}>
        <summary
          tabIndex={leveringAktiv ? 0 : -1}
          onClick={(event) => {
            if (!leveringAktiv) event.preventDefault();
          }}
          className="text-[#2e4565] py-4 border-b border-[#2e45652d] text-2xl font-bold rounded-t-xl cursor-pointer"
        >
          Delivery
        </summary>
        <div className="text-md text-[#2e4565] bg-[#e7eef2] flex flex-col gap-4 p-4 rounded-b-xl">
          <fieldset className="flex flex-col gap-2">
            <legend className="font-bold mb-4">Delivery methods</legend>

            {leveringOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLevering(option.value)}
                className={`p-4 text-left ${
                  levering === option.value
                    ? "bg-[#94b9cd] text-[#456695]"
                    : "bg-white text-[#456695] hover:bg-[#e6f0f5]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </fieldset>

          <button
            id="betaling"
            type="button"
            onClick={() => {
              setBetalingAktiv(true);
              betalingRef.current.open = true;
              leveringRef.current.open = false;
            }}
            className="transition-colors duration-400 w-full bg-[#b1d1e1] hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out rounded-sm p-3 text-white"
          >
            Use this delivery
          </button>
        </div>
      </details>
      <details ref={betalingRef}>
        <summary
          tabIndex={betalingAktiv ? 0 : -1}
          onClick={(event) => {
            if (!betalingAktiv) event.preventDefault();
          }}
          className="text-[#2e4565] py-4 border-b border-[#2e45652d] text-2xl font-bold rounded-t-xl cursor-pointer"
        >
          Payment
        </summary>
        <form className="text-md text-[#2e4565] bg-[#e7eef2] p-4 rounded-b-xl">
          <legend className="flex flex-col gap-3 p-4">
            <b>Billing adress</b> <p>StreetName 12, 1234 CityName</p>
          </legend>

          <legend className="flex flex-col p-4 gap-3">
            <b> Pay with</b>
            <div className="flex gap-1 flex-wrap">
              <div
                className="w-16 aspect-video bg-red-300 rounded-sm"
                title="KD"
              ></div>
              <div
                className="w-16 aspect-video bg-green-400"
                title="PayMobile"
              ></div>
              <div
                className="w-16 aspect-video bg-blue-300 rounded-full"
                title="Vipper"
              ></div>
              <div
                className="w-16 aspect-video bg-yellow-200 rounded-bl-xl rounded-tr-xl"
                title="ABC"
              ></div>
            </div>
          </legend>

          <legend className="flex flex-col gap-3 p-4 text-sm underline hover:text-green-900 cursor-pointer">
            Apply gift card?
          </legend>

          <legend className="flex flex-col gap-3 p-4">
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                className="bg-white size-8 p-4 rounded-xl accent-[#4c6f86] border-[#a6bbc7] border-2 focus:outline-none focus:ring-[#9FC5D9]"
              />
              <h2>I accept Løtex' Terms & conditions and privacy policy</h2>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              fuga officiis doloremque consectetur esse, enim laborum quis
              architecto distinctio laboriosam, illum dignissimos beatae eaque
              eos vitae. Qui eveniet reiciendis perspiciatis.
            </p>
          </legend>
        </form>
      </details>
    </section>
  );
};

export default BetalingAccordion;

//useRef gemmer referencen til en værdi eller et HTML-element, uden at gen-rendere komponentet, når værdien ændres
