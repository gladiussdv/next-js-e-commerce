import Cta from '../Cta'
import { PortableText, urlFor } from '../../utils/sanity'
import { CtaProps } from "../../models/CtaProps";

interface ImageSectionProps {
  heading?: string;
  label?: string;
  text?: Object[];
  image?: {asset: {_ref: string}};
  backgroundImage?: string;
  tagline?: string;
  cta: CtaProps
}

function ImageSection (props: ImageSectionProps) {
  const { heading, label, text, image, cta } = props

  if (!image) {
    return null
  }

  return (
    <div>
      <div className="container mx-auto px-6 mt-12">
        <div className="flex items-center">
          <div>
            <figure>
              <img
                className="rounded-md object-cover mx-auto"
                src={urlFor(image)
                  .auto('format')
                  .width(2000)
                  .url()}
                alt={heading}
              />
              <figcaption>
                <div>
                  <div>{label}</div>
                  <h2>{heading}</h2>
                  {text && <PortableText blocks={text} />}
                  {cta && cta.route && <Cta {...cta} />}
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSection
