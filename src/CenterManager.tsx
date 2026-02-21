import { useState } from "react";
import type { ICenters } from './types';
import { CenterItem } from "./CenterItem";
import stkCenters from "./data/USSELocations.json";
import type { Value } from 'platejs';
import {
  BlockquotePlugin,
  BoldPlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  ItalicPlugin,
  UnderlinePlugin,
} from '@platejs/basic-nodes/react';
import { BlockquoteElement } from './components/ui/blockquote-node';
import { Plate, usePlateEditor } from 'platejs/react';
import { Editor, EditorContainer } from './components/ui/editor';
import { FixedToolbar } from './components/ui/fixed-toolbar';
import { H1Element, H2Element, H3Element } from './components/ui/heading-node';
import { MarkToolbarButton } from './components/ui/mark-toolbar-button';
import { ToolbarButton } from './components/ui/toolbar'; 
 

interface CenterManagerProps {
    currentCenters: ICenters;
    // setCenters: (centers: ICenters) => void;
    addCenter: (centerName: string, latitude: number | null, longitude: number | null) => void;
    toggleCenter: (id: string, active: boolean) => void;
    archiveCenter: (id: string) => void;
    chooseCenter: (id: string) => void;
    //chooseCenter: (id: string, editor: any) => void;
    selectedCenterId: string | null;
    updateCenterPage: (id: string | null, detailJSON: string) => void;
}

export const CenterManager = ({ currentCenters, addCenter, toggleCenter, archiveCenter, chooseCenter, selectedCenterId, updateCenterPage }: CenterManagerProps) => {    
   const [newCenterName, setNewCenterName] = useState("");
   const [newCenterLatitude, setNewCenterLatitude] = useState(0);
   const [newCenterLongitude, setNewCenterLongitude] = useState(0);
//    const [editor, setEditor] = useState<Editor>({
//     const newEditor = usePlateEditor({
//         plugins: [BoldPlugin, 
//             ItalicPlugin, 
//             UnderlinePlugin,
//             H1Plugin.withComponent(H1Element),
//             H2Plugin.withComponent(H2Element),
//             H3Plugin.withComponent(H3Element),
//             BlockquotePlugin.withComponent(BlockquoteElement),
//         ], // Add the mark plugins
//         value: () => {
//             // const savedValue = localStorage.getItem('installation-react-demo');
//             // return savedValue ? JSON.parse(savedValue) : initialValue;
//             const realValue = currentCenters.find(center => center.id === selectedCenterId)?.detailJSON;
//             return realValue ? JSON.parse(realValue) : initialValue;
//         },
//         return newEditor; 
//    });
   
       const initialValue: Value = [
         {
            children: [{ text: 'Title' }],
            type: 'h3',
        },
        {
            children: [{ text: 'This is a quote.' }],
            type: 'blockquote',
        },
        {
            type: 'p',
            children: [
            { text: 'Hello! Try out the ' },
            { text: 'bold', bold: true },
            { text: ', ' },
            { text: 'italic', italic: true },
            { text: ', and ' },
            { text: 'underline', underline: true },
            { text: ' formatting.' },
            ],
        },
    ];

        const editor = usePlateEditor({
        plugins: [BoldPlugin, 
            ItalicPlugin, 
            UnderlinePlugin,
            H1Plugin.withComponent(H1Element),
            H2Plugin.withComponent(H2Element),
            H3Plugin.withComponent(H3Element),
            BlockquotePlugin.withComponent(BlockquoteElement),
        ], // Add the mark plugins
        value: () => {
            // const savedValue = localStorage.getItem('installation-react-demo');
            // return savedValue ? JSON.parse(savedValue) : initialValue;
            const realValue = currentCenters.find(center => center.id === selectedCenterId)?.detailJSON;
            return realValue ? JSON.parse(realValue) : initialValue;
        }, 
    });

    // function handleCenterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    //     const selectedId = e.target.value;
    //     chooseCenter(selectedId, editor);
    // }

   function handleAddCenter(e: React.FormEvent) {
        e.preventDefault();
        if(newCenterName.trim() === "") return;
        console.log("Adding center:", newCenterName, newCenterLatitude, newCenterLongitude);
         const newCenter = addCenter(newCenterName, newCenterLatitude, newCenterLongitude);
        //const newCenter = addCenter(newCenterName);

        setNewCenterName("");
        setNewCenterLatitude(0);
        setNewCenterLongitude(0);

        return newCenter;
    }

    return (
        <>
            <div>
                <form onSubmit={handleAddCenter} className="mb-4 p-2 border border-gray-300 rounded-lg bg-gray-300">
                    <input className = "mr-2 px-2 w-48 bg-white border border-gray-400 rounded"
                        type="text"
                        value={newCenterName}
                        onChange={(e) => setNewCenterName(e.target.value)}
                        placeholder="Enter center name"
                    />
                    <input className = "ml-2 px-2 w-32"
                        type="hidden" 
                        value=  {newCenterLatitude !== 0 ? newCenterLatitude : '30.1894'}
                        onChange={(e) => setNewCenterLatitude(Number(e.target.value))}
                        placeholder="Enter latitude"
                 />
                    <input
                        type="hidden"
                        value={newCenterLongitude !== 0 ? newCenterLongitude : '82.6394'}
                        onChange={(e) => setNewCenterLongitude(Number(e.target.value))}
                        placeholder="Enter longitude"
                     />  
                    <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Center</button>
                </form>
            </div> 



             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 text-center font-semibold bg-gray-200 text-2xl sm:text-sm">
                <div className="bg-slate-400 rounded-xl ">
                  <div>
                    {stkCenters.Locations.map(item => (
                    <details key={item.State} style={{ border: '1px solid black', padding: '2px', }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'normal',  textAlign: 'left' }}>
                            {item.State} 
                        </summary>
                        <div style={{ padding: '1px 0 0 0', textAlign: 'left' }}>
                            {item.Stakes.map(stake => (     
                                <div key={stake.Name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px', padding: '2px', borderBottom: '1px solid black' }} >
                                    <div className="ml-2 text-black">{stake.Name}</div>
                                    <div className="ml-2">
                                        <button 
                                        className="px-1 py-0 bg-white text-black rounded hover:bg-blue-400"
                                        onClick={() => addCenter(stake.Name, stake.Latitude, stake.Longitude)}> 
                                        Add
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </details>
                   ))}
                </div>
            </div>               
                <div className="bg-slate-400 rounded-l text-2xl sm:text-sm">
                    {currentCenters == null || currentCenters.length === 0 ? 
                       <div>No centers available</div>
                    : 
                    <div >
                        {currentCenters.map(center => {
                            return (
                                    <CenterItem
                                        id={center.id}
                                        centerName={center.centerName}
                                        active={center.active}
                                        key={center.id}
                                        selectedCenterID={selectedCenterId}
                                        toggleCenter={toggleCenter}
                                        archiveCenter={archiveCenter}
                                        chooseCenter={chooseCenter}
                                    /> 
                             )
                        })}
                    </div> 
                    }
                </div>
            </div>
            <div>
                <div className="mt-2 border border-black">
                    {selectedCenterId != null ? 
                    <p>Edit the page for  {currentCenters.find(center => center.id === selectedCenterId)?.centerName   }</p> 
                    : <p>No center selected.</p>}
                </div>
            </div>
             <div className="mt-2 border border-black">
                {selectedCenterId != null ? (
                    <div >
                        <Plate editor={editor}
                            onChange={({ value }) => {
                            updateCenterPage(selectedCenterId, JSON.stringify(value));
                            //localStorage.setItem('installation-react-demo', JSON.stringify(value));
                        }}>
                            <FixedToolbar className="justify-start rounded-t-lg">
                                <ToolbarButton onClick={() => editor.tf.h1.toggle()}>H1</ToolbarButton>
                                <ToolbarButton onClick={() => editor.tf.h2.toggle()}>H2</ToolbarButton>
                                <ToolbarButton onClick={() => editor.tf.h3.toggle()}>H3</ToolbarButton>
                                <ToolbarButton onClick={() => editor.tf.blockquote.toggle()}>Quote</ToolbarButton>
                                <MarkToolbarButton nodeType="bold" tooltip="Bold (⌘+B)">B</MarkToolbarButton>
                                <MarkToolbarButton nodeType="italic" tooltip="Italic (⌘+I)">I</MarkToolbarButton>
                                <MarkToolbarButton nodeType="underline" tooltip="Underline (⌘+U)">U</MarkToolbarButton>
                            </FixedToolbar>
                            <EditorContainer>
                                <Editor placeholder="This is going to be Center Details" />
                            </EditorContainer>
                        </Plate>
                     </div>
                ) : (
                    <p>Please select a center to view its details.</p>
                )}
            </div>
            <a href="CenterDetail">Go to Center Detail Page</a>
        </>
    );
}