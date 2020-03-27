import React from 'react';

/*
  This tagline will appear in your homepage
*/

class Tagline extends React.Component {
  description(component) {
    return {__html: component.description.childMarkdownRemark.html}
  }
  render() {
    return (
    <div>
    {this.props.block.components.map((component) => {
      return (
        <section className="grid-container usa-section usa-prose">
          <div className="grid-row grid-gap">
            <div className="tablet:grid-col-4">
              <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                {component.title}
              </h2>
            </div>
              <div className="tablet:grid-col-8 usa-prose" dangerouslySetInnerHTML={this.description(component)} />
          </div>
        </section>
        )
      })}
      </div>
    );
  };
}
export default Tagline;
