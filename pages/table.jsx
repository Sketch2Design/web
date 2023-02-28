const ar = [
    { id: 1, month: 'December', year: '2022', amount: 400, paid: 200 },
    { id: 2, month: 'January', year: '2023', amount: 400, paid: 400 },
    { id: 3, month: 'February', year: '2023', amount: 400, paid: 0 },
]

export default function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Amount to be paid</th>
                    <th>Paid/Not-paid (Balance)</th>
                </tr>
            </thead>

            <tbody>
                {ar.map((item) => (
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                        <td>
                            {item.paid == item.amount
                                ? 'Paid'
                                : item.paid == 0
                                ? 'Not-paid'
                                : `Balance - ${item.amount - item.paid}`}
                        </td>
                    </tr>
                ))}
                8
            </tbody>
        </table>
    )
}
