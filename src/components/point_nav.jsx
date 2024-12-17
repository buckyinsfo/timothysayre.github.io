import React from 'react';

const PointNav = ({ setScrollTarget, scrollIndex }) => {

  return(
      <div className="point-nav">
        <div className="point-nav-buttons-background"></div>
        <nav className="point-nav-buttons">
          <a onClick={ setScrollTarget }
                  className={scrollIndex === 0 ? 'active' : ''}>
            <i className="fa fa-home fa-2x"></i>
            <p>Home</p>
          </a>
          
          <a onClick={setScrollTarget}
                  className={scrollIndex === 1 ? 'active' : ''}>
            <i className="fa fa-file-text fa-2x"></i>
            <p>Experience</p>
          </a>

          <a onClick={setScrollTarget}
                  className={scrollIndex === 2 ? 'active' : ''}>
            <i className="fa fa-book fa-2x"></i>
            <p>Guides</p>
          </a>

          <a onClick={setScrollTarget}
                  className={scrollIndex === 3 ? 'active' : ''}>
            <i className="fa fa-info fa-2x"></i>
            <p>Contact</p>
          </a>
        </nav>
      </div>
  )
}

export default PointNav;