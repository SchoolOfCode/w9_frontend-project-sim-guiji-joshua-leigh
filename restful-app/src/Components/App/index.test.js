import App from "./index.js";
import {describe, test, expect} from "@jest/globals"
import {useEffect} from "./index.js"


test("Given a quote string, useEffect Function Returns the correct string from the quotes array",
 function () {
  //Arrange
  const expected = "Congratulations on making it to the School of Code, you should be really proud of yourself. We are really proud of you - The Restless Team";
  //Act 
  const actual = useEffect(()=>{
    fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data=>setQuotes(data));

  },[])

  //Assert
  expect(actual).toBe(expected);
 });



/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/