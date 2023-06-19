import React from "react";

export default function about() {
  const gitAccount = "https://github.com/abhishek9473/E-commerce";
  return (
    <>
      <div className="px-4">
        <div>
          <div className="flex justify-center border-b border-black py-2 text-xl font-bold">
            <p>E-Commerce website</p>
          </div>
          <div className=" text-lightText">
            <ul className="list-disc pl-10">
              <li>
                Developed a fully functional E-Commerce website using Next.js
              </li>
              <li>
                Designed an intuitive user interface using Tailwind CSS utility
                classes.
              </li>
              <li>Created a API using Express js.</li>
              <li>
                Login structure based on Admin and multi-user database with
                protected routes.{" "}
              </li>
              <li>
                Implemented real-time updates using Sequelize orm with mySQL
                real-time database.
              </li>
              <li>
                Designed a backend-ui where Admin can add, update and delete
                products and A Frontend-ui where User can order products and
                show their order history.
              </li>
              <li>GitHub Repository : {gitAccount}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
