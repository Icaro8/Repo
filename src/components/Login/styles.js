import styled from "styled-components";
export const Container=styled.div`
  background-color:#464D6A;
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: row;
  flex-wrap:wrap; 
  justify-content: center;
  align-items:center; 
  font-family: 'Montserrat', sans-serif;
  .Container-column{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #31364A;
    width: 25%;
    height: 60%;
    padding: 50px;
  }
  .Container-column h1{
    margin-bottom: 20px;
    text-align:left;
    color:#fff;
  }
  .Container-column h1::after{
    content: "";
    width: 90px;
    height: 5px;  
    background-color: #fff;
    display: block;
  }
  .Content-form{
    align-self:flex-end;
  }
  label{
    font-size: 12px;
    color:#fff;
    margin-left: 2px;
  }
  .input-text{
    width: 100%;
    height: 25px;
    background-color: transparent;
    padding-left: 2px;
    border:none;
    border-bottom: 1px solid #fff;
    color:#eee;
    display: block;
    margin: 5px auto; 
  }
  .input-text::placeholder{
    text-align:center;
    color:rgba(255,255,255, .1)
  }
  .input-text:focus{
    outline:none
  }
  .btn{
    width: 100%;
    height: 35px;
    background-color:#A13954;
    color:#fff;
    border:none;
    margin: 10px auto;
    cursor:pointer;
  }
  .btn:hover{
    transform: scale(1.1);
    transition: linear .3s;
    box-shadow: 0 0 2px #eee;
  }
  li{
    text-align:center;
  }
 .form-margin{
  margin-bottom: 10px;
 }
 .Link{
    text-decoration: none;
    color:#fff;
    font-size: 12px;
 }
`;