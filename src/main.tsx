import ReactDOM from 'react-dom'

const myName: string = "Dung";
const product: {id: number, name: string} = {id: 1, name: "A"};

ReactDOM.render(<h1>{myName}</h1>, document.getElementById('root'))
