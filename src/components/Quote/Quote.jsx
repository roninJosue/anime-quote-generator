import SmallQuote from "../SmallQuote/SmallQuote";

const Quote = () => {
  const quote = {
    anime: 'Naruto',
    character: 'Pain',
    quote: 'Because of the existence of love - sacrifice is born. As well as hate. Then one comprehends... one knows PAIN.'
  }

  return (
    <SmallQuote {...quote} />
  )
}

export default Quote