import React from "react";
import { LuCalendarHeart } from "react-icons/lu";

const Blog = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl font-bold text-[#0F0F0F]">Blogs</h1>
        <p className="text-lg text-center text-[#0F0F0FB3]">
          let's explore more basic concept that will you a good Developer.
          Mastering the fundamentals builds <br /> a strong foundation, making
          it easier to understand advanced topics.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10">
        <div className="border-none rounded-2xl p-10 bg-[#09982F1A]">
          <h1 className="text-2xl font-bold text-[#0F0F0F]">
            What is useState and how does it work in React?
          </h1>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="text-xl">
            <span className="text-[#09982F] text-2xl font-bold">Answer : </span>
            <br />
            useState is a React Hook that allows functional components to manage
            local state. It returns a state variable and a function to update
            that variable. When the update function is called, React re-renders
            the component with the new state value.
          </p>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="flex gap-3 text-xl">
            <LuCalendarHeart />
            Added At 2023-04-12
          </p>
        </div>
        <div className="border-none rounded-2xl p-10 bg-[#09982F1A]">
          <h1 className="text-2xl font-bold text-[#0F0F0F]">
            What is the purpose of useEffect in React?
          </h1>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="text-xl">
            <span className="text-[#09982F] text-2xl font-bold">Answer : </span>
            <br />
            The purpose of useEffect in React is to handle side effects in
            functional components, such as fetching data, updating the DOM, or
            setting up subscriptions. It runs after the component renders and
            can be configured to run only when certain values change.
          </p>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="flex gap-3 text-xl">
            <LuCalendarHeart />
            Added At 2024-04-12
          </p>
        </div>
        <div className="border-none rounded-2xl p-10 bg-[#09982F1A]">
          <h1 className="text-2xl font-bold text-[#0F0F0F]">
            What is a custom hook in React and when should you use one?
          </h1>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="text-xl">
            <span className="text-[#09982F] text-2xl font-bold">Answer : </span>
            <br />
            A custom hook in React is a reusable function that starts with use
            and uses built-in hooks like useState, useEffect, etc., to
            encapsulate and share logic across multiple components. You should
            use a custom hook when: <br />
            1.You have logic that is repeated in multiple components. <br />
            2.You want to keep components clean and readable by moving complex
            logic out of them.
          </p>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="flex gap-3 text-xl">
            <LuCalendarHeart />
            Added At 2025-09-12
          </p>
        </div>
        <div className="border-none rounded-2xl p-10 bg-[#09982F1A]">
          <h1 className="text-2xl font-bold text-[#0F0F0F]">
            Difference between controlled and uncontrolled components. Which one
            is better?
          </h1>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="text-xl">
            <span className="text-[#09982F] text-2xl font-bold">Answer : </span>
            <br />
            <span className="text-2xl">Controlled :</span> Controlled components
            are React components where the form data is managed by React state,
            giving React full control over the input values. <br />
            <span className="text-2xl">Uncontrolled :</span>Uncontrolled
            components rely on the DOM to manage their form data, and values are
            accessed using refs instead of state. <br />
            <span className="font-bold">
              Controlled components are generally better for most use cases
              because they:
            </span>
            <li>Keep data in sync with UI</li>
            <li>Make form validation and dynamic updates easier</li>
            <li>Work well with React's unidirectional data flow</li>
            <span className="font-bold">
              {" "}
              Uncontrolled components might be better when:
            </span>{" "}
            <br />
            <li>We want simple, quick forms with minimal logic</li>
            <li>We need to integrate with non-React code</li>
          </p>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="flex gap-3 text-xl">
            <LuCalendarHeart />
            Added At 2025-04-12
          </p>
        </div>
        <div className="border-none rounded-2xl p-10 bg-[#09982F1A]">
          <h1 className="text-2xl font-bold text-[#0F0F0F]">
            Tell us something about useFormStatus() in React.
          </h1>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="text-xl">
            <span className="text-[#09982F] text-2xl font-bold">Answer : </span>
            <br />
            useFormStatus() is a React Hook used in React Server Components
            (like in Next.js with Server Actions) to track the status of a form
            submission. It helps you know whether a form is submitting,
            succeeded, or failed, and allows you to show feedback like loading
            spinners or disable buttons during submission.
          </p>
          <hr className="border-t-4 border-dashed border-green-400 w-full my-2" />
          <p className="flex gap-3 text-xl">
            <LuCalendarHeart />
            Added At 2025-10-22
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
