import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  padding: 80px 0 180px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }

  .feature__block {
    position: relative;
    transition: box-shadow 0.3s ease;
    @media (max-width: 500px) {
      padding: 30px 0;
    }
    .icon__wrapper {
      position: relative;
      overflow: hidden;
    }
    &:hover {
      ${'' /* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */}
    }
  }
`;

export default FeatureSectionWrapper;
