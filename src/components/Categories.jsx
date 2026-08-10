import React, { createContext, useContext, useState } from "react";
import "./Categories.css";

const CategoriesContext = createContext(null);

/**
 * Stamp row wrapper. Drop <Category /> elements inside it as children.
 *
 * Usage:
 * const [category, setCategory] = useState("all");
 *
 * <Categories active={category} onSelect={setCategory}>
 *   <Category id="journalism" label="Reporting" />
 *   <Category id="all" label="All" />
 *   <Category id="projects" label="Projects" />
 *   <Category id="photography" label="Photography" />
 * </Categories>
 */
export default function Categories({ active, onSelect, children }) {
  // tracks which stamp is mid "press" animation
  const [pressingId, setPressingId] = useState(null);

  function handleClick(id) {
    setPressingId(id);
    setTimeout(() => setPressingId(null), 350);
    onSelect(id);
  }

  return (
    <>
      <div className="works-intro">
        <p className="works-subtitle">
          <br />
          <br />
          Choose a category
        </p>
      </div>

      <div className="stamp-toggle-area">
        <CategoriesContext.Provider value={{ active, pressingId, onClick: handleClick }}>
          {children}
        </CategoriesContext.Provider>
      </div>
    </>
  );
}

/**
 * Single stamp.
 * Usage:
 * <Category id="photography" label="Photography" />
 */
export function Category({ id, label }) {
  const ctx = useContext(CategoriesContext);
  if (!ctx) {
    throw new Error("Category must be rendered inside a Categories wrapper");
  }
  const { active, pressingId, onClick } = ctx;

  const classes = [
    "stamp",
    active === id && "active",
    pressingId === id && "pressing",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={() => onClick(id)}>
      <div className="stamp-inner">
        <div className="stamp-ink"></div>
        <div className="stamp-border-box"></div>
        <div className="stamp-mark">selected</div>
        <div className="stamp-content">
          <span className="stamp-label">{label}</span>
        </div>
      </div>
    </div>
  );
}