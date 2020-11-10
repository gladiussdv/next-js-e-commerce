import { PortableText } from '../utils/sanity'
import RenderSections from './RenderSections'
import { Section } from "../models/Section";

function LandingPage ({ page = {} }: {page: {title?: string, content?: Section[]}}) {
  const { title, content = [] } = page
  return <RenderSections sections={content} />
}

export default LandingPage
