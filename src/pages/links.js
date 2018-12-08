import React from 'react'
import {Consumer} from '../layouts/Context'
import Links from '../components/links/Links'
import {publications, databasesEn, databasesCz, media, popularization} from '../content/links'
import {cz, en} from '../content/general'

const LinksPage = () => (
      <Consumer>
        {context => (
            <Links
              publicationsData={publications}
              mediaData={media}
              popularizationData={popularization}
              databasesData={context.int === "en" ? databasesEn : databasesCz}
              data={context.int === "en" ? en : cz}
            />
        )}
      </Consumer>
)

Links.propTypes = {}

export default LinksPage
