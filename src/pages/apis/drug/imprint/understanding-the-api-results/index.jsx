import React from "react"
import Highlight from 'react-highlight.js'

import examples from './_examples.json'

class IndexRoute extends React.Component {
  render () {
    const example: string = JSON.stringify(examples.count, null, '  ') || ''

    return (
      <section className='doc-content'>
        <h2>Understanding the API Results</h2>
        <p>For <code>search</code> queries (such as: <a href='https://api.fda.gov/drug/imprint.json?limit=1'>https://api.fda.gov/drug/imprint.json?limit=1</a>), the <code>results</code> section includes matching ndc results returned by the API.</p>
        <p>For <code>count</code> queries (such as: <a href='https://api.fda.gov/drug/imprint.json?count=dosage_form.exact&limit=5'>https://api.fda.gov/drug/imprint.json?count=dosage_form.exact&limit=5</a>), the results section will look something like the following:</p>
        <Highlight
          className='javascript'>
          {example}
        </Highlight>
      </section>
    )
  }
}

export default IndexRoute
