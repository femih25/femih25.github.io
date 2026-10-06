import React from "react";

export default function CFRadar() {
  return (
    <>

      <div className="cs-container">
        <span className="cs-org">USA TODAY Co.</span>
        <h1 className="cs-title">Campaign Finance Radar</h1>

        <div className="cs-img-present">
        <img src="photos/CF_radar_banner.png" alt="Campaign Finance Radar image" />
      </div>

        <div className="cs-meta">
          <div className="cs-meta-item">
            <span className="cs-meta-label">Timeline</span>
            <span className="cs-meta-value">3 weeks</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Skills</span>
            <span className="cs-meta-value">Data scraping, Redbird, Python, user research</span>
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="cs-section">
          <span className="cs-h2a">Overview</span>
          <p>
          I pitched and built the Campaign Finance Radar in summer 2026, while I was a Content AI intern 
          helping USA TODAY Co. develop and organize approved AI tools, guidelines and training materials 
          for their 200+ local newsrooms. Since it was a midterm election year, campaign finance stories were 
          particularly relevant. However, <strong>staying up to date with the latest donations and expenditures was time consuming, 
          tedious and easy to forget about. </strong>
          </p>
          <br />
          <p>
          I saw an opportunity to create a tool that could do that work for reporters across the country.  
          </p>
      
        </div>

        {/* PROCESS */}
        <div className="cs-section">
          <span className="cs-h2a">Process</span>
          <p>
          From the very start, this project involved plenty of trial and error. I originally planned to pilot it 
          in Ohio because of its high concentration of USA TODAY Co. publications. But when bot protections made 
          it difficult to scrape the state’s campaign finance website, I had to pivot. Since I was based in Milwaukee
           and Wisconsin had an upcoming gubernatorial race, I decided to pilot the project at the Milwaukee Journal Sentinel, 
           one of the largest newsrooms in the USA TODAY Network.
          </p>
          <div className="cs-img-present">
            <img src="photos/MJS_map.png" alt="Map of USA TODAY Co. newsrooms" />
            <style>
              width: 65%;
            </style>
          </div>
          <p>
          I built the tool with Redbird – an AI-powered automation platform that I learned to use to perform three steps: 
          <ol>
            <li>Use AI to periodically scrape Wisconsin’s campaign finance website. </li>
            <li>Feed that data to my Python script, which filters out old or unremarkable information. </li>
            <li>Send anything that remains to relevant reporters via email.</li>
          </ol> 
          </p>
          <p>
          I also kept in close communication with staff across product, data, AI and editorial teams to ensure my work
           was practical and scalable. Politics and investigative reporters at the Milwaukee Journal Sentinel helped me 
           fine tune my filtering logic to identify the donations and expenditures that would interest them most. 
          </p>
        </div>

        {/* OUTCOMES */}
        <div className="cs-section">
          <span className="cs-h2a">Outcomes</span>
          <p>
          On the last day of my internship, I presented the final Campaign Finance Radar alongside a legacy document 
          that explained how it worked, how it should be maintained and how it could be replicated for more USA TODAY Co. 
          newsrooms in the future. The project also sparked ideas from the investigations team for other data scraping tools 
          that could support their work.
          </p>
          <br />
          <div className="cs-img-present">
            <img
              src="photos/MJS.png"
              alt="Me with the Milwaukee Journal Sentinel reporters"
            />
          </div>
        </div>

        {/* TAKEAWAYS */}
        <div className="cs-section">
          <span className="cs-h2a">Takeaways</span>
          <p>
          This project made me much more confident in my ability to learn on the job. I also discovered how much 
          I enjoy {" "}<strong>being a bridge between technical and editorial teams. </strong>{" "}By working across both, 
          I learned that some of the most useful solutions come from bringing different perspectives together.
          </p>
        </div>
      </div>
    </>
  );
}