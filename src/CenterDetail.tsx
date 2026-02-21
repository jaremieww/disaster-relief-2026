import type { ICenters } from './types';
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
// import { FixedToolbar } from './components/ui/fixed-toolbar';
import { H1Element, H2Element, H3Element } from './components/ui/heading-node';
// import { MarkToolbarButton } from './components/ui/mark-toolbar-button';
// import { ToolbarButton } from './components/ui/toolbar'; 
 

interface CenterDetailProps {
    currentCenters: ICenters;
    selectedCenterId: string | null;
    chooseCenter: (id: string) => void;
    //setSelectedCenterId: (id: string | null) => void;
    currentStakes: IStakes | null;
}

export const CenterDetail = ({ currentCenters, selectedCenterId, chooseCenter, currentStakes }: CenterDetailProps) => { 
    
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

    // export default function MyStaticPage() {
    //    return <PlateStatic editor={editor} />;
    // }

    function handleCenterChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedId = e.target.value;
        chooseCenter(selectedId);
    }

    return (
        <>
            {/* <h1>Center Detail Page </h1> */}
            {/* <p>{currentCenters != null ? `There are ${currentCenters.length} centers available.` : "No centers available."}</p>      */}
            {/* <ul>
                {currentCenters != null && currentCenters.map((center) => (
                    <li key={center.id}>{center.centerName} {center.active ? "(Active)" : "(Inactive)"}</li>
                ))}
            </ul> */}
            <div className="w-full mt-2 p-4 border border-gray-500 rounded">
                <form>
                    <label htmlFor="centerPicker">Select Center:</label>
                    <select id="centerPicker" name="centerPicker" 
                            onChange={handleCenterChange}   
                            value={selectedCenterId !== null ? selectedCenterId : ""}
                            >
                        {currentCenters == null || currentCenters.length === 0 ? 
                            <option value="">--No centers to choose--</option>
                        : <option value="">--Choose an center--</option>
                        }
                        {currentCenters != null && currentCenters.map((center) => (
                            center.active ? (
                                <option key={center.id} value={center.id}>  
                                    {center.centerName}
                                </option>
                            ) : null
                        ))}    
                    </select>
                </form>
            </div>
            <div >
                <div className="mt-2 border border-black p-2 rounded-lg">
                    {selectedCenterId != null ? (
                        <ul>
                            {currentCenters.find(center => center.id === selectedCenterId)?.assignedStakes.length === 0 ? (     
                                <li>No stakes assigned to this center.</li>
                            ) : (
                                currentCenters.find(center => center.id === selectedCenterId)?.assignedStakes.map((stakeUnitNumber) => {
                                    const stake = currentStakes?.find(s => s.unitNumber === stakeUnitNumber);
                                    return stake ? (
                                        <li key={stake.unitNumber}>{stake.stakeName}</li>
                                    ) : null;
                                })
                            )}
                        </ul>       
                    ) : (
                        <p>Please select a center to view its assigned stakes.</p>
                    )}
                </div>
            </div>
            {/* <div className="mt-2 border border-black">
                <PlateStatic editor={editor} />;
            </div> */}
            <div className="mt-2 border border-black">
                {selectedCenterId != null ? (
                    <div >
                       <Plate editor={editor}>
                            {/* <FixedToolbar className="justify-start rounded-t-lg">
                                <ToolbarButton onClick={() => editor.tf.h1.toggle()}>H1</ToolbarButton>
                                <ToolbarButton onClick={() => editor.tf.h2.toggle()}>H2</ToolbarButton>
                                <ToolbarButton onClick={() => editor.tf.h3.toggle()}>H3</ToolbarButton>
                                <ToolbarButton onClick={() => editor.tf.blockquote.toggle()}>Quote</ToolbarButton>
                                <MarkToolbarButton nodeType="bold" tooltip="Bold (⌘+B)">B</MarkToolbarButton>
                                <MarkToolbarButton nodeType="italic" tooltip="Italic (⌘+I)">I</MarkToolbarButton>
                                <MarkToolbarButton nodeType="underline" tooltip="Underline (⌘+U)">U</MarkToolbarButton>
                            </FixedToolbar> */}
                            <EditorContainer>
                                <Editor placeholder="This is going to be Center Details" />
                            </EditorContainer>
                        </Plate>
                     </div>
                ) : (
                    <p>Please select a center to view its details.</p>
                )}
            </div>
        </>
    );
}