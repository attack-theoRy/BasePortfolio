import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import ProgressiveImage from 'react-progressive-image';

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, largeImageUrl, url, repo, description, role } = props.content;

  const handleToggler = (value) => {
    setToggler(value);
  }

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        {/* <img src={imageUrl} alt={title} /> */}
        <ProgressiveImage
          src={imageUrl}
          placeholder=""
        >
          {src => <img src={src} alt={title} />}
        </ProgressiveImage>
        <ul>
          {!largeImageUrl ? null : <li>
            <button onClick={() => handleToggler(!toggler)}>
              <Icon.ZoomIn />
            </button>
          </li>}
          {url ? <li>
            <a rel="noopener noreferrer" target="Deployed App" href={url}>
              <Icon.Link />
            </a>
          </li> : null}
        </ul>
      </div>
      {!url ? <h5>{title}</h5> : <h5>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          {title}
        </a>
      </h5>}
      {subtitle ? <h6>{subtitle}</h6> : null}
      <a href={repo}>Github Repo</a>
      {<p>Tech Used: {description}</p>}
      {<p>Role: {role}</p>}

      {!largeImageUrl ? null : <FsLightbox
        toggler={toggler}
        sources={largeImageUrl}
      />
      }
    </div>
  );
}

export default Portfolio;
