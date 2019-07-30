import styled from 'styled-components';
import { themeGet } from 'styled-system';
import BannerBG from 'common/src/assets/image/agency/agency-banner.png';

const BannerWrapper = styled.section`
  padding-top: 210px;
  padding-bottom: 160px;
  background-image: url(${BannerBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media only screen and (min-width: 1367px) {
    min-height: 100vh;
  }
  @media (max-width: 990px) {
    padding-top: 150px;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 480px) {
    background: none;
    padding-top: 130px;
    padding-bottom: 60px;
  }
  .particle {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    @media (max-width: 990px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
  .row {
    position: relative;
    z-index: 1;
  }
  .button__wrapper {
    margin-top: 40px;
    .reusecore__button {
      &:first-child {
        transition: all 0.3s ease;
        &:hover {
          box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
        }
      }
    }
  }
`;

const DiscountLabel = styled.div`
  display: inline-block;
  border-radius: 4em;
  padding: 7px 25px;
  box-shadow: 0px 4px 50px 0px rgba(22, 53, 76, 0.08);
  margin-bottom: 30px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media (max-width: 767px) {
    padding: 7px 10px;
  }
`;

export { DiscountLabel };

export default BannerWrapper;
