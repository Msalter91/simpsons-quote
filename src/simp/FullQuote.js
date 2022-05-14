import React from 'react'
import { getSingleQuote } from '../lib/api'

function FullQuote () {

  const [quote, setQuote] = React.useState(null)

  React.useEffect(()=> {
    const getQuote = async () => {
      try {
        const result = await getSingleQuote()
        setQuote(result.data[0])
      } catch (err) {
        console.log(err)
      }
    }
    getQuote()
  }, [setQuote]) 
  console.log(quote)
  return (
    <section>
      {!quote && <h1>Quote Loading</h1>}
      {quote &&
      <div>
        <h1>{quote.character}</h1>
        <img src={quote.image} alt={quote.character}/>
        <p>{quote.quote}</p>
      </div>
      
      
      }
    </section>
  )

}

export default FullQuote