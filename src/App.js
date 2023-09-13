import { useState } from "react";
import "./styles.css";

export default function App() {
  const [showMore, setShowMore] = useState(true);
  const [showMore2, setShowMore2] = useState(true);

  const [showText, setShowText] = useState(true);

  const StylesForArticle = {
    collapsedNumWords: 20,
    expandButtonText: "Show text",
    expandButtonMore: "Show more",
    collapseButtonText: "Collapse text",
    buttonColor: "#ff6622",
    fontSize: "16px",
  };

  return (
    <div>
      <TextExpander
        showMore={showMore}
        setShowMore={setShowMore}
        showText={showText}
        setShowText={setShowText}
        showMore2={showMore2}
        setShowMore2={setShowMore2}
        expandButtonText={StylesForArticle.expandButtonText}
        expandButtonMore={StylesForArticle.expandButtonMore}
        buttonColor={StylesForArticle.buttonColor}
        collapseButtonText={StylesForArticle.collapseButtonText}
      />
    </div>
  );
}

function TextExpander({
  showMore,
  setShowMore,
  showText,
  setShowText,
  showMore2,
  setShowMore2,
  expandButtonMore,
  buttonColor,
  collapseButtonText,
  expandButtonText,
}) {
  console.log(showMore2);
  return (
    <div>
      <FirstArticle
        showMore={showMore}
        setShowMore={setShowMore}
        expandButtonMore={expandButtonMore}
      />
      <SecondArticle
        showText={showText}
        setShowText={setShowText}
        buttonColor={buttonColor}
        collapseButtonText={collapseButtonText}
        expandButtonText={expandButtonText}
      />

      <ThirdArticle
        showMore2={showMore2}
        setShowMore2={setShowMore2}
        expandButtonMore={expandButtonMore}
      />
    </div>
  );
}

function FirstArticle({
  showMore,
  setShowMore,
  collapsedNumWords = 10,
  expandButtonMore,
}) {
  const text =
    "Space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of dreams and science fiction, but believe it or not, space travel is a real thing. Humans and robots are constantly venturing out into the cosmos to uncover its secrets and push the boundaries of what's possible.";

  const words = text.split(" ");

  const firstTenWords = words.slice(0, collapsedNumWords).join(" ");

  return (
    <div>
      <Text>
        {showMore ? `${firstTenWords}...` : text}
        <button
          style={{
            color: "blue",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => setShowMore((showMore) => !showMore)}
        >
          {showMore ? expandButtonMore : "Show less"}
        </button>
      </Text>
    </div>
  );
}

function SecondArticle({
  showText,
  setShowText,
  collapsedNumWords = 20,
  buttonColor,
  collapseButtonText,
  expandButtonText,
}) {
  const text =
    "Space travel requires some seriously amazing technology and collaboration between countries, private companies, and international space organizations. And while it's not always easy (or cheap), the results are out of this world. Think about the first time humans stepped foot on the  moon or when rovers were sent to roam around on Mars.";

  const words = text.split(" ");
  const firstTwentyWords = words.slice(0, collapsedNumWords).join(" ");

  return (
    <div>
      <Text style={{ collapsedNumWords: 20 }}>
        {showText ? `${firstTwentyWords}...` : text}

        <button
          style={{
            color: buttonColor,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setShowText((showText) => !showText)}
        >
          {showText ? expandButtonText : collapseButtonText}
        </button>
      </Text>
    </div>
  );
}

function ThirdArticle({
  StylesForArticle,
  showMore2,
  setShowMore2,

  collapsedNumWords = 10,
  expandButtonMore,
}) {
  console.log(showMore2);
  const text =
    "Space missions have given us incredible insights into our universe and have inspired future generations to keep reaching for the stars. Space travel is a pretty cool thing to think about. Who knows what we'll discover next!";

  const words = text.split(" ");
  const firstTenWords = words.slice(0, collapsedNumWords).join(" ");

  return (
    <div className="box">
      <Text style={StylesForArticle}>
        {showMore2 ? `${firstTenWords}...` : text}
        <button
          style={{
            color: "blue",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => setShowMore2((showMore) => !showMore)}
        >
          {showMore2 ? expandButtonMore : "Show less"}
        </button>
      </Text>
    </div>
  );
}

// Zbývající komponenty zůstaly nezměněny

// function ButtonBlue({ children }) {
//   return (
//     <button
//       style={{
//         color: "blue",
//         border: "none",
//         background: "transparent",
//         cursor: "pointer",
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// function ButtonOrange({ children }) {
//   return (
//     <button
//       style={{
//         color: "orange",
//         border: "none",
//         background: "transparent",
//         cursor: "pointer",
//       }}
//     >
//       {children}
//     </button>
//   );
// }

function Text({ children }) {
  return <div>{children}</div>;
}
