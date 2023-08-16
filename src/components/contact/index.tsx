import React from "react";
import { Divider } from "../ui/divider";
import { InputText } from "primereact/inputtext";
import "./style.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
export const Contact = () => {
  return (
    <section className="contact section w-full" id="contact">
      <Divider title="Contact With Me" />
      <div className="grid w-10 mx-auto px-5 pt-4 my-auto h-full align-items-center ">
        <div
          className="grid-item
                col-6 md:col-12 lg:col-12 xl:col-6"
        >
          <form className="">
            <span className="p-float-label">
              <InputText
                id="name"
                className="w-full"
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="name">Your Name</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputText
                id="email"
                type="email"
                className="w-full"
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="email">Your Email</label>
            </span>
            <br />
            <span className="p-float-label">
              <InputTextarea
                id="message"
                className="w-full"
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="message">Your Message</label>
            </span>
            <Button label="Submit" className="p-mt-2" />
          </form>
        </div>
        <div
          className="grid-item project-card
                col-6 md:col-12 lg:col-12 xl:col-6"
        >
          <Card className="p-card">
            <h3 className="p-text-bold">Contact Info</h3>
          </Card>
        </div>
      </div>
    </section>
  );
};
