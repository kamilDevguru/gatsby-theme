import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const BlogPost = ({
  className,
  thumbUrl,
  title,
  excerpt,
  anchorLink,
  btnText,
  btnUrl,
}) => {
  // Add all classs to an array
  const addAllClasses = ['blog_post'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <div className={addAllClasses.join(' ')}>
      <div className="thumbnail">
        <img src={thumbUrl} alt={title} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        {btnUrl || btnText ? (
          <div className="learn_more">
            {anchorLink ? (
              <a href={btnUrl} className="learn__more-btn">
                <span className="hyphen" />
                <span className="btn_text">{btnText}</span>
              </a>
            ) : (
              <Link href={btnUrl}>
                <a className="learn__more-btn">
                  <span className="hyphen" />
                  <span className="btn_text">{btnText}</span>
                </a>
              </Link>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  anchorLink: PropTypes.bool,
  btnText: PropTypes.string,
  btnUrl: PropTypes.string,
};

export default BlogPost;
