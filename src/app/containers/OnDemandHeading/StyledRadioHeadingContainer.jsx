import styled from '@emotion/styled';
import {
  GEL_SPACING_DBL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import OnDemandHeading from '.';

const StyledRadioHeadingContainer = styled(OnDemandHeading)`
  padding: ${GEL_SPACING_QUAD} 0 ${GEL_SPACING_DBL};

  /* We need a media query here to explicitly overwrite the same media query within psammead-headings' Headline  */
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_QUAD} 0 ${GEL_SPACING_DBL};
  }
`;

export default StyledRadioHeadingContainer;
