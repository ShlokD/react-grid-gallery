import React from 'react'
import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'

const typography = new Typography(kirkhamTheme)
typography.injectStyles()

import Gallery from '../layouts/gallery/gallery'

const IndexPage = () => <Gallery />

export default IndexPage
