"use client";
import React, { useEffect, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchPageInfo } from "@/utils/fecthPageInfo";
import { PageInfo } from "@/typings";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ }: Props) {
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
    const [ count1, setCount1] = useState(0)
    useEffect(() => {
       
        async function fetchAPI() {
            setCount1(count1 + 10)
            const data = await fetchPageInfo()
            // console.log(data);
             setPageInfo(data)
        }
      fetchAPI()
        
        
        },[])
        
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {window.location.href = `mailto:naveedislam545@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.email}.${formData.message}`;}

  return (
    <div className="h-screen   relative flex-col flex text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className=" absolute top-[5rem] uppercase tracking-[20px] text-gray-500 text-xl">
        Contact
      </h3>
      <div className="  md:mt-[10rem] mt-[4rem] w-4/5  flex flex-col space-y-0 md:space-y-10">
        <h4 className="text-2xl md:text-5xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline"> Lets Talk</span>
        </h4>
        <div className="md:space-y-10 space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-2xl">{ pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-2xl"> { pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-2xl"> { pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:w-fit -mx-7   md:mx-auto"
        >
          <div className="mt-5 flex md:flex-row flex-col md:space-y-0 space-y-2 md:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput  "
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 text-black font-bold text-lg rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
