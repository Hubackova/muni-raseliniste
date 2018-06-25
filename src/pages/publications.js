import React, {Fragment} from "react"
import PropTypes from 'prop-types';
import styled from "styled-components";


const papers_2017 = [
    "Beran L., Juřičková L. & Horsák M. (2017): Mollusca (měkkýši). In: Hejda R., Farkač J. & Chobot K. (eds.). Červený seznam ohrožených druhů České republiky. Bezobratlí. (Red List of threatened species of the Czech Republic. Invertebrates.). Příroda 36: 70-76.",
    "Bryja J., Horsák M., Horsáková V., Řehák Z. & Zukal J. (2017): Zoologické dny Brno 2017. Sborník abstraktů z konference 9.-10. února 2017. Pp. 254.",
    "Chytrý M., Horsák M., Syrovátka V., Danihelka J., Ermakov N., German D.A., Hájek M., Hájek O., Hájková P., Horsáková V., Kočí M., Kubešová S., Lustyk P., Nekola J.C., Preislerová Z., Resl P. & Valachovič M. (2017): Refugial ecosystems in central Asia as indicators of biodiversity change during the Pleistocene-Holocene transition. Ecological Indicators 77: 357-367. - fulltext on ScienceDirect",
    "Ježek J., Omelková M. & Hájek J. (2017): Horse flies (Diptera: Tabanidae) of the north-eastern parts of the Hercynian mountains and adjacent localities (Czech Republic). Acta Musei Silesiae, Scientiae Naturales 66: 7-34. - fulltext on De Gruyter",
    "Polášková V., Schenková J., Bartošová M., Rádková V. & Horsák M. (2017): Post-mining calcareous seepages as surrogate habitats for aquatic macroinvertebrate biota of vanishing calcareous spring fens. Ecological Engineering 109: 119-132. - fulltext on ScienceDirect",
    "Rádková V., Polášková V., Bojková J., Syrovátka V. & Horsák M. (2017): Environmental filtering of aquatic insects in spring fens: patterns of species-specific responses related to specialist-generalist categorization. Hydrobiologia 797: 159-170. - fulltext on SpringerLink",
    "Schenková J. & Pařil P. (2017): Oligochaeta (vodní máloštětinatci). In: Hejda R., Farkač J. & Chobot K. (eds.). Červený seznam ohrožených druhů České republiky. Bezobratlí. (Red List of threatened species of the Czech Republic. Invertebrates.). Příroda 36: 58-61.",
    "Schenková J. & Sychra J (2017): Hirudinea (pijavice). In: Hejda R., Farkač J. & Chobot K. (eds.). Červený seznam ohrožených druhů České republiky. Bezobratlí. (Red List of threatened species of the Czech Republic. Invertebrates.). Příroda 36: 62-67."
]

const Publications = props => {
    const papers2017 = papers_2017.map(i => {
            return <li key={i}>{i}</li>;
          })
    return (
    <Fragment>
    <h2>2017</h2>
    <ul>
    {papers2017}
    </ul>
    <h2>2016</h2>
    <ul>
    {papers2017}
    </ul>
    </Fragment>
    );
};

Publications.propTypes = {

};

export default Publications;