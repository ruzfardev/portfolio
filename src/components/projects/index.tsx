import React, { useState } from "react";
import { Divider } from "../ui/divider";
import { Card } from "primereact/card";
import cardImg from "../../assets/card.png";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import "./style.css";
import projects from "../../data/projects.json";
import { AnimatePresence, motion } from "framer-motion";
export const Projects = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const header = <img alt="Card" src={cardImg} />;
  const footer = (
    <div className="flex justify-end">
      <Button
        label="Source"
        icon="pi pi-github"
        text
        raised
        className="text-gradient"
      />
      <Button
        label="Demo"
        icon="pi pi-external-link"
        className="text-gradient"
        text
        raised
      />
    </div>
  );

  return (
    <section className="projects section w-full" id="projects">
      <Divider title="Projects" />
      <div className="grid w-10 mx-auto px-5 pt-4 position-relative">
        {/* <AnimatePresence>
          {selectedId && (
            <motion.div className="card-overlay" layoutId={selectedId}>
              <motion.div>
                <motion.p className="p-m-0" style={{ lineHeight: "1.5" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </motion.p>
                <motion.button
                  className="text-gradient"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedId("")}
                >
                  Source
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}
        {projects.map((_, i) => (
          <div
            key={i}
            data-aos="flip-up"
            className="
                grid-item project-card
                col-6 md:col-12 lg:col-12 xl:col-6
                "
            // layoutId={String(i)}
            // onClick={() => setSelectedId(String(i))}
          >
            <Card
              header={<img alt="Card" src={_.image} />}
              footer={
                <div className="flex justify-end">
                  <Button
                    label="Source"
                    icon="pi pi-github"
                    text
                    raised
                    className="text-gradient"
                    onClick={() => window.open(_.source)}
                  />
                  <Button
                    label="Demo"
                    icon="pi pi-external-link"
                    className="text-gradient"
                    text
                    raised
                    onClick={() => window.open(_.url)}
                  />
                </div>
              }
              title={_.name}
              subTitle={
                <div className="flex gap-1 flex-wrap">
                  {_.tags.map((tag, i) => (
                    <Tag key={i} value={tag} rounded />
                  ))}
                </div>
              }
            >
              <p className="p-m-0" style={{ lineHeight: "1.5" }}>
                {_.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
