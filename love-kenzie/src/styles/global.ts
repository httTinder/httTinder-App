import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
     :root{
          --purple: #9747FF ;
          --pink: #F299B9 ;
          --red: #D7234D;
          --white: #FFFFFF ;
          --transparent-black: rgba(0, 0, 0, 0.43);

          --box-shadow:  -11px 20px 6px rgba(0, 0, 0, 0.25);
          --button-hover-shadow: 0px 9px 6px rgba(0, 0, 0, 0.27);
     }

   * {
          margin:0;
          padding: 0;
          outline:0;
          box-sizing: border-box;
     }

     body,html{
          width: 100vw;
          height: 100vh;
     }
     
     body {
          overflow-x: hidden;
	background-color: var(--pink);
     }
     
     h1{
          font-family: 'Lobster Two', cursive;
     }
     
     h2, button, label{
          font-family: 'Secular One', sans-serif;
     }
     

     img{
          max-width: 100%;
          height: auto;
     }

     p, li, input{
          font-family: 'Didact Gothic', sans-serif;
     }

     input::-webkit-input-placeholder{
          font-weight: 500;
     }

     button {
          cursor:  pointer;
     }

       /* width */
     ::-webkit-scrollbar {
          width: 10px;
     }

     ::-webkit-scrollbar-track {
          background: var(--color-text-light);
          margin: 1rem;
          border-radius: 1.6rem;
     }

       /* Handle */
     ::-webkit-scrollbar-thumb {
          background: var(--red);
          border-radius: 1.6rem;
     }
     /* Handle on hover */
     ::-webkit-scrollbar-thumb:hover {
          background:  var(--red);
     }
`
