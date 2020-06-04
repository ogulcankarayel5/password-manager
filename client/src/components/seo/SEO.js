import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet-async'


export const SEO = ({title="Home",description="Welcome to LuckyPassword"}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
            {title && (
                <meta property="og:title" content={title}/>
            )}
            {description && (
                <meta property="og:description" content={description}/>
            )}

        </Helmet>
    )
}

SEO.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string
}



