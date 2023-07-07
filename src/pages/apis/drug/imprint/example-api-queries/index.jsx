import React from "react"

import QueryTour from '../../../../../components/QueryTour'
import explorers from '../_explorers.yaml'

class IndexRoute extends React.Component {
  render () {

    const oneProduct = explorers.oneProduct
    const oneTablet = explorers.oneTablet
    const shapeCount = explorers.shapeCount

    return (
      <section className='doc-content'>
        <h2>Example drug Solid Oral Dosage Form Imprint queries</h2>
        <p>To help get you started, we have provided some query examples below. Use the Run query button to call the API and get back results. You can experiment by editing the example queries in the black text box.</p>
        <QueryTour
          desc={oneProduct.description}
          query={oneProduct.query}
          params={oneProduct.params}
          title={oneProduct.title}
          name={'oneProduct'}
        />
        <QueryTour
          desc={oneTablet.description}
          query={oneTablet.query}
          params={oneTablet.params}
          title={oneTablet.title}
          name={'oneTablet'}
        />
        <QueryTour
          desc={shapeCount.description}
          query={shapeCount.query}
          params={shapeCount.params}
          title={shapeCount.title}
          name={'shapeCount'}
        />
      </section>
    )
  }
}

export default IndexRoute
