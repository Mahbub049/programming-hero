import Book from './Book'
export default function BookStore({book}){
    return (
        <div>
            <li>{book.map(item=> <Book ItemName={item}></Book>)}</li>
        </div>
        )
}