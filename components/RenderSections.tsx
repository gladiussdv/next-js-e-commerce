import React, { Fragment } from 'react'
import { upperFirst } from 'lodash'
import * as SectionComponents from './sections'
import { RenderSectionsProps } from "../models/RenderSectionsProps";
import { Section } from "../models/Section";

function resolveSections (section: Section) {
  const Section = SectionComponents[upperFirst(section._type)]

  if (Section) {
    return Section
  }

  console.error('Cant find section', section)
  return null
}

function RenderSections (props: RenderSectionsProps) {
  const { sections } = props

  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }

  return (
    <Fragment>
      {sections.map(section => {
        const SectionComponent = resolveSections(section)
        if (!SectionComponent) {
          return <div>Missing section {section._type}</div>
        }
        return <SectionComponent {...section} key={section._key} />
      })}
    </Fragment>
  )
}

export default RenderSections
