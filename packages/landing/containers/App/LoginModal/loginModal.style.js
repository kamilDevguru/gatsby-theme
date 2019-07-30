import styled from 'styled-components';
import { themeGet } from 'styled-system';

const LoginModalWrapper = styled.div`
  width: 80%;
  margin: 71px auto;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${themeGet('colors.white', '#ffffff')};
  .col {
    position: relative;
    .patternImage {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      &.imageCol {
        display: none;
      }
    }
  }
  .reusecore__button {
    background-color: transparent;
    &.default {
      background-color: rgb(26, 115, 232);
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0px 9px 20px -5px rgba(26, 115, 232, 0.57);
      }
    }
  }

  .rc-tabs {
    border: 0;
    max-width: 360px;
    margin: 30px 0 0;
    @media only screen and (max-width: 991px) {
      max-width: 100%;
    }
    .rc-tabs-bar {
      margin-left: 15px;
    }
    .rc-tabs-nav-container {
      padding: 0;
      .rc-tabs-tab-prev,
      .rc-tabs-tab-next {
        display: none;
      }
      .rc-tabs-nav-scroll,
      .rc-tabs-nav {
        width: 100%;
        .rc-tabs-tab {
          width: 50%;
          margin-right: 0;
          padding: 13px 0;
          text-align: center;
        }
      }
    }
    .rc-tabs-tabpane {
      padding-left: 15px;
      padding-bottom: 15px;
      padding-right: 15px;
      @media (min-width: 1200px) {
        min-height: 560px;
      }
    }
    .google-login__btn {
      width: 100%;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 45px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      .btn-icon {
        position: relative;
        left: -22px;
        img {
          width: 21px;
          height: auto;
        }
      }
    }
    .reusecore__input {
      margin-bottom: 30px;
      &.is-material {
        &.is-focus {
          label {
            color: rgb(26, 115, 232);
            top: -12px;
          }
          .highlight {
            background-color: rgb(26, 115, 232);
          }
        }
      }

      label {
        font-weight: 400;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        top: 15px;
      }
    }
    .reusecore__checkbox {
      margin: 0 0 35px;
      label {
        .reusecore__field-label {
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
  }
`;

export default LoginModalWrapper;
