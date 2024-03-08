export default function Subject({name}){
    return(
        <li>{name}</li>
    )
}

// Conditional Rendering Type-01
// export function Completed({name, Completed}){
//     if(Completed){
//         return <li>The subject {name} is completed</li>
//         }
//     else{
//         return <li>The subject {name} is not completed</li>
//     }
// }

// Conditional Rendering Type-02
// export function Completed({name, Completed}){
//     if(Completed){
//         return <li>The subject {name} is completed</li>
//         }
//     return <li>The subject {name} is not completed</li>
// }

// Conditional Rendering Type-03
// export function Completed({name, Completed}){
//     return <li>The subject {name} is {Completed === true ? 'completed': 'not completed'}</li>
// }

// Conditional Rendering Type-04
// export function Completed({name, Completed}){
//         return <li>The subject {name} is {Completed && 'Done'}</li>
// }

// Conditional Rendering Type-05
// export function Completed({name, Completed}){
//         return <li>The subject {name} is {Completed || 'Not'} Done</li>
// }

// Conditional Rendering Type-06
export function Completed({name, Completed}){
    const naming = name;
    if(Completed){
        return <li>{naming+' is completed'}</li>
        }
    else{
        return <li>{naming+' is not completed'}</li>
    }
}