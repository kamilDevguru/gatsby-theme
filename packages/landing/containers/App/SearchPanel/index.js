import React from 'react';
import PropTypes from 'prop-types';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Input from 'reusecore/src/elements/Input';
import { Icon } from 'react-icons-kit';
import { iosSearchStrong } from 'react-icons-kit/ionicons/iosSearchStrong';
import SearchPanelWrapper from './searchPanel.style';

const SearchPanel = ({ titleStyle, hintStyle }) => {
  return (
    <SearchPanelWrapper>
      <Heading content="Search Panel" {...titleStyle} />
      <Input
        inputType="email"
        iconPosition="right"
        placeholder="Type what you want"
        icon={<Icon icon={iosSearchStrong} />}
      />
      <Text content="Example: “App Template” “Application”" {...hintStyle} />
    </SearchPanelWrapper>
  );
};

// SearchPanel style props
SearchPanel.propTypes = {
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
};

// SearchPanel default style
SearchPanel.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ['24px', '30px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // hint default style
  hintStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'rgba(32, 32, 29, 0.55)',
    letterSpacing: '-0.025em',
    mt: '17px',
    ml: ['15px', '30px'],
    mb: '0',
  },
};

export default SearchPanel;
