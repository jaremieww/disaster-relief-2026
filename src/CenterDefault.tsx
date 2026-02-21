
// const buildDefaultCenterJSON = (centerName: string) => {
//     const initialValue: Value = [
//         {
//             children: [{ text: `${centerName}` }],
//             type: 'h3',
//         },
//         {
//             type: 'p',
//             children: [
//             { text: 'Hello! Try out the ' },
//             { text: 'bold', bold: true },
//             { text: ', ' },
//             { text: 'italic', italic: true },
//             { text: ', and ' },
//             { text: 'underline', underline: true },
//             { text: ' formatting.' },
//             ],
//         },
//     ];
//     return JSON.stringify(initialValue);
// }

const CenterDefault = () =>{        

    return (
        <>
            <div className="mt-4 text-black p-1 rounded-lg border border-gray-500 text-center">
                <h3>We want to help you help others.</h3>
            </div>
            
        </>
    );
}
export default CenterDefault;