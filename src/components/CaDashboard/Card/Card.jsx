import { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        {param.barValue && (
          <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
          />
        )}
        <span>{param.title}</span>
      </div>
      <div className="c-detail">
        {Png && <Png />}
        <span>{param.value}</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <h1 className="expanded-title">{param.title}</h1>
      {param.title === "Registrations" ? (
        <h2>No. of Registrations: {param.value}</h2>
      ) : (
        <>
          <h2>
            Progress: {param.barValue}% <br /> Credit Score: {param.value}
          </h2>
        </>
      )}
      <h4
        className="expanded-desc
        "
      >
        {param.description}
      </h4>
    </motion.div>
  );
}

export default Card;
