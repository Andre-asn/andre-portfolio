import React, { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { sendContactForm } from '@/lib/api';

const initValues = { fullname: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const Contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const {values, isLoading, error} = state;
  const handleChange = ({target}) => setState((prev) => ({...prev, values:{...prev.values,[target.name]: target.value,},}));
  const handleSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "bottom-right",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <form id="contact" className="mt-20 md:mt-0 min-h-screen flex justify-center align-middle items-center text-white">
      <div className="bg-[#14213D] min-w-full py-14 shadow-lg rounded-lg">
      <h1 className="text-6xl pb-6 font-outfit font-normal text-center text-white">Get in <span className="text-[#FCA311] font-semibold">touch</span></h1>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {error && (
        <p className="text-center pb-4 text-red-500">
          {error}
        </p>
      )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
              <p className="text-lg font-bold mb-2">Full Name</p>
              <input required value={values.fullname} onChange={handleChange} name="fullname" type="text" className="focus:outline-none focus:rounded-md focus:ring-1 ring-[#FCA311] pl-4 text-black border w-full rounded-md border-gray-300 py-2" placeholder='Eric Winters'/>
          </div>
          <div classname="mb-4">
            <p className="text-lg font-bold mb-2">Email Address</p>
            <input required value={values.email} onChange={handleChange} name="email" type="email" className="focus:outline-none focus:rounded-md focus:ring-1 ring-[#FCA311] pl-4 text-black border w-full rounded-md border-gray-300 py-2" placeholder='example@gmail.com'/>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold mb-2">Subject</p>
          <input required value={values.subject} onChange={handleChange} name="subject" type="text" className="focus:outline-none focus:rounded-md focus:ring-1 ring-[#FCA311] pl-4 text-black border w-full rounded-md border-gray-300 py-2" placeholder='Assistance needed with a project!'/>
        </div>
          <p className="text-lg font-bold mb-2">Message</p>
          <textarea required value={values.message} onChange={handleChange} rows="11" resize="none" name="message" type="textarea" className="mb-2 max-w-[100%] max-h-[320px] min-h-[150px] focus:outline-none focus:rounded-md focus:ring-1 ring-[#FCA311] pl-4 text-black border w-full rounded-md border-gray-300 py-2" placeholder='Hi, I am seeking a developer to help me with a project, give me a call!'/>
        <Button className="text-white cursor-pointer w-full shadow-lg text-lg font-bold mt-2 py-3 rounded" _hover={{bg:"#FCA311"}} colorScheme="#FCA311" variant="outline" onClick={handleSubmit} isLoading={isLoading} type="submit">
            Send
          </Button>
        <div className="absolute justify-center align-middle content-center bottom-0 left-0">
          <p className="text-sm text-gray-500">
          Designed & Developed by Andre Santiago-Neyra.
          </p>
        </div>
      </div>
      </div>
    </form>
  );
};

export default Contact;
