import React from 'react';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight.
*/

class Highlights extends React.Component {
  description(component) {
    return {__html: component.description.childMarkdownRemark.html}
  }
  render() {
    return (
      <section className="usa-graphic-list usa-section usa-section--dark">
        <div className="grid-container">
          <div className="usa-graphic-list__row grid-row grid-gap">
          {this.props.block.components.map((component) => {
            return (
              <div className="usa-media-block tablet:grid-col-6">
                <img className="usa-media-block__img" src={component.image.file.url} alt="Alt text" />
                <div className="usa-media-block__body">
                  <h3 className="usa-graphic-list__heading">
                    {component.title}
                  </h3>
                  <div dangerouslySetInnerHTML={this.description(component)} />
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </section>
    )
  }
}
export default Highlights;
