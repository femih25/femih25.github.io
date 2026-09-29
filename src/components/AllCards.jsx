import React from "react";
import "./AllCards.css";
import { Link } from "react-router-dom";

/**
 * Single reusable card.
 * Usage:
 * <Card
 *   href="https://example.com"
 *   img="photos/example.png"
 *   alt="Article image"
 *   publication="The Daily Northwestern"
 *   title="Headline goes here"
 *   tags={["Tag one", "Tag two"]}
 *   extra="Optional note, e.g. an award or credit line"
 *   linkText="Listen now →"
 * />
 */


export function Card({
  href,
  img,
  alt,
  publication,
  title,
  tags,
  extra,
  linkText = "Read more \u2192", // default: "Read more →"
}) {
    const isExternal = href.startsWith("http");

    return (
      <article className="card">
        <img src={img} alt={alt} />
        <div className="card-body">
          <p className="publication">{publication}</p>
          <h3>{title}</h3>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {extra && <p className="extra">{extra}</p>}
          {isExternal ? (
            <a href={href} target="_blank" rel="noreferrer" className="read-more">
              {linkText}
            </a>
          ) : (
            <Link to={href} className="read-more">
              {linkText}
            </Link>
          )}
        </div>
      </article>
    );
  }

/**
 * Grid wrapper. Drop <Card /> elements inside it as children.
 * Usage:
 * <AllCards>
 *   <Card href="..." img="..." alt="..." publication="..." title="..." tags={[...]} />
 *   <Card href="..." img="..." alt="..." publication="..." title="..." tags={[...]} />
 * </AllCards>
 */
export default function AllCards({ children }) {
  return <div className="articles-grid">{children}</div>;
}