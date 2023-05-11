import styled from "styled-components";

export const BodyContainer = styled.div`
  max-width: 110vw;
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: var(--grey-100);

  .div-page-title {
    position: absolute;
    width: 80%;
    right: 30%;
    height: 70%;
  }

  .register-page-title {
    top: 38%;
    left: 33%;
    padding-left: 20px;
    color: var(--color-primary);
    width: 30%;
    height: 8%;
    position: absolute;
    font-size: 50px;
    font-style: ExtraBold;
    text-align: left;
    font-family: Archivo;
    font-weight: 800;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
  }

  .page-resume {
    top: 60%;
    left: 28%;
    color: var(--grey-600);
    width: 40%;
    height: auto;
    position: absolute;
    font-size: 30px;
    font-style: Bold;
    text-align: center;
    font-family: Archivo;
    font-weight: 700;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
  }

  .page-resume-color {
    font-size: 30px;
    font-style: Bold;
    text-align: center;
    font-family: Archivo;
    font-weight: 700;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
    color: var(--green-500);
  }

  @media (max-width: 1100px) {
    .register-page-title {
      left: 15%;
    }
  }

  @media (max-width: 1340px) {
    .register-page-title {
      left: 21%;
    }

    .page-resume {
      left: 18%;
    }

    @media (max-width: 1000px) {
      .register-page-title {
        top: 100px;
        left: 50%;
        font-size: 37px;
      }

      .page-resume {
        top: 25%;
        left: 25%;
        font-size: 30px;
        width: 100%;
        text-align: center;
      }
    }
  }

  @media (max-width: 300px) {
    .register-page-title {
      left: 1%;
    }
  }
`;

export const RegisterContainer = styled.div`
  top: 2%;
  left: 67%;
  margin-right: 1%;
  max-width: 40vw;
  width: 40vw;
  height: 95vh;
  position: sticky;
  border-radius: 20px;
  background-color: #312c2c;
  @media (max-width: 1000px) {
    top: 28%;
    margin-top: 2vh;
    left: 20%;
    width: 60vw;
    max-width: 60vw;
    height: 70%;
    position: absolute;
    overflow: scroll;
    /* z-index: 1; */
  }
  @media (max-width: 520px) {
    height: 55vh;
    top: 42vh;
    /* z-index: 1; */
  }

  @media (max-width: 300px) {
    height: 53%;
    top: 57%;
    width: 90%;
    left: 5%;
    /* z-index: 1; */
  }
`;

export const DivRegister = styled.div`
  top: 238px;
  left: 816px;
  width: 45vw;
  height: 95vh;
  display: flex;
  /* border: 1px solid red; */
  align-items: center;
  flex-shrink: 0;
  @media (max-width: 300px) {
    width: 90%;
  }
  /* .div-title-and-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  } */

  .title-register {
    color: var(--color-primary);
    width: 185px;
    height: 20%;
    top: 8.5vh;
    left: 4vw;
    position: absolute;
    font-size: 4vh;
    font-style: ExtraBold;
    text-align: left;
    font-family: Archivo;
    font-weight: 800;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
  }

  .btn-back {
    bottom: 25.5vh;
    left: 30vw;
    color: var(--grey-200);
    height: 25%;
    position: relative;
    font-size: 2.5vh;
    font-style: ExtraBold;
    text-align: left;
    font-family: Archivo;
    font-weight: 800;
    line-height: normal;
    font-stretch: normal;
    text-decoration: underline;
  }

  .btn-back:hover {
    filter: brightness(1.2);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-3);
    margin-top: 25px;
    padding: 0 20px 0 20px;
  }

  label {
    display: none;
  }

  input {
    background-color: white;
    margin-bottom: 20px;
    height: 5.5vh;
    width: 50vh;
    position: relative;
    left: -2vw;
    top: -2vh;
    border-radius: 12px;
    padding-left: 10px;
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    color: var(--grey-300);
  }

  .btn-register {
    position: relative;
    bottom: -8vh;
    left: -1.5vw;
    width: 480px;
    height: 70px;
    border-radius: 15px;
    background-color: var(--color-primary);
    color: var(--grey-600);
    font-family: "Archivo";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 33px;
  }

  .btn-register:hover {
    filter: brightness(1.2);
  }

  .error-msg {
    color: var(--negative);
    font-size: 16px;
    text-align: center;
    font-weight: 600;
  }

  @media (max-width: 1340px) {
    input {
      left: -4vw;
      top: -2vh;
    }

    .btn-register {
      bottom: -5vh;
      left: -3.7vw;
      width: 35vw;
      height: 8vh;
    }

    @media (max-width: 1000px) {
      .btn-back {
        /* bottom: 2vh; */
        left: 46vw;
        top: -28vh;
        pointer-events: auto;
        /* z-index: -1; */
      }

      .btn-register {
        width: 35.1vh;
        height: 5vh;
        top: 04vh;
        left: 2vh;
      }

      /* .div-title-and-btn {
      width: 80%;
      height: 0%;
      position: fixed;
      top: 18vh;
      border: 1px red solid;
      pointer-events: none;
    } */

      .title-register {
        left: 5%;
        top: 6.3vh;
        /* z-index: -1; */
      }

      input {
        /* width: 140%;
      height: 5.5vw; */
        top: -1vh;
        left: -12%;
      }
    }

    @media (max-width: 520px) {
      .title-register {
        top: 5%;
        left: 15%;
      }

      .btn-back {
        top: -32vh;
        left: 74vw;
      }
    }

    @media (max-width: 300px) {
      .btn-back {
        /* bottom: 2vh; */
        left: 150%;
        top: -43%;
        pointer-events: auto;
        /* z-index: -1; */
        /* position: relative; */
      }

      form {
        width: 150%;
        margin-left: 02%;
      }

      .btn-register {
        width: 35.1vh;
        height: 5vh;
        top: 04vh;
        left: 8vh;
      }

      /* .div-title-and-btn {
      width: 80%;
      height: 0%;
      position: fixed;
      top: 38vh;
      border: 1px red solid;
      pointer-events: none;
    } */

      .title-register {
        left: 05%;
        top: 05%;
      }

      input {
        width: 150%;
        height: 55px;
        top: -1vh;
        left: -06vh;
      }
    }
  }
`;
