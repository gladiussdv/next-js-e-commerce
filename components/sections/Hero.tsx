import Cta from '../Cta'
import { PortableText, urlFor } from '../../utils/sanity'
import { CtaProps } from "../../models/CtaProps";

interface HeroProps {
  heading?: string,
  backgroundImage?: {alt?: string},
  tagline?: Object[],
  ctas?: CtaProps[]
}

function Hero (props: HeroProps) {
  const { heading, backgroundImage, tagline, ctas } = props

  return (
    <div>
      <div className="container mx-auto px-6 mt-4">
        <div className="md:flex md:items-center">
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-700 uppercase text-lg">{heading}</h3>
            {tagline && <PortableText blocks={tagline} />}
            {ctas && (
              <div>{ctas.map(cta => <Cta {...cta} key={cta._key} />)}</div>
            )}
          </div>
          <div className="w-full h-64 md:w-1/2 lg:h-96">
            <img
              className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src={urlFor(backgroundImage)
                .auto('format')
                .width(1051)
                .fit('crop')
                .quality(80).toString()}
              alt={backgroundImage.alt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
