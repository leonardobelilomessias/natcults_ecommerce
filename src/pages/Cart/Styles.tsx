import styled from "styled-components";
export const Container = styled.div`
    margin-top: 1rem;
    padding:0 6rem 6rem 3rem;
    h1{
      color:#333333;
      font-size: 2.5rem;
      margin-bottom: 20px;
      
    }
    h2{
   font-size: 1.5rem;
   color: rgb(39, 39, 39);
}
    `

export const Products = styled.div` 
      display: flex;
      flex-wrap: wrap;
      
  `
export const Product = styled.div`
        background-color: white;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;

        p{
          text-align: center;
          font-weight: bold;
          font-size: 1.5rem;
        }
        img{
          background-color: white;
        }
        p ~ p  {
          color: #4BAF50;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin: 0.3rem 0;
        }
        button{
          background-color: rgb(0, 0, 0);
          padding: 4px;
          color: white;
          font-size: 1.2rem;
          padding: 10px 50px;
          border-radius: 8px;
          &:hover{
            background-color: #202020;
          }
          
        }

`
export const Total =styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
margin-top:2.5rem;
background-color: white;
padding: 1rem;
align-items: center;
background-color: #e6e6e6;
  div{
    display: flex;
h3{
  font-size: 1.5rem;
  font-weight: bold;
  display: inline;
}
p{
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
}
  }
button{
          background-color: rgb(0, 0, 0);
          padding: 4px;
          color: white;
          font-size: 1.2rem;
          border-radius: 4px;
          padding: 10px 50px;
          &:hover{
            background-color: #202020;
          }
        }
`