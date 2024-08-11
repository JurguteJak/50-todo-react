import { Task } from "./Task";

export function TaskList() {
    const data = [
        {
            text: 'Reikia isivalyti dantis',
        },
        {
            text: 'Reikia nusiprausti veida',
        },
        {
            text: 'Reikia pasigaminti gerima',
        },
        {
            text: 'Reikia sestis/stotis prie PC',
        },
        {
            text: 'Reikia sukodinti krepsinio lentos uzduoti',
        },
        {
            text: 'Reikia isspresti uzduoti su kolegomis',
        },
    ];

    if (data.length === 0) {
        return (
            <div className="list empty">
                Empty
            </div>
        );
    }

    return (
        <div className="list">
            {data.map((item, index) => <Task key={index} data={item} />)}
        </div>
    );
}