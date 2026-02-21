// import React, { useMemo } from 'react';
// import {
//   MRT_Table,
//   useMaterialReactTable,
//   type MRT_ColumnDef,
// } from 'material-react-table';
// import type { IStake, IStakes } from './types';
// import { getDistance } from 'geolib';

// interface StakeDistanceTableProps {
//     stakes: IStakes;
//     selectedCenterId: string | null;
//     updateStakeAssignments: (id: string, assignments: string[]) => void;
//     currentCenters: ICenters;
// }


// const data = [
//     {
//     UnitNumber: "015",
//     StakeName: "New Orleans Stake",
//     Address: "123 River St, New Orleans, LA",
//     Latitude: 29.9511,
//     Longitude: -90.0715,
//     Distance: 80
// },
// {
//     UnitNumber: "016",
//     StakeName: "Baton Rouge Stake",
//     Address: "456 Bayou St, Baton Rouge, LA",
//     Latitude: 30.4584,
//     Longitude: -91.1403,
//     Distance: 110
//     }
// ];



// export const StakeDistanceTable = ( { stakes, selectedCenterId, updateStakeAssignments, currentCenters }: StakeDistanceTableProps ) => {

//     const data1 = useMemo<IStake[]>(() => [...data], []); //data is memoized

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: "UnitNumber", //simple recommended way to define a column
//         header: "Add",
//         // muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
//         // Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
//       },
//       {
//         accessorKey: "UnitNumber", //simple recommended way to define a column
//         header: "Unit Number",
//         // muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
//         // Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
//       },
//       {
//         accessorKey: "StakeName", //simple recommended way to define a column
//         header: "Stake Name",
//         // Header: <i style={{ color: "red" }}>Age</i> //optional custom markup
//       },      
//       {
//         accessorKey: "Distance", //simple recommended way to define a column
//         header: "Distance (km)",
//         // Header: <i style={{ color: "red" }}>Age</i> //optional custom markup
//       },
//      {
//         accessorKey: "Distance", //simple recommended way to define a column
//         header: "Already Assigned",
//         // Header: <i style={{ color: "red" }}>Age</i> //optional custom markup
//       }
//     ],
//     []
//   );

// //    const columns = useMemo(
// //     () => [
// //       {
// //         accessorKey: "UnitNumber", //simple recommended way to define a column
// //         header: "Unit Number",
// //         // muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
// //         // Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
// //       },
// //       {
// //         accessorKey: "StakeName", //simple recommended way to define a column
// //         header: "Stake Name",
// //         // Header: <i style={{ color: "red" }}>Age</i> //optional custom markup
// //       }
// //     ],
// //     []
// //   );

//   const table = useMaterialReactTable({
//    columns,
//    data, 
//     enableKeyboardShortcuts: false,
//     enableColumnActions: false,
//     enableColumnFilters: false,
//     enablePagination: false,
//     enableSorting: false,
//    muiTableProps: {
//       sx: {
//         border: '1px solid rgba(81, 81, 81, .5)',
//         caption: {
//           captionSide: 'top',
//         },
//       },
//     },    
//     muiTableHeadCellProps: {
//       sx: {
//         border: '1px solid rgba(81, 81, 81, .5)',
//         fontStyle: 'italic',
//         fontWeight: 'normal',
//       },
//     },
//     muiTableBodyCellProps: {
//       sx: {
//         border: '1px solid rgba(81, 81, 81, .5)',
//       },
//     },
//    //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.) 
//  });

//   return  <MRT_Table table={table} />;
    
// };


export const StakeDistanceTable = () =>{        
    return (
        <>
            <div className="mt-4 text-black p-1 rounded-lg border border-gray-500 text-center">
                <h3>We want to help you help others.</h3>
            </div>
            
        </>
    );
}

























// // import { useMemo } from 'react';
// // import {
// //     MaterialReactTable, 
// //     useMaterialReactTable, 
// //     type MRT_ColumnDef,
// // } from 'material-react-table';
// // import type { IStake, ICenters } from './types';
// // import { getDistance } from 'geolib';


// // interface StakeDistanceTableProps {
// //     stakes: IStake[];
// //     selectedCenterId: string | null;
// //     updateStakeAssignments: (id: string, assignments: string[]) => void;
// //     currentCenters: ICenters;
// // }


// // export const StakeDistanceTable = ({ stakes, selectedCenterId, updateStakeAssignments, currentCenters }: StakeDistanceTableProps) =>{        
// //    const columns = useMemo<MRT_ColumnDef<Person>[]>(
// //     () => [
// //      {
// //         accessorKey: 'stake.UnitNumber', //access nested data with dot notation
// //         header: 'Unit Number',
// //         size: 150,
// //       },
// //       {
// //         accessorKey: 'stake.Name',
// //         header: 'Last Name',
// //         size: 150,
// //       },
// //       {
// //         accessorKey: 'stake.Address', //normal accessorKey
// //         header: 'Address',
// //         size: 200,
// //       },
// //       {
// //         accessorKey: 'stake.Distance',
// //         header: 'Distance (km)',
// //         size: 150,
// //       },
// //       {
// //         accessorKey: 'stake.CenterStaffTrained',
// //         header: 'Center Staff Trained',
// //         size: 150,
// //       },
// //           {
// //         accessorKey: 'stake.CenterStaffPProficient',
// //         header: 'Center Staff Proficient',
// //         size: 150,
// //       },
// //       {
// //         accessorKey: 'stake.WorkTeamsTrained',
// //         header: 'Work Teams Trained',
// //         size: 150,
// //       },
// //         {
// //         accessorKey: 'stake.WorkTeamsProficient',
// //         header: 'Work Teams Proficient',
// //         size: 150,
// //       },
// //       {
// //         accessorKey: 'stake.AssignedCenterID',
// //         header: 'Assigned Center ID',
// //         size: 150,
// //       },
// //     ],
// //     [],
// //   );

// //     const table = useMaterialReactTable({
// //     columns,
// //     stakes, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
// //   });

   
// //     return (
// //         <>
// //                    <ul>
// //                         {stakes != null && stakes.map((stake) => (
// //                             <li key={stake.UnitNumber}>{stake.Name} {stake.Distance != null ? `(${(stake.Distance*0.62).toFixed(0)} mi)` : '?'} </li>
// //                         ))}
// //                     </ul>
// //         </>
// //     );
// // }