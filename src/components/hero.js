import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/
class Hero extends React.Component {

  render() {
    return (
    <div>
    {this.props.block.components.map((component) => {
      return (
        <section className="usa-hero">
          <div className="grid-container">
            <div className="usa-hero__callout">
              <h2 className="usa-hero__heading">
                {component.title}
              </h2>
              <p>
                {component.subtitle}
              </p>
              <a className="usa-button" href={component.link}>
                {component.callToAction}
              </a>
            </div>
          </div>
        </section>
        )
      })}
      </div>
    );
  };
}
export default Hero;
